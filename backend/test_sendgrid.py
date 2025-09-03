#!/usr/bin/env python3

import os
from dotenv import load_dotenv
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()

def test_sendgrid_connection():
    """Test SendGrid API connection and configuration"""
    
    api_key = os.getenv('SENDGRID_API_KEY')
    sender_email = os.getenv('SENDER_EMAIL')
    recipient_email = os.getenv('RECIPIENT_EMAIL')
    
    print(f"API Key: {api_key[:10]}...{api_key[-10:] if api_key else 'None'}")
    print(f"Sender Email: {sender_email}")
    print(f"Recipient Email: {recipient_email}")
    
    if not all([api_key, sender_email, recipient_email]):
        print("❌ Missing SendGrid configuration!")
        return False
    
    # Test simple email
    message = Mail(
        from_email=sender_email,
        to_emails=recipient_email,
        subject="Test Email from Ajay Coaching Classes",
        html_content="<h2>Test Email</h2><p>This is a test email to verify SendGrid integration.</p>"
    )
    
    try:
        sg = SendGridAPIClient(api_key)
        response = sg.send(message)
        print(f"✅ Email sent! Status code: {response.status_code}")
        print(f"Response headers: {response.headers}")
        return response.status_code == 202
        
    except Exception as e:
        print(f"❌ SendGrid error: {str(e)}")
        return False

if __name__ == "__main__":
    print("Testing SendGrid Integration...")
    print("=" * 50)
    success = test_sendgrid_connection()
    print("=" * 50)
    print(f"Result: {'✅ SUCCESS' if success else '❌ FAILED'}")