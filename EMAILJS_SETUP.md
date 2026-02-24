# Nvilo Infotech Website

## EmailJS Setup Instructions

To enable email functionality for forms and chatbot conversations, you need to set up EmailJS:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a free account and verify your email

### 2. Set Up Email Service
1. In your EmailJS dashboard, click "Email Services"
2. Add a new service (Gmail, Outlook, etc.)
3. Follow the setup instructions for your email provider
4. Note down your **Service ID**

### 3. Create Email Template
Create one template in your EmailJS dashboard:

#### Template: Form Submissions (`TEMPLATE_ID`)
```
Subject: New Contact Form Submission

Hi Admin,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Service: {{service}}
Message: {{message}}

Best regards,
Nvilo Infotech Website
```

### 4. Get Your Public Key
1. In your EmailJS dashboard, go to "Account" → "General"
2. Copy your **Public Key**

### 4. Configure the Application
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:
   ```typescript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'your_actual_service_id',
     TEMPLATE_ID: 'your_form_template_id',
     PUBLIC_KEY: 'your_actual_public_key',
   };
   ```

### 6. Test the Setup
1. Run the application: `npm run dev`
2. Fill out a contact form or use the chatbot
3. Check your email to confirm messages are being received

## Features

- **WhatsApp Integration**: Sticky WhatsApp button for instant communication
- **Email Integration**: All form submissions are sent to your email
- **Responsive Design**: Works on all devices
- **Modern UI**: Dark theme with smooth animations

## Development

```bash
npm install
npm run dev
npm run build
```