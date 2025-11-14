# EmailJS Setup Guide

The contact form is now configured to send emails using EmailJS. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. **Copy the Service ID** (you'll need this)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Content:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. **Copy your Public Key** (also called API Key)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs from EmailJS

## Step 6: Update the Email Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email (vedantbhalerao315@gmail.com)

## Step 7: Test the Form

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit and check your email (vedantbhalerao315@gmail.com)

## Troubleshooting

- **Emails not sending?** Check the browser console for errors
- **Invalid credentials?** Verify your environment variables are correct
- **Template not found?** Make sure your Template ID matches exactly
- **Service error?** Verify your email service is properly connected in EmailJS

## Security Note

The `.env` file is already in `.gitignore`, so your credentials won't be committed to version control. Make sure to add the same environment variables to your hosting platform (Vercel, Netlify, etc.) when deploying.


