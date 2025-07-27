---
layout: default
title: Blog
---

<section class="blog-section">
  <div class="container">
    <div class="text-center mb-5">
      <h1 class="blog-title">Our Blog</h1>
      <p class="blog-subtitle">Stay updated with our latest news and insights</p>
    </div>

    <div class="row">
      {% for post in site.posts %}
        <div class="col-md-6 col-lg-4 mb-4">
          <article class="blog-card">
            {% if post.featured_image %}
              <img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}" class="blog-card-image">
            {% else %}
              <div class="blog-card-placeholder">
                <i class="fas fa-image"></i>
              </div>
            {% endif %}
            
            <div class="blog-card-content">
              <h3 class="blog-card-title">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </h3>
              
              <p class="blog-card-meta">
                {{ post.date | date: "%B %d, %Y" }}
                {% if post.author %} • {{ post.author }}{% endif %}
              </p>
              
              <p class="blog-card-excerpt">
                {{ post.excerpt | strip_html | truncate: 120 }}
              </p>
              
              <a href="{{ post.url | relative_url }}" class="blog-card-link">Read More</a>
            </div>
          </article>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<style>
.blog-section {
  padding: 100px 0 50px;
  background-color: #f8f9fa;
}

.blog-title {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.blog-subtitle {
  font-size: 1.2rem;
  color: #666;
}

.blog-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.blog-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-card-placeholder {
  width: 100%;
  height: 200px;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 3rem;
}

.blog-card-content {
  padding: 1.5rem;
}

.blog-card-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.blog-card-title a {
  color: #333;
  text-decoration: none;
}

.blog-card-title a:hover {
  color: #007bff;
}

.blog-card-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.blog-card-excerpt {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.blog-card-link {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.blog-card-link:hover {
  text-decoration: underline;
}
</style>
