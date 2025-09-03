# Ajay Coaching Classes - API Contracts

## Overview
This document outlines the API contracts between frontend and backend for the contact form functionality with SendGrid email integration.

## Current Frontend State
- Contact form is implemented with mock data in `/frontend/src/components/Contact.jsx`
- Form fields: name, email, phone, message
- Currently shows alert on submission - needs to be replaced with actual API call

## Backend Implementation Required

### 1. Contact Form Endpoint

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (required)",
  "message": "string (optional)"
}
```

**Response Success (200)**:
```json
{
  "status": "success",
  "message": "Thank you for your message! We will contact you soon."
}
```

**Response Error (400/500)**:
```json
{
  "status": "error",
  "message": "Error description"
}
```

### 2. Email Configuration

**Recipient**: jaiswalrey462000@gmail.com
**Email Template**: Professional HTML template for coaching class enquiry
**Subject**: "New Enquiry from Ajay Coaching Classes Website"

**Email Content Structure**:
- Header with Ajay Coaching Classes branding
- Student/Parent details (name, email, phone)
- Message content
- Clear formatting for easy reading

### 3. Environment Variables Required

**Backend .env**:
```
SENDGRID_API_KEY=your_sendgrid_api_key
SENDER_EMAIL=verified_sender@yourdomain.com (or noreply@ajaycoaching.com)
RECIPIENT_EMAIL=jaiswalrey462000@gmail.com
```

### 4. Frontend Integration Changes

**File**: `/frontend/src/components/Contact.jsx`
**Changes Required**:
1. Remove mock alert functionality
2. Add API call to backend `/api/contact` endpoint
3. Add loading state during submission
4. Show success/error messages based on API response
5. Reset form on successful submission
6. Add proper error handling

### 5. Backend Dependencies

**New packages to install**:
- sendgrid
- python-email-validator (if not already installed)

### 6. Database Requirements (Optional)
- Store contact submissions in MongoDB for record keeping
- Include timestamp, ip address, and submission status

## Implementation Steps

1. ✅ Get SendGrid integration playbook
2. ⏳ Install SendGrid in backend
3. ⏳ Create contact form API endpoint
4. ⏳ Implement email sending functionality
5. ⏳ Update frontend to use API instead of mock
6. ⏳ Test email functionality
7. ⏳ Store submissions in database (optional)

## Testing Requirements

1. Test contact form submission with valid data
2. Test email delivery to jaiswalrey462000@gmail.com
3. Test form validation and error handling
4. Test responsive design on different devices
5. Verify email template formatting

## Security Considerations

1. Input validation and sanitization
2. Rate limiting for contact form submissions
3. CORS configuration
4. Secure API key storage
5. SQL injection prevention (if using database)