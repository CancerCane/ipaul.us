<!-- markdownlint-disable -->
# Contact Form Setup Guide

This guide provides instructions for setting up email notifications and form handling for the iPaul Media website contact form.

## Current Setup: Netlify Forms

The contact form is currently configured to use Netlify Forms (if deployed on Netlify). Here's what you need to do:

### 1. Email Notifications in Netlify

1. Log in to your Netlify account
2. Go to your site dashboard
3. Navigate to **Forms** → **Form notifications**
4. Click **Add notification** → **Email notification**
5. Configure:
   - **Email to notify**: Enter the email where you want to receive submissions (e.g., `ipaul@ipaul.us`)
   - **Subject**: `New Contact Form Submission from {{name}}`
   - **Form**: Select "contact" from the dropdown
6. Save the notification

### 2. Netlify Forms Dashboard

- Access submissions: Netlify Dashboard → Forms → View form submissions
- Export data: Available as CSV download
- Spam filtering: Automatically enabled with honeypot field

### 3. Form Submission Limits

- Free tier: 100 submissions/month
- Pro tier: 1,000 submissions/month
- Business tier: Unlimited

## Alternative Form Handlers

### Option 1: Formspree (Recommended for GitHub Pages)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace the form action in `contact.md`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove Netlify-specific attributes
5. Formspree automatically sends emails to your registered address

### Option 2: Web3Forms (No Registration Required)

1. Get an access key from [web3forms.com](https://web3forms.com)
2. Update the form:
   ```html
   <form action="https://api.web3forms.com/submit" method="POST">
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
   ```
3. Instant email notifications, no dashboard required

### Option 3: EmailJS (Client-side)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add EmailJS script to your page
3. Configure with JavaScript:
   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
   ```

### Option 4: Custom Backend (Self-hosted)

For complete control, create a serverless function:

#### Using Netlify Functions:
```javascript
// netlify/functions/contact-form.js
exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  
  // Send email using SendGrid, Mailgun, or SMTP
  // Store in database if needed
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submitted successfully" })
  };
};
```

#### Using Vercel Functions:
```javascript
// api/contact.js
export default async function handler(req, res) {
  const data = req.body;
  
  // Process form data
  // Send email notification
  
  res.status(200).json({ message: "Success" });
}
```

## Email Service Configuration

### For Automated Emails

Choose one of these services for sending automated emails:

1. **SendGrid** (Recommended)
   - Free tier: 100 emails/day
   - API key required
   - Good deliverability

2. **Mailgun**
   - Pay-as-you-go pricing
   - Excellent API
   - Built for developers

3. **Amazon SES**
   - Very cost-effective
   - Requires AWS account
   - Best for high volume

### Email Configuration Checklist

- [ ] Set up SPF records for your domain
- [ ] Configure DKIM authentication
- [ ] Add email address to form notifications
- [ ] Test form submission
- [ ] Set up backup notification method
- [ ] Create email templates for auto-responses

## Database Storage (Optional)

To store form submissions in a database:

### Option 1: Airtable
- Visual database with API
- Free tier available
- Easy integration with Zapier

### Option 2: Google Sheets
- Use Google Forms API
- Free and simple
- Good for basic needs

### Option 3: Supabase/Firebase
- Real-time database
- Free tier available
- Good for scaling

## Testing Your Form

1. Submit a test entry with all fields
2. Check email delivery (including spam folder)
3. Verify data storage (if applicable)
4. Test error handling
5. Confirm thank-you page redirect

## Security Considerations

1. **Spam Protection**: Already implemented with honeypot field
2. **Rate Limiting**: Add if using custom backend
3. **Data Privacy**: Ensure GDPR compliance
4. **SSL**: Always use HTTPS for form submission

## Monitoring and Maintenance

1. Set up email alerts for form failures
2. Regular testing (monthly)
3. Monitor submission volume
4. Check for spam submissions
5. Update privacy policy as needed

## Quick Setup for Different Platforms

### GitHub Pages
Use Formspree or Web3Forms (no server-side code allowed)

### Netlify
Current setup works out of the box, just configure email notifications

### Vercel
Use Vercel Functions with your preferred email service

### Cloudflare Pages
Use Cloudflare Workers or third-party form service

## Support Contact

For form-related issues:
- Email: ipaul@ipaul.us
- Include: Screenshot of error, browser used, time of submission
