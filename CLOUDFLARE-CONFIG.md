# Cloudflare Configuration for ipaul.us

## Domain Information
- **Domain**: ipaul.us
- **Registrar**: Cloudflare
- **Account Email**: raggaelova@gmail.com

## DNS Configuration
- **Nameservers**: 
  - evangeline.ns.cloudflare.com
  - glen.ns.cloudflare.com

## Required DNS Records

### For GitHub Pages Hosting
```
Type: A     Name: @     Content: 185.199.108.153
Type: A     Name: @     Content: 185.199.109.153  
Type: A     Name: @     Content: 185.199.110.153
Type: A     Name: @     Content: 185.199.111.153
Type: CNAME Name: www   Content: ipaul.us
```

### Current Site Configuration
- **Jekyll Site URL**: https://ipaul.us
- **Email**: ipaul@ipaul.us (primary), lpaul@ipaul.us (alt)
- **CNAME File**: ✅ Present and configured
- **SSL**: Managed by Cloudflare

## Recommended Cloudflare Settings

### Security
- [ ] SSL/TLS: Full (Strict) or Flexible
- [ ] Always Use HTTPS: Enabled
- [ ] HSTS: Enable after testing
- [ ] Security Level: Medium

### Performance  
- [ ] Caching Level: Standard
- [ ] Browser Cache TTL: 4 hours
- [ ] Brotli Compression: Enabled
- [ ] Minify HTML, CSS, JS: Enabled

### Speed
- [ ] Auto Minify: HTML, CSS, JS
- [ ] Rocket Loader: Test before enabling
- [ ] Polish: Lossy (for images)

## Cloudflare Pages Deployment
- ✅ **Project Created**: `ipaul-us` 
- ✅ **Deployment URL**: https://a53a0433.ipaul-us.pages.dev
- ✅ **Build Configuration**: Jekyll with `_build.sh`
- ⚠️ **Custom Domain**: Needs to be configured in Cloudflare dashboard

## Files Updated for Domain
- ✅ `CNAME` - Contains domain name
- ✅ `_config.yml` - URL set to https://ipaul.us  
- ✅ `package.json` - Homepage updated to https://ipaul.us
- ✅ `robots.txt` - Created with sitemap reference
- ✅ `wrangler.toml` - Cloudflare Pages configuration
- ✅ `_build.sh` - Build script for Jekyll

## Testing Checklist
- [ ] DNS propagation complete (use dig or nslookup)
- [ ] Site loads at https://ipaul.us
- [ ] Site loads at https://www.ipaul.us (redirects to apex)
- [ ] SSL certificate valid
- [ ] All pages load correctly
- [ ] No mixed content warnings

## Useful Commands for Testing

```bash
# Check DNS propagation
dig ipaul.us
dig www.ipaul.us

# Test SSL
curl -I https://ipaul.us

# Check site headers
curl -s -D- https://ipaul.us -o /dev/null
```

## Notes
- DNS propagation can take 24-48 hours
- GitHub Pages may take a few minutes to recognize custom domain
- Monitor Cloudflare Analytics for performance insights
