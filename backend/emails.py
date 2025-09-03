from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import os
from typing import Optional
import logging

logger = logging.getLogger(__name__)

class EmailDeliveryError(Exception):
    pass

def send_contact_form_email(name: str, email: str, phone: str, message: str = ""):
    """
    Send contact form submission via SendGrid to the recipient
    
    Args:
        name: Contact person's name
        email: Contact person's email
        phone: Contact person's phone number
        message: Optional message from the contact form
    """
    
    # Get environment variables
    api_key = os.getenv('SENDGRID_API_KEY')
    sender_email = os.getenv('SENDER_EMAIL')
    recipient_email = os.getenv('RECIPIENT_EMAIL')
    
    if not all([api_key, sender_email, recipient_email]):
        raise EmailDeliveryError("SendGrid configuration incomplete")
    
    # Create email subject
    subject = f"New Enquiry from Ajay Coaching Classes Website - {name}"
    
    # Create HTML email content
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Student Enquiry</title>
        <style>
            body {{
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }}
            .header {{
                background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 8px 8px 0 0;
            }}
            .content {{
                background: #f8fafc;
                padding: 30px;
                border: 1px solid #e2e8f0;
            }}
            .footer {{
                background: #1f2937;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 0 0 8px 8px;
                font-size: 14px;
            }}
            .detail-row {{
                display: flex;
                margin-bottom: 15px;
                padding: 10px;
                background: white;
                border-left: 4px solid #2563eb;
                border-radius: 4px;
            }}
            .label {{
                font-weight: bold;
                width: 120px;
                color: #374151;
            }}
            .value {{
                color: #111827;
            }}
            .message-section {{
                background: white;
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
                border: 1px solid #d1d5db;
            }}
            .cta-section {{
                text-align: center;
                margin: 20px 0;
            }}
            .whatsapp-btn {{
                background: #25d366;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                display: inline-block;
                font-weight: bold;
            }}
        </style>
    </head>
    <body>
        <div class="header">
            <h1>🎓 Ajay Coaching Classes</h1>
            <p>New Student Enquiry Received</p>
        </div>
        
        <div class="content">
            <h2>Student Details</h2>
            
            <div class="detail-row">
                <span class="label">Name:</span>
                <span class="value">{name}</span>
            </div>
            
            <div class="detail-row">
                <span class="label">Email:</span>
                <span class="value">{email}</span>
            </div>
            
            <div class="detail-row">
                <span class="label">Phone:</span>
                <span class="value">{phone}</span>
            </div>
            
            {f'''
            <div class="message-section">
                <h3>Message:</h3>
                <p style="margin: 0; white-space: pre-wrap;">{message}</p>
            </div>
            ''' if message else '<p><em>No additional message provided.</em></p>'}
            
            <div class="cta-section">
                <p><strong>Quick Actions:</strong></p>
                <a href="tel:{phone}" style="background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 5px;">📞 Call Now</a>
                <a href="mailto:{email}" style="background: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 5px;">✉️ Reply Email</a>
                <a href="https://wa.me/{phone.replace('+', '').replace(' ', '').replace('-', '')}?text=Hello%20{name.replace(' ', '%20')},%20Thank%20you%20for%20your%20enquiry%20about%20Ajay%20Coaching%20Classes." 
                   class="whatsapp-btn">💬 WhatsApp</a>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Ajay Coaching Classes</strong></p>
            <p>B-503, Lakeview Apartment, Paschim Vihar, near New Bosco Public School, New Delhi</p>
            <p>📞 9999635215 | ✉️ jaiswalrey462000@gmail.com</p>
            <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">
                This enquiry was submitted through the Ajay Coaching Classes website contact form.
            </p>
        </div>
    </body>
    </html>
    """
    
    # Create plain text version
    plain_content = f"""
    New Student Enquiry - Ajay Coaching Classes
    
    Student Details:
    Name: {name}
    Email: {email}
    Phone: {phone}
    
    {"Message: " + message if message else "No additional message provided."}
    
    Quick Actions:
    - Call: {phone}
    - Email: {email}
    - WhatsApp: https://wa.me/{phone.replace('+', '').replace(' ', '').replace('-', '')}
    
    ---
    Ajay Coaching Classes
    B-503, Lakeview Apartment, Paschim Vihar, near New Bosco Public School, New Delhi
    Phone: 9999635215 | Email: jaiswalrey462000@gmail.com
    
    This enquiry was submitted through the website contact form.
    """
    
    # Create the email message
    message_obj = Mail(
        from_email=sender_email,
        to_emails=recipient_email,
        subject=subject,
        html_content=html_content,
        plain_text_content=plain_content
    )
    
    try:
        # Send the email
        sg = SendGridAPIClient(api_key)
        response = sg.send(message_obj)
        
        logger.info(f"Email sent successfully. Status code: {response.status_code}")
        return response.status_code == 202
        
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise EmailDeliveryError(f"Failed to send email: {str(e)}")

def send_test_email():
    """Send a test email to verify SendGrid configuration"""
    try:
        return send_contact_form_email(
            name="Test Student",
            email="test@example.com",
            phone="9999999999",
            message="This is a test message to verify SendGrid integration is working properly."
        )
    except Exception as e:
        logger.error(f"Test email failed: {str(e)}")
        raise e