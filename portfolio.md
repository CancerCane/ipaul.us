---
layout: default
title: Portfolio & Insights
permalink: /portfolio/
---
<!--Markdownlint-disable  -->
<section class="portfolio-hero">
  <div class="container">
    <div class="text-center mb-5">
      <h1 class="portfolio-title">Our Work & Insights</h1>
      <p class="portfolio-subtitle">Explore our projects, creative process, and industry insights</p>
    </div>
  </div>
</section>

<!-- Portfolio Section -->
<section class="portfolio-section">
  <div class="container">
    <h2 class="section-title">Featured Projects</h2>
    
    <div class="portfolio-grid">
      <!-- Project 1 -->
      <div class="portfolio-item">
        <a href="#" class="portfolio-link" data-project="veteran-alliance">
          <div class="portfolio-image">
            <img src="{{ '/assets/img/dilogo.png' | relative_url }}" alt="Veteran Business Branding">
            <div class="portfolio-overlay">
              <h3>View Project</h3>
            </div>
          </div>
        </a>
        <div class="portfolio-content">
          <h3>Veteran Business Alliance</h3>
          <p class="portfolio-category">Branding & Web Design</p>
          <p><strong>Challenge:</strong> Create a unified brand identity for veteran entrepreneurs.</p>
          <p><strong>What we did:</strong> Logo design, brand guidelines, responsive website, hosting setup.</p>
          <p><strong>Result:</strong> 150% increase in member engagement within 3 months.</p>
          <a href="#" class="btn btn-sm btn-outline-primary mt-3" data-project="veteran-alliance">View Details</a>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="portfolio-item">
        <a href="#" class="portfolio-link" data-project="knight-shields">
          <div class="portfolio-image">
            <img src="{{ '/assets/img/knights01.png' | relative_url }}" alt="Knight Shield Engravings">
            <div class="portfolio-overlay">
              <h3>View Project</h3>
            </div>
          </div>
        </a>
        <div class="portfolio-content">
          <h3>Knight Shield Collection</h3>
          <p class="portfolio-category">Makers Studio - Engraving</p>
          <p><strong>Challenge:</strong> Design custom military unit commemorative pieces.</p>
          <p><strong>What we did:</strong> Custom laser engraving on metal shields with unit insignias.</p>
          <p><strong>Result:</strong> Over 200 units delivered to veterans nationwide.</p>
          <a href="#" class="btn btn-sm btn-outline-primary mt-3" data-project="knight-shields">View Details</a>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="portfolio-item">
        <a href="#" class="portfolio-link" data-project="artisan-market">
          <div class="portfolio-image">
            <img src="{{ '/assets/img/bgblue01.jpg' | relative_url }}" alt="E-commerce Platform">
            <div class="portfolio-overlay">
              <h3>View Project</h3>
            </div>
          </div>
        </a>
        <div class="portfolio-content">
          <h3>Dallas Artisan Market</h3>
          <p class="portfolio-category">E-commerce & Photography</p>
          <p><strong>Challenge:</strong> Launch online marketplace for local artisans.</p>
          <p><strong>What we did:</strong> Product photography, website development, payment integration.</p>
          <p><strong>Result:</strong> $50K in sales within first quarter of launch.</p>
          <a href="#" class="btn btn-sm btn-outline-primary mt-3" data-project="artisan-market">View Details</a>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary btn-lg">Start Your Project</a>
    </div>
  </div>
</section>

<!-- Blog Integration Section -->
<section class="blog-integration">
  <div class="container">
    <h2 class="section-title">Latest Insights & Updates</h2>
    <p class="section-subtitle">Learn from our experiences and stay updated with industry trends</p>
    
    <div class="row">
      {% for post in site.posts limit:3 %}
        <div class="col-md-6 col-lg-4 mb-4">
          <article class="insight-card">
            {% if post.featured_image %}
              <img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}" class="insight-image">
            {% else %}
              <div class="insight-placeholder">
                <i class="fas fa-newspaper"></i>
              </div>
            {% endif %}
            
            <div class="insight-content">
              <h3 class="insight-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </h3>
              
              <p class="insight-meta">
                {{ post.date | date: "%B %d, %Y" }}
                {% if post.categories %} • {{ post.categories | first }}{% endif %}
              </p>
              
              <p class="insight-excerpt">
                {{ post.excerpt | strip_html | truncate: 100 }}
              </p>
              
              <a href="{{ post.url | relative_url }}" class="insight-link">Read More →</a>
            </div>
          </article>
        </div>
      {% endfor %}
    </div>

    <div class="text-center mt-4">
      <a href="{{ '/blog/' | relative_url }}" class="btn btn-outline-primary">View All Blog Posts</a>
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="portfolio-cta">
  <div class="container text-center">
    <h2>Ready to Bring Your Vision to Life?</h2>
    <p class="lead">Let's discuss your project and explore how we can help you succeed.</p>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn-primary btn-lg">Get Started Today</a>
  </div>
</section>

<style>
/* Portfolio Hero */
.portfolio-hero {
  padding: 120px 0 60px;
  background: linear-gradient(135deg, rgba(123, 30, 63, 0.1) 0%, rgba(94, 150, 147, 0.1) 100%);
}

.portfolio-title {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.portfolio-subtitle {
  font-size: 1.25rem;
  color: #666;
}

/* Portfolio Section */
.portfolio-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.section-title {
  font-size: 2.5rem;
  color: #7B1E3F;
  margin-bottom: 3rem;
  text-align: center;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.portfolio-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.portfolio-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-image img {
  transform: scale(1.1);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(123, 30, 63, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-overlay h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.portfolio-content {
  padding: 30px;
}

.portfolio-content h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.portfolio-category {
  color: #5e9693;
  font-weight: 600;
  margin-bottom: 15px;
}

.portfolio-content p {
  color: #666;
  margin-bottom: 10px;
}

/* Blog Integration */
.blog-integration {
  padding: 80px 0;
  background-color: white;
}

.section-subtitle {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.insight-card {
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  transition: transform 0.3s ease;
}

.insight-card:hover {
  transform: translateY(-5px);
}

.insight-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.insight-placeholder {
  width: 100%;
  height: 200px;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 3rem;
}

.insight-content {
  padding: 25px;
}

.insight-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.insight-title a {
  color: #333;
  text-decoration: none;
}

.insight-title a:hover {
  color: #7B1E3F;
}

.insight-meta {
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.insight-excerpt {
  color: #666;
  margin-bottom: 15px;
}

.insight-link {
  color: #5e9693;
  text-decoration: none;
  font-weight: 500;
}

.insight-link:hover {
  color: #7B1E3F;
}

/* CTA Section */
.portfolio-cta {
  padding: 80px 0;
  background: linear-gradient(135deg, #7B1E3F 0%, #5e9693 100%);
  color: white;
}

.portfolio-cta h2 {
  color: white;
  margin-bottom: 20px;
}

.portfolio-cta .lead {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
}

/* Button Styles */
.btn {
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background-color: #7B1E3F;
  color: white;
  border: 2px solid #7B1E3F;
}

.btn-primary:hover {
  background-color: #5e9693;
  border-color: #5e9693;
  color: white;
  text-decoration: none;
}

.btn-outline-primary {
  background-color: transparent;
  color: #7B1E3F;
  border: 2px solid #7B1E3F;
}

.btn-outline-primary:hover {
  background-color: #7B1E3F;
  color: white;
  text-decoration: none;
}

.portfolio-cta .btn-primary {
  background-color: white;
  color: #7B1E3F;
  border: 2px solid white;
}

.portfolio-cta .btn-primary:hover {
  background-color: transparent;
  color: white;
}

.btn-lg {
  padding: 15px 40px;
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .portfolio-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>
