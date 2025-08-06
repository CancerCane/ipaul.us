---
layout: default
title: About
---


<section id="services" class="services-section">
  <div class="container">
    <div class="text-center mb-5 pt-5">
      <h1 class="services-title">What We Offer</h1>
    </div>
    <!-- Service cards with flip animation -->
    <div class="grid-container pt-10">
      <div class="grid-item">
        <h3 class="flip-box-header">Creation Solutions</h3>
        <p>Learn to develop websites and apps</p>
        <div class="flip-box">
          <div class="flip-box-front text-center" style="background-image: url('{{ '/images/bg01.jpg' | relative_url }}')">
            <div class="inner color-white">
              <i class="fas fa-camera-retro fa-4x" alt="Camera icon" style="margin-top: 50px;"></i>
              <h3>Photography</h3>
            </div>
          </div>
          <div class="flip-box-back text-center" style="background-image: url('{{ '/images/bg01.jpg' | relative_url }}')">
            <div class="inner color-white">
              <h3 class="flip-box-header"></h3>
              <p>Studio and location sets. Photo </p>
              <button class="flip-box-button" onclick="learnMore('photography')">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-item">
        <h3 class="flip-box-header">Business Services</h3>
        <p>Consult with professionals </p>
        <div class="flip-box">
          <div class="flip-box-front text-center" style="background-image: url('{{ '/images/bg01.jpg' | relative_url }}')">
            <div class="inner color-white">
              <i class="fas fa-briefcase fa-4x" alt="Briefcase icon" style="margin-top: 50px;"></i>
              <h3></h3>
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
