---
layout: default
title: Let's build something
sudbtitle: Tell us what you're working on. We'll reply within 1-2 business days.
---
<!-- markdownlint-disable MD033 -->
<!-- 
**Contact**
- Dallas, Texas (Deep Ellum)
- Email: [hello@ipaulmedia.com](mailto:hello@ipaulmedia.com)
- Phone: [945‑358‑6236](tel:1-9453586236)
- Hours: Mon–Fri, 10am–6pm CT
**Form** *(hook up to your provider or Netlify Forms)*
- **Name** — What should we call you?
- **Email** — We’ll keep this private.
- **Phone (optional)** — Faster for quick questions.
- **Project Type** — Branding · Website · Hosting · Photo/Video · Makers Studio
· Other
- **Budget Range** — Under $1k · $1–3k · $3–8k · $8k+
- **Message** — A few details help us prep.
**After submit:** Thanks! We’ll review and reach out soon. If it’s urgent, call
945‑358‑6236.
**Error:** Something went wrong. Please try again or email hello@ipaulmedia.com. -->

<!-- Hero Section -->
<section id="hero" class="hero-section">
  <div class="hero-container">
    <div class="hero-content">
      <div class="text-center text-white hero-text">
        <div class="contact-form-container">
  <!-- Netlify Forms - FREE tier includes 100 submissions/month -->
  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you">

    <!-- Honeypot field for spam protection (hidden from users) -->
    <p class="hidden" style="display:none !important">
      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
    </p>
    
    <!-- Hidden field to identify the form -->
    <input type="hidden" name="form-name" value="contact">
    
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." required>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." required>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your email.." required>

    <label for="phone">Phone (Optional)</label>
    <input type="tel" id="phone" name="phone" placeholder="Your phone number..">

    <label for="project_type">Project Type</label>
    <select id="project_type" name="project_type" required>
      <option value="">Select a project type...</option>
      <option value="branding">Branding & Graphic Design</option>
      <option value="website">Website Design & Development</option>
      <option value="hosting">Web Hosting Services</option>
      <option value="photo_video">Photography & Video</option>
      <option value="makers_studio">Makers Studio (Engraving/3D Printing)</option>
      <option value="other">Other</option>
    </select>

    <label for="budget">Budget Range</label>
    <select id="budget" name="budget" required>
      <option value="">Select your budget...</option>
      <option value="under_1k">Under $1,000</option>
      <option value="1k_3k">$1,000 - $3,000</option>
      <option value="3k_8k">$3,000 - $8,000</option>
      <option value="8k_plus">$8,000+</option>
      <option value="not_sure">Not Sure Yet</option>
    </select>

    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Tell us about your project..." style="height:200px" required></textarea>

    <!-- Privacy Policy Consent -->
    <div style="margin: 20px 0;">
      <label class="consent-label">
        <input type="checkbox" name="privacy_consent" required style="width: auto; margin-right: 10px;">
        I have read and agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a> and <a href="/cookie-policy" target="_blank">Cookie Policy</a>
      </label>
    </div>

    <input type="submit" value="Submit">

  </form>
</div>
      </div>
    </div>
  </div>
</section>

<!-- Add form enhancement script -->
<script src="{{ '/assets/js/contact-form.js' | relative_url }}"></script>

<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], input[type=email], input[type=tel], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  font-size: 16px;
}

select {
  cursor: pointer;
  background-color: white;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
