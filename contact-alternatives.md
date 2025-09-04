---
layout: default
title: Contact Form Alternatives
permalink: /contact-alt/
published: false
---

# Alternative Contact Form Implementations

This page provides ready-to-use contact form code for different platforms.

## GitHub Pages Version (Using Formspree)

Replace the current form in `contact.md` with:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Remove Netlify-specific attributes -->
    
    <label for="fname">First Name <span style="color: #dc3545;">*</span></label>
    <input type="text" id="fname" name="firstname" placeholder="John" required>

    <label for="lname">Last Name <span style="color: #dc3545;">*</span></label>
    <input type="text" id="lname" name="lastname" placeholder="Doe" required>

    <label for="email">Email <span style="color: #dc3545;">*</span></label>
    <input type="email" id="email" name="email" placeholder="john.doe@example.com" required>

    <label for="phone">Phone (Optional)</label>
    <input type="tel" id="phone" name="phone" placeholder="123-456-7890">

    <label for="project_type">Project Type <span style="color: #dc3545;">*</span></label>
    <select id="project_type" name="project_type" required>
      <option value="">Select a project type...</option>
      <option value="branding">Branding & Graphic Design</option>
      <option value="website">Website Design & Development</option>
      <option value="hosting">Web Hosting Services</option>
      <option value="photo_video">Photography & Video</option>
      <option value="makers_studio">Makers Studio (Engraving/3D Printing)</option>
      <option value="other">Other</option>
    </select>

    <label for="budget">Budget Range <span style="color: #dc3545;">*</span></label>
    <select id="budget" name="budget" required>
      <option value="">Select your budget...</option>
      <option value="under_1k">Under $1,000</option>
      <option value="1k_3k">$1,000 - $3,000</option>
      <option value="3k_8k">$3,000 - $8,000</option>
      <option value="8k_plus">$8,000+</option>
      <option value="not_sure">Not Sure Yet</option>
    </select>

    <label for="message">Message <span style="color: #dc3545;">*</span></label>
    <textarea id="message" name="message" placeholder="Tell us about your project..." style="height:200px" maxlength="500" required></textarea>
    <small style="display: block; text-align: right; color: #666; margin-top: -10px; margin-bottom: 10px;">0 / 500 characters</small>

    <input type="hidden" name="_subject" value="New contact form submission from iPaul Media">
    <input type="hidden" name="_next" value="https://ipaul.us/thank-you">
    <input type="text" name="_gotcha" style="display:none" />

    <input type="submit" value="Submit">
</form>
```

## Web3Forms Version (No Account Required)

```html
<form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    
    <!-- Same form fields as above -->
    
    <input type="hidden" name="subject" value="New Contact Form Submission">
    <input type="hidden" name="redirect" value="https://ipaul.us/thank-you">
    <input type="hidden" name="from_name" value="iPaul Media Contact Form">
    
    <input type="submit" value="Submit">
</form>
```

## Serverless Function (Netlify Functions)

Create file: `netlify/functions/contact-form.js`

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.firstname || !data.lastname || !data.email || !data.message) {
      return { 
        statusCode: 400, 
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Prepare email
    const msg = {
      to: process.env.CONTACT_EMAIL || 'ipaul@ipaul.us',
      from: process.env.SENDER_EMAIL || 'noreply@ipaul.us',
      subject: `New Contact Form: ${data.project_type} - ${data.firstname} ${data.lastname}`,
      text: `
Name: ${data.firstname} ${data.lastname}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Project Type: ${data.project_type}
Budget: ${data.budget}

Message:
${data.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${data.firstname} ${data.lastname}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
<p><strong>Project Type:</strong> ${data.project_type}</p>
<p><strong>Budget:</strong> ${data.budget}</p>
<hr>
<p><strong>Message:</strong></p>
<p>${data.message}</p>
      `
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    };
  } catch (error) {
    console.error('Error:', error);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: 'Failed to send message' })
    };
  }
};
```

## Environment Variables Needed

Add these to your deployment platform:

```env
# For SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
CONTACT_EMAIL=ipaul@ipaul.us
SENDER_EMAIL=noreply@ipaul.us

# For Formspree
FORMSPREE_FORM_ID=your_form_id

# For Web3Forms
WEB3FORMS_ACCESS_KEY=your_access_key
```

## Quick Setup Instructions

### For GitHub Pages:
1. Sign up for Formspree at https://formspree.io
2. Create a new form
3. Copy your form ID
4. Replace form action with Formspree URL
5. Deploy and test

### For Netlify:
1. Current setup works automatically
2. Configure email notifications in Netlify dashboard
3. Forms → Form notifications → Add notification

### For Vercel:
1. Create API route in `api/contact.js`
2. Use similar serverless function code
3. Configure environment variables
4. Update form action to `/api/contact`

### For Cloudflare Pages:
1. Use Web3Forms or similar service
2. Or create Cloudflare Worker
3. Update form action accordingly
