---
layout: default
title: Contact
---

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

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px" required></textarea>

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



<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
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