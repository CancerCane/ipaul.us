#!/bin/bash
set -e

echo "🚀 Deploying ipaul.us to Cloudflare Pages..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf _site

# Build Jekyll site
echo "🏗️  Building Jekyll site..."
JEKYLL_ENV=production bundle exec jekyll build

# Deploy to Cloudflare Pages
echo "☁️  Deploying to Cloudflare Pages..."
wrangler pages deploy _site --project-name=ipaul-us --commit-dirty=true

echo "✅ Deployment complete!"
echo "🌍 Production site: https://ipaul.us"
echo "🔍 Preview URL: https://ipaul-us.pages.dev"
