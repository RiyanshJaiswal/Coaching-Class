from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
from emails import send_contact_form_email, EmailDeliveryError


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactFormRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=10, max_length=20)
    message: Optional[str] = Field(None, max_length=1000)

class ContactFormResponse(BaseModel):
    status: str
    message: str

class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    message: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    email_sent: bool = False
    ip_address: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(request: ContactFormRequest, background_tasks: BackgroundTasks):
    """
    Submit contact form and send email notification
    """
    try:
        # Create contact submission record
        submission = ContactSubmission(
            name=request.name,
            email=request.email,
            phone=request.phone,
            message=request.message
        )
        
        # Store in database
        submission_dict = submission.dict()
        await db.contact_submissions.insert_one(submission_dict)
        
        # Send email in background
        background_tasks.add_task(
            send_email_notification,
            submission.id,
            request.name,
            request.email,
            request.phone,
            request.message or ""
        )
        
        logger.info(f"Contact form submitted by {request.name} ({request.email})")
        
        return ContactFormResponse(
            status="success",
            message="Thank you for your message! We will contact you soon."
        )
        
    except Exception as e:
        logger.error(f"Contact form submission failed: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Unable to process your request. Please try again later."
        )

async def send_email_notification(submission_id: str, name: str, email: str, phone: str, message: str):
    """Background task to send email notification"""
    try:
        success = send_contact_form_email(name, email, phone, message)
        
        # Update database record
        await db.contact_submissions.update_one(
            {"id": submission_id},
            {"$set": {"email_sent": success}}
        )
        
        if success:
            logger.info(f"Email sent successfully for submission {submission_id}")
        else:
            logger.warning(f"Email sending failed for submission {submission_id}")
            
    except EmailDeliveryError as e:
        logger.error(f"Email delivery error for submission {submission_id}: {str(e)}")
        await db.contact_submissions.update_one(
            {"id": submission_id},
            {"$set": {"email_sent": False, "email_error": str(e)}}
        )
    except Exception as e:
        logger.error(f"Unexpected error sending email for submission {submission_id}: {str(e)}")

@api_router.get("/contact/submissions", response_model=List[dict])
async def get_contact_submissions():
    """Get all contact form submissions (for admin use)"""
    try:
        submissions = await db.contact_submissions.find().sort("timestamp", -1).to_list(100)
        return submissions
    except Exception as e:
        logger.error(f"Failed to fetch contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Unable to fetch submissions")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
