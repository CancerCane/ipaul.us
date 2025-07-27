#!/bin/bash

# Script to create a new blog post for Jekyll

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== IPaul Media Blog Post Creator ===${NC}"
echo

# Get post title
read -p "Enter post title: " title

# Get author name (with default)
read -p "Enter author name (default: IPaul Media Team): " author
author=${author:-"IPaul Media Team"}

# Get categories
read -p "Enter categories (comma-separated, e.g., web-design, tutorials): " categories

# Get excerpt
read -p "Enter short excerpt: " excerpt

# Get featured image path (optional)
read -p "Enter featured image path (optional, e.g., /assets/img/posts/my-image.jpg): " featured_image

# Generate filename from title
filename=$(date +%Y-%m-%d)-$(echo "$title" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g').md

# Create the post file
cat > "_posts/$filename" << EOF
---
layout: post
title: "$title"
date: $(date +"%Y-%m-%d %H:%M:%S %z")
categories: [$categories]
author: "$author"
$(if [ -n "$featured_image" ]; then echo "featured_image: \"$featured_image\""; fi)
excerpt: "$excerpt"
---

Write your blog post content here using Markdown syntax.

## Example Heading

You can use **bold text**, *italic text*, and [links](https://example.com).

### Adding Images

To add images to your post:

\`\`\`markdown
![Alt text]({{ '/assets/img/posts/your-image.jpg' | relative_url }})
\`\`\`

### Code Blocks

\`\`\`javascript
function example() {
    console.log("Hello, World!");
}
\`\`\`

---

*Thank you for reading! Feel free to [contact us](#services) for more information.*
EOF

echo
echo -e "${GREEN}✓ Blog post created: _posts/$filename${NC}"
echo -e "${BLUE}Next steps:${NC}"
echo "1. Edit the file to add your content"
echo "2. Add images to assets/img/posts/ if needed"
echo "3. Run 'bundle exec jekyll serve' to preview"
echo "4. Commit and push to publish"
echo
