---
layout: post
title: About
---


<section id="services" class="services-section">
  <div class="container">
    <div class="text-center mb-5">
      <h1 class="services-title">Our Services</h1>
    </div>
    <!-- Service cards with flip animation -->
    <div class="grid-container">
      <div class="grid-item">
        <h3 class="flip-box-header">Photography Services</h3>
        <p>Professional photography for all your needs</p>
        <div class="flip-box">
          <div class="flip-box-front text-center" style="background-image: url('{{ '/images/bg01.jpg' | relative_url }}')">
            <div class="inner color-white">
              <i class="fas fa-camera fa-4x" alt="Camera icon" style="margin-top: 50px;"></i>
              <h3>Photography</h3>
            </div>
          </div>
          <div class="flip-box-back text-center" style="background-image: url('{{ '/images/bg01.jpg' | relative_url }}')">
            <div class="inner color-white">
              <h3 class="flip-box-header">Professional</h3>
              <p>Capturing your most important moments with artistic excellence</p>
              <button class="flip-box-button" onclick="learnMore('photography')">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Add event listeners or href attributes to the buttons -->
      <!-- ... -->
    </div>
  </div>
</section>
