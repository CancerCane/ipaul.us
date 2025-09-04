---
layout: default
title: Let's build something
subtitle: Tell us what you're working on. We'll reply within 1-2 business days.
---
<!-- markdownlint-disable MD033 -->

<!-- Contact Form Section -->
<section class="contact-section">
  <div class="contact-wrapper">
    <!-- Header Section -->
    <div class="contact-header">
      <h1 class="contact-title">{{ page.title }}</h1>
      <p class="contact-subtitle">{{ page.subtitle }}</p>
    </div>

    <!-- Form Container -->
    <div class="contact-form-container">
  <!-- Formspree Form - Remember to replace YOUR_FORM_ID with your actual Formspree form ID -->
  <form name="contact" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
    
    <!-- Hidden field for thank you page redirect -->
    <input type="hidden" name="_next" value="https://ipaul.us/thank-you">
    
    <!-- Formspree spam protection (hidden field) -->
    <input type="text" name="_gotcha" style="display:none" />
    
    <!-- Subject line for email -->
    <input type="hidden" name="_subject" value="New contact from iPaul Media website">
    
    <!-- Two column layout for name fields -->
    <div class="form-row">
      <div class="form-group">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="John" required>
      </div>
      <div class="form-group">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Doe" required>
      </div>
    </div>

    <!-- Two column layout for email and phone -->
    <div class="form-row">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="john.doe@example.com" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone (Optional)</label>
        <input type="tel" id="phone" name="phone" placeholder="123-456-7890">
      </div>
    </div>

    <!-- Two column layout for dropdowns -->
    <div class="form-row">
      <div class="form-group">
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
      </div>
      <div class="form-group">
        <label for="budget">Budget Range</label>
        <select id="budget" name="budget" required>
          <option value="">Select your budget...</option>
          <option value="under_1k">Under $1,000</option>
          <option value="1k_3k">$1,000 - $3,000</option>
          <option value="3k_8k">$3,000 - $8,000</option>
          <option value="8k_plus">$8,000+</option>
          <option value="not_sure">Not Sure Yet</option>
        </select>
      </div>
    </div>

    <label for="message">Message</label>
    <textarea id="message" name="message" placeholder="Tell us about your project..." style="height:200px" required></textarea>

    <!-- Privacy Policy Consent -->
    <div style="margin: 20px 0;">
      <label class="consent-label">
        <input type="checkbox" name="privacy_consent" required style="width: auto; margin-right: 10px;">
        I have read and agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a> and <a href="/cookie-policy" target="_blank">Cookie Policy</a>
      </label>
    </div>

    <input type="submit" value="Send Message">

  </form>
    </div>
  </div>
</section>

<!-- Add form enhancement script -->
<script src="{{ '/assets/js/contact-form.js' | relative_url }}"></script>

<!-- Include all the existing styles from your current contact form -->
<!-- (Copy the entire <style> section from your current contact.md file here) -->
