# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

iPaul Media's Jekyll-based website - a veteran-owned creative studio site featuring knight branding, responsive design, and multi-deployment support (GitHub Pages, Netlify, Cloudflare Pages). Built with Jekyll 4, Bootstrap 5, and MDB (Material Design Bootstrap).

## Quick Start Commands

### Development Setup
```bash
# Install dependencies (Ruby 3.4.4 required - see .ruby-version)
bundle install

# Serve locally with live reload (http://localhost:4000)
bundle exec jekyll serve

# Incremental builds for faster development
bundle exec jekyll serve --incremental
```

### Production Build
```bash
# Build for production
JEKYLL_ENV=production bundle exec jekyll build

# Output goes to _site/ directory
```

### Deployment
```bash
# GitHub Pages (automatic via GitHub Actions on push to main)
git push origin main

# Netlify (automatic on push if connected)
# Cloudflare Pages (uses wrangler.toml config)
npx wrangler pages deploy _site
```

### Ruby/Gem Management
```bash
# Update gems
bundle update

# Clean install if having issues
bundle clean --force
bundle install

# Check Ruby version
ruby -v  # Should match 3.4.4 in .ruby-version
```

## Architecture Overview

### Layout Hierarchy
- `_layouts/default.html` → Base template with navigation, scripts, footer
  - `_layouts/home.html` → Custom home page layout  
  - `_layouts/page.html` → Standard content pages
  - `_layouts/post.html` → Blog post template

### Data-Driven Components
- `_data/navigation.yml` → Main menu structure
- `_data/products.yml` → Shop product cards
- `_data/site.yml` → Global site configuration (taglines, badges, colors)

### Key Includes
- `_includes/navbar.html` → Hover-activated translucent navigation
- `_includes/product-card.html` → Flip-card shop items
- `_includes/service-card.html` → Service offering cards
- `_includes/cta-band.html` → Call-to-action sections
- `_includes/footer.html` → Site footer with social links

### Asset Pipeline
- `assets/css/` → Custom styles + MDB dark theme
- `assets/img/` → Images with responsive backgrounds:
  - Desktop: `theflag.png` (American flag)
  - Mobile: `bgblue01.jpg` (blue background)
- `assets/js/` → Navigation behavior + MDB components
- `_sass/` → Sass partials (imported via `assets/main.scss`)

### Content Structure
- `_posts/` → Blog posts in Markdown
- Top-level pages: `index.md`, `about.md`, `services.md`, `blog.md`, `contact.md`, `shop.md`, `tools.md`, `veterans.md`
- No custom collections configured

## Important Notes

### Ruby Version
- Requires Ruby 3.4.4 (specified in `.ruby-version`)
- Use rbenv/rvm to manage Ruby versions if needed

### Background Image Switching
The site uses CSS media queries to swap backgrounds:
- Desktop (>768px): American flag background
- Mobile (≤768px): Blue background
This is implemented in inline styles in `blog.md` and CSS files.

### Deployment Configurations
- **GitHub Pages**: Automated via `.github/workflows/jekyll-gh-pages.yml`
- **Netlify**: Configured in `netlify.toml`
- **Cloudflare Pages**: Uses `wrangler.toml`
- Custom domain: Configure CNAME file if needed

### Contact Form
The contact form uses Netlify Forms (free tier: 100 submissions/month). Update the form handler if using a different deployment platform.

### Development Tools
- RuboCop configured for code linting (`.rubocop.yml`)
- Jekyll plugins: feed, seo-tag, sitemap
- No test suite currently configured

## Troubleshooting

### Bundle Issues
```bash
# If gems won't install
bundle clean --force
rm Gemfile.lock
bundle install
```

### Build Errors
```bash
# Clear Jekyll cache
rm -rf .jekyll-cache _site
bundle exec jekyll build --trace
```

### Incremental Build Not Working
```bash
# Force full rebuild
bundle exec jekyll serve --force_polling
```

## References

- [README.md](README.md) - Detailed project documentation
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Actions Workflow](.github/workflows/jekyll-gh-pages.yml)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)
- [MDB Documentation](https://mdbootstrap.com/docs/standard/)
