---
layout: default
title: Home
---

<!-- Hero Section -->
<section id="hero" class="hero-section">
  <div class="hero-container">
    <div class="hero-content">
      <div class="text-center text-white hero-text">
        <h1 class="hero-title">
          iPaul Media.
        </h1>
        <p class="hero-description">
          Veteran-owned creative studio bringing your vision to life with custom design, 
          web development, and maker services.
        </p>
        <p class="hero-tagline">
          From concept to creation — we build what works.
        </p>
        <h4 class="hero-subtitle">Doing business at the speed of life.</h4>
        <a class="btn btn-outline-light btn-lg hero-cta" href="#services" role="button">
          View Our Services
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Services Section -->
<section id="services" class="services-section mask-custom-2">
  <div class="container">
    <div class="text-center mb-5">
      <h1 class="services-title">Our Services</h1>
    </div>
    <div class="grid-container">
      
      {% include service-card.html 
         title="Branding & Graphic Design"
         description="Logo suite, color systems, brand guides, and complete visual identity packages."
         front_title="Visual Identity"
         front_text="Professional branding that stands out. From concept to complete brand guidelines."
         front_image="/assets/img/bgblue01.jpg"
         back_title="Brand Complete"
         back_text="Starter brands ~1-2 weeks. Logo, colors, typography, and more."
         back_image="/assets/img/dilogo.png"
         cta_link="/contact/?service=branding"
         cta_text="Get Brand Pricing" %}

      {% include service-card.html 
         title="Web Design & Hosting"
         description="From starter sites to full e-commerce solutions with secure, fast hosting."
         front_title="Web Solutions"
         front_text="Responsive websites built for performance. Starter, Creator, and Pro packages available."
         front_image="/assets/img/bgblue01.jpg"
         back_title="Built Right"
         back_text="Fast, secure hosting with backups, updates, and human support."
         back_image="/assets/img/dilogo.png"
         cta_link="/contact/?service=web"
         cta_text="Compare Packages" %}

      {% include service-card.html 
         title="Photography & Video"
         description="Product photos, team portraits, promotional content, and podcast cover art."
         front_title="Visual Content"
         front_text="Professional photography and video for your brand. Web-ready files with quick turnaround."
         front_image="/assets/img/bgblue01.jpg"
         back_title="Picture Perfect"
         back_text="Product shots, portraits, reels, promo clips, and more."
         back_image="/assets/img/dilogo.png"
         cta_link="/contact/?service=photo"
         cta_text="Book a Shoot" %}

      {% include service-card.html 
         title="Media & Internet Radio"
         description="Station IDs, show intros, stream setup, and community broadcasting solutions."
         front_title="Audio Branding"
         front_text="Professional audio production for streaming, podcasts, and radio content."
         front_image="/assets/img/bgblue01.jpg"
         back_title="On Air"
         back_text="Stream setup, scheduling, and creator spotlights coming soon."
         back_image="/assets/img/dilogo.png"
         cta_link="/contact/?service=radio"
         cta_text="Launch Stream" %}

      {% include service-card.html 
         title="Makers Studio"
         description="Laser engraving and ceramic 3D printing for custom parts, gifts, and functional art."
         front_title="Custom Making"
         front_text="Precision engraving on metals, wood, acrylic. Ceramic 3D printing for unique pieces."
         front_image="/assets/img/bgblue01.jpg"
         back_title="Made to Order"
         back_text="Nameplates, tumblers, badges, plaques, custom tiles, and unique gifts."
         back_image="/assets/img/dilogo.png"
         cta_link="/shop/"
         cta_text="Start Custom Order" %}

    </div>
</section>
