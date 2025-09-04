<!-- markdownlint-disable -->
# GitHub Pages Contact Form Setup Guide

Since your site is deployed on GitHub Pages, you'll need a third-party service to handle form submissions. Here's how to set it up:

## Option 1: Formspree (Recommended - Easy Setup)

### Step 1: Create Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up with your email: `ipaul@ipaul.us`
3. Verify your email address

### Step 2: Create Your Form

1. In Formspree dashboard, click "New Form"
2. Name it "iPaul Media Contact Form"
3. Copy the form endpoint (looks like: `https://formspree.io/f/xyzabcde`)

### Step 3: Update Your Contact Form

Edit your `contact.md` file and replace the form opening tag:

```html
<!-- Replace this line: -->
<form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you">

<!-- With this: -->
<form name="contact" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

Also remove the Netlify-specific honeypot field and add Formspree's:
```html
<!-- Remove this: -->
<p class="hidden" style="display:none !important">
  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
</p>

<!-- Add this for Formspree spam protection: -->
<input type="text" name="_gotcha" style="display:none" />
```

### Step 4: Configure Form Settings in Formspree

1. In your Formspree dashboard, click on your form
2. Go to "Settings" → "Email Notifications"
3. Configure:
   - **Send to**: `ipaul@ipaul.us`
   - **Subject**: "New Contact: {project_type} from {firstname} {lastname}"
   - **Reply-To**: Will use the submitter's email automatically

### Step 5: Set Up Auto-Response (Optional)

1. In Formspree, go to "Autoresponse" tab
2. Enable autoresponse
3. Use this template:

```
Subject: Thanks for contacting iPaul Media!

Hi {{firstname}},

Thank you for reaching out to iPaul Media. We've received your inquiry about {{project_type}} and will get back to you within 1-2 business days.

Your project details:
- Budget Range: {{budget}}
- Message: {{message}}

If you need immediate assistance, feel free to call us at 945-358-6236.

Best regards,
The iPaul Media Team
```

## Option 2: Web3Forms (Alternative - No Dashboard)

If you prefer a simpler solution without a dashboard:

### Step 1: Get Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email: `ipaul@ipaul.us`
3. Click "Get Access Key"
4. Check your email for the access key

### Step 2: Update Your Form

Replace the form tag with:
```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
  <input type="hidden" name="redirect" value="https://ipaul.us/thank-you">
  <!-- Rest of your form fields -->
```

## Immediate Actions to Take

1. **Choose a service** (Formspree recommended for beginners)
2. **Sign up and get your form endpoint/key**
3. **Update contact.md** with the new form action
4. **Commit and push changes**:
   ```bash
   git add contact.md
   git commit -m "Configure contact form for GitHub Pages with Formspree"
   git push origin main
   ```
5. **Wait 2-3 minutes** for GitHub Pages to deploy
6. **Test the form** at https://ipaul.us/contact

## Testing Your Setup

1. Go to your live site
2. Fill out the form with test data:
   - First Name: Test
   - Last Name: User
   - Email: your-email@example.com
   - Phone: 123-456-7890
   - Project Type: Other
   - Budget: Not Sure Yet
   - Message: This is a test submission
3. Submit the form
4. Check your email (including spam folder)
5. Verify in Formspree dashboard (if using Formspree)

## Managing Submissions

### With Formspree:

- **Dashboard**: View all submissions at formspree.io
- **Export**: Download as CSV
- **Search**: Find specific submissions
- **Archive**: Mark as handled
- **Spam**: Automatically filtered

### Email Management:

1. Create a folder in your email: "Website Inquiries"
2. Set up a filter/rule to organize form emails
3. Create canned responses for common inquiries
4. Track response times

## Response Best Practices

1. **Respond within 24 hours** (business days)
2. **Use this template for initial response**:

```
Subject: Re: iPaul Media - [Project Type] Inquiry

Hi [Name],

Thank you for contacting iPaul Media about your [project type] project.

I've reviewed your requirements and [budget range indication]. I'd love to discuss how we can help bring your vision to life.

Are you available for a quick 15-minute call this week? I have availability:
- [Day] at [Time]
- [Day] at [Time]

Alternatively, feel free to call me directly at 945-358-6236.

Looking forward to working with you!

Best regards,
[Your Name]
iPaul Media
```

3. **Follow up** if no response within 3 days
4. **Document** project details in your CRM/spreadsheet

## Troubleshooting

### Form not submitting:

- Check browser console for errors (F12)
- Verify form action URL is correct
- Test in incognito mode
- Check if JavaScript errors are blocking

### Not receiving emails:

- Check spam/junk folder
- Verify email in form service settings
- Check service limits (Formspree free = 50/month)
- Add form service to email whitelist

### Too much spam:

- Enable reCAPTCHA in Formspree settings
- Add additional validation in contact-form.js
- Consider adding a simple math question

## Monthly Maintenance

1. **Review submissions** for patterns/trends
2. **Update auto-response** based on common questions
3. **Check spam folder** for false positives
4. **Export data** for backup
5. **Test form** to ensure it's working

---

**Ready to activate?** Choose Formspree (Option 1) for the easiest setup with the most features.
