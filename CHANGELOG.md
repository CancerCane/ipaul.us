# Changelog

All notable changes to the iPaul Media Jekyll site will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-28

### Added
- Initial release of the redesigned iPaul Media Jekyll site
- Knight branding with custom favicon and logo assets
- Responsive navigation system with hover-activated dropdown menu
- Translucent contact card-style dropdown menu with backdrop filter effect
- Responsive background system (flag image on desktop, blue on mobile)
- Custom page layouts for Home, Services, Blog, About, and Contact
- Footer with social links and contact information
- Parallax scrolling effects on hero sections

### Features
- **Navigation System**
  - Knight icon positioned on the left
  - Centered "iPaulMedia" branding
  - No visible menu items by default
  - Hover-activated dropdown menu with translucent styling
  - Mobile-responsive design

- **Background System**
  - Desktop: American flag background (`theflag.png`)
  - Mobile (≤768px): Blue background (`bgblue01.jpg`)
  - Smooth transitions between screen sizes

- **Image Assets**
  - favicon.ico (multi-resolution)
  - favicon.png (16x16)
  - tab_icon.png (32x32)
  - apple-touch-icon.png (180x180)
  - logo_header.png (512x512)
  - thumbnail_flipcard.png (200x200)
  - bg_blog_blurred.jpg (1920x1080)

### Technical Details
- Built with Jekyll static site generator
- Bootstrap 5.0 for responsive grid system
- MDB (Material Design Bootstrap) dark theme
- Custom CSS with backdrop filters and transitions
- Font Awesome 6.0 for icons
- Responsive typography with Roboto font family

### Browser Support
- Modern browsers with backdrop-filter support
- Graceful degradation for older browsers
- Mobile-first responsive design

### Version Control
- Semantic versioning initiated at 1.0.0
- Git repository initialized with clean commit history
- Ready for GitHub Pages deployment
