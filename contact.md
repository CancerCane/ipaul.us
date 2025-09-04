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
  <!-- Web3Forms Configuration -->
  <form action="https://api.web3forms.com/submit" method="POST">
    
    <!-- Web3Forms Access Key -->
    <input type="hidden" name="access_key" value="c3be350f-51b7-4ee6-ac2a-797734179afe">
    
    <!-- Redirect after submission -->
    <input type="hidden" name="redirect" value="https://ipaul.us/thank-you">
    
    <!-- Email Subject Line -->
    <input type="hidden" name="subject" value="New Contact Form Submission - iPaul Media">
    
    <!-- From Name for the email -->
    <input type="hidden" name="from_name" value="iPaul Media Website">
    
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

    <!-- Web3Forms Honeypot Spam Protection -->
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

    <input type="submit" value="Send Message">

  </form>
    </div>
  </div>
</section>

<!-- Add form enhancement script -->
<script src="{{ '/assets/js/contact-form.js' | relative_url }}"></script>

<style>
/* Contact Page Specific Styles */
.contact-section {
  min-height: calc(100vh - 60px); /* Full height minus navbar */
  padding-top: 120px; /* Space for navbar + extra breathing room */
  padding-bottom: 60px;
  background-image: url('{{ "/assets/img/theflag.png" | relative_url }}');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Switch to blue background on mobile */
@media (max-width: 768px) {
  .contact-section {
    background-image: url('{{ "/assets/img/bgblue01.jpg" | relative_url }}');
    padding-top: 100px;
  }
}

.contact-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
  color: white;
}

.contact-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.contact-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
}

@media (max-width: 576px) {
  .contact-title {
    font-size: 2rem;
  }
  
  .contact-subtitle {
    font-size: 1rem;
  }
  
  .contact-form-container {
    padding: 25px 20px;
  }
}

/* Form Styling */
form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* Two column layout */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 0;
}

.form-group {
  display: flex;
  flex-direction: column;
}

@media (max-width: 576px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

label {
  font-weight: 600;
  color: #fff;
  font-size: 0.95rem;
  margin-bottom: 5px;
  display: block;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

input[type=text], 
input[type=email], 
input[type=tel], 
select, 
textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  color: #333;
}

/* Placeholder styles */
input::placeholder,
textarea::placeholder {
  color: #666;
  opacity: 0.8;
}

select {
  color: #333;
}

select option[value=""] {
  color: #666;
}

input[type=text]:focus,
input[type=email]:focus,
input[type=tel]:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: rgba(94, 150, 147, 0.8);
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 0 3px rgba(94, 150, 147, 0.2);
}

select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 20px;
  padding-right: 40px;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

input[type=submit] {
  background-color: #5e9693;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(94, 150, 147, 0.3);
}

input[type=submit]:hover {
  background-color: #4a7875;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(94, 150, 147, 0.4);
}

input[type=submit]:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(94, 150, 147, 0.3);
}

input[type=submit]:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* Consent Checkbox Styling */
.consent-label {
  display: flex;
  align-items: flex-start;
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.5;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.consent-label input[type="checkbox"] {
  margin-top: 3px;
  flex-shrink: 0;
}

.consent-label a {
  color: #abf0b1;
  text-decoration: underline;
  text-decoration-color: rgba(171, 240, 177, 0.4);
}

.consent-label a:hover {
  text-decoration-color: rgba(171, 240, 177, 1);
  color: #d4ffd8;
}

/* Form Error Styles */
.form-errors {
  margin-bottom: 20px;
  animation: slideDown 0.3s ease-out;
  background-color: rgba(248, 215, 218, 0.95);
  border: 1px solid rgba(245, 198, 203, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Character Counter */
small {
  display: block;
  text-align: right;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  margin-top: -15px;
  margin-bottom: 15px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-form-container {
    padding: 30px 20px;
  }
  
  input[type=submit] {
    width: 100%;
    padding: 15px;
  }
}
</style>
