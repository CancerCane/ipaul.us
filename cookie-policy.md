---
layout: default
title: Cookie Policy
---
<!-- markdownlint-disable -->
<section class="cookie-policy-section" style="padding: 60px 0;">
  <div class="container" style="max-width: 800px; margin: 0 auto;">
    <h1>Cookie Policy</h1>
    <p class="text-muted">Last updated: {{ site.time | date: '%B %d, %Y' }}</p>

    <h2>1. What Are Cookies?</h2>
    <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to the owners of the site.</p>

    <h2>2. How We Use Cookies</h2>
    <p>We use cookies on our website for the following purposes:</p>
    <ul>
      <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
      <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
      <li><strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personalized features.</li>
    </ul>

    <h2>3. Types of Cookies We Use</h2>
    <table class="cookie-table">
      <thead>
        <tr>
          <th>Cookie Name</th>
          <th>Purpose</th>
          <th>Duration</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>_ga</td>
          <td>Google Analytics - Used to distinguish users</td>
          <td>2 years</td>
          <td>Analytics</td>
        </tr>
        <tr>
          <td>_gid</td>
          <td>Google Analytics - Used to distinguish users</td>
          <td>24 hours</td>
          <td>Analytics</td>
        </tr>
        <tr>
          <td>_gat</td>
          <td>Google Analytics - Used to throttle request rate</td>
          <td>1 minute</td>
          <td>Analytics</td>
        </tr>
      </tbody>
    </table>

    <h2>4. Third-Party Cookies</h2>
    <p>Some cookies on our website are placed by third-party services that appear on our pages. These include:</p>
    <ul>
      <li><strong>Google Analytics:</strong> We use Google Analytics to help us understand how our website is used. Google Analytics uses cookies to collect information about your use of our website. For more information, please visit <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">Google's Cookie Policy</a>.</li>
      <li><strong>Netlify:</strong> Our hosting provider may set cookies for security and performance purposes.</li>
    </ul>

    <h2>5. Your Cookie Choices</h2>
    <p>You have several options for managing cookies:</p>
    <ul>
      <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.</li>
      <li><strong>Opt-Out Tools:</strong> You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a>.</li>
      <li><strong>Do Not Track:</strong> Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked.</li>
    </ul>

    <h2>6. Impact of Disabling Cookies</h2>
    <p>Please note that if you disable or refuse cookies, some parts of our website may become inaccessible or not function properly. You may not be able to use all the features and functionality of our website.</p>

    <h2>7. Updates to This Cookie Policy</h2>
    <p>We may update this cookie policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.</p>

    <h2>8. Contact Us</h2>
    <p>If you have any questions about our use of cookies, please contact us at:</p>
    <address>
      <strong>IPaul Media</strong><br>
      Email: <a href="mailto:{{ site.email }}">{{ site.email }}</a><br>
      Website: <a href="{{ site.url }}">{{ site.url }}</a>
    </address>
  </div>
</section>

<style>
.cookie-policy-section h1 {
  color: #333;
  margin-bottom: 10px;
}

.cookie-policy-section h2 {
  color: #444;
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.cookie-policy-section p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.cookie-policy-section ul {
  margin-bottom: 15px;
  padding-left: 30px;
}

.cookie-policy-section li {
  margin-bottom: 5px;
}

.cookie-policy-section address {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  margin: 20px 0;
}

.cookie-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.cookie-table th,
.cookie-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.cookie-table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.cookie-table tr:nth-child(even) {
  background-color: #f8f9fa;
}
</style>
