# ipaul.us - v1.0.0

## iPaul Media Jekyll Site

A modern, responsive Jekyll-based website featuring knight branding, translucent UI elements, and adaptive backgrounds.

## Version

Current Version: **1.0.0** (Released: 2025-01-28)

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

## Features

- 🛡️ Knight-themed branding with custom logo
- 📱 Fully responsive design
- 🎨 Translucent navigation with hover effects
- 🖼️ Adaptive backgrounds (flag on desktop, blue on mobile)
- ⚡ Fast Jekyll static site generation
- 🌐 Ready for GitHub Pages deployment

## Quick Start

### Prerequisites

- Ruby 2.7 or higher
- Jekyll 4.0 or higher
- Bundler

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ipaul.us.git
cd ipaul.us

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

## Deployment

### GitHub Pages

1. Push to GitHub:

``` bash

git add .
git commit -m "Deploy v1.0.0"
git push origin main
```

1. Enable GitHub Pages in repository settings
2. Select source branch (main) and folder (root)
3. Site will be available at `https://yourusername.github.io/ipaul.us`

### Custom Domain

1. Add a `CNAME` file with your domain
2. Configure DNS records with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Project Structure

``` bash
ipaul.us/
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
├── _includes/           # Reusable components
├── _posts/              # Blog posts
├── _sass/               # Sass partials
├── assets/              # Images, CSS, JS
│   ├── css/
│   ├── img/
│   └── js/
├── VERSION              # Current version
├── CHANGELOG.md         # Version history
└── README.md            # This file
```

## Customization

### Navigation

- Edit `_includes/navbar.html` to modify menu items
- Adjust hover effects in `assets/css/styles.css`

### Backgrounds

- Desktop background: `assets/img/theflag.png`
- Mobile background: `assets/img/bgblue01.jpg`
- Change breakpoint in CSS media queries

### Colors

- Primary accent: `#5e9693`
- Edit color scheme in `assets/css/styles.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is proprietary to iPaul Media.

## Contact

- Email: <ipaul@ipaul.us>
- Website: <https://ipaul.us>
