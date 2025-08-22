#!/bin/bash
set -e

echo "🏗️  Building Jekyll site for Cloudflare Pages..."

# Install dependencies
echo "📦 Installing bundle dependencies..."
bundle install --jobs=4 --retry=3

# Build the Jekyll site
echo "🔨 Building Jekyll site..."
JEKYLL_ENV=production bundle exec jekyll build

echo "✅ Build complete! Output in _site/"
