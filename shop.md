---
layout: page
title: Custom & Limited‑Run Items
subtitle: Personalized engravings and ceramic 3D prints. Fast turnarounds, gift‑ready on request.
allow_elements: (string[div])
---

<!-- Product Grid -->
<div class="product-grid">
{% for product in site.data.products %}
  {% include product-card.html 
     title=product.title 
     category=product.category 
     description=product.description 
     features=product.features 
     price=product.price 
     turnaround=product.turnaround 
     image=product.image 
     alt=product.alt 
     cta_link=product.cta_link 
     cta_text=product.cta_text %}
{% endfor %}
</div>

<!-- Shop Information Section -->
<div class="shop-info-section">
  <div class="shop-info-grid">
    <div class="info-card">
      <div class="info-icon">🎨</div>
      <h3>Design Process</h3>
      <p>We work with you from concept to completion, providing proofs for approval before production begins.</p>
    </div>
    
    <div class="info-card">
      <div class="info-icon">⚡</div>
      <h3>Fast Turnaround</h3>
      <p>Most custom items completed in 3-7 business days. Rush orders available for urgent needs.</p>
    </div>
    
    <div class="info-card">
      <div class="info-icon">✨</div>
      <h3>Quality Guarantee</h3>
      <p>If we make a mistake, we'll fix it. Your satisfaction is our priority on every custom project.</p>
    </div>
  </div>
</div>
