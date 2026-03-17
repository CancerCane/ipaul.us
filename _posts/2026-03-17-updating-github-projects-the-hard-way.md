---
layout: post
title: "Updating GitHub Projects the Hard Way"
date: 2026-03-17 08:00:00 -0500
categories: [development, devops]
author: "IPaul Media Team"
featured_image: "/assets/img/posts/github-update.jpg"
excerpt: "A real-time walkthrough of updating a live Jekyll site on GitHub Pages — from COLA rate changes to video backgrounds and broken navigation fixes."
---

Sometimes you look at your project and realize it’s been neglected. Links are broken, data is stale, and that promo video is still sitting in a folder waiting to be used. Today we rolled up our sleeves and tackled a batch of overdue updates to the iPaul Media site — all pushed directly through GitHub.

Here’s what went down.

## 1. VA Benefits Calculator — 2026 COLA Update

The VA announced a **2.8% cost-of-living adjustment** for 2026, effective December 1, 2025. Our benefits calculator was still running on the 2025 rates. That means every veteran using the tool was getting stale numbers.

### What changed

- **New data file**: Created `_data/va_rates_2026.json` with every official 2026 rate pulled directly from [VA.gov](https://www.va.gov/disability/compensation-rates/veteran-rates/).
- **Calculator HTML**: Updated `_includes/benefits-calculator.html` to reference the 2026 data, including the inline fallback JSON.
- **Page copy**: Updated the benefits calculator page and tools page to reflect "2026" instead of "2025" and note the 2.8% COLA.

For reference, a 100% disabled veteran with no dependents went from **$3,831.30/mo** (2025) to **$3,938.58/mo** (2026). That’s an extra ~$107/month.

## 2. Home Page Video Background

We had a promotional video (`newPromovid.mp4`) sitting in the assets folder, ready to go. The hero section was using a static background image. Time to upgrade.

### Implementation

- Replaced the static `background-image` hero with an HTML5 `<video>` element
- Set to **autoplay**, **muted**, and **loop** with an 8-second cap via JavaScript
- Added a gradient overlay so the text stays readable
- Included `prefers-reduced-motion` media query as an accessibility fallback
- The static flag image remains as a CSS fallback for browsers that don’t support autoplay video

## 3. Server Power Calculator — 404 Fix

The Server Power Calculator page existed at `/server-power-calculator/` with a proper permalink, but it wasn’t accessible from the navigation menu. Clicking around the Tools section showed the Benefits Calculator in the dropdown, but not the Server Power Calculator.

### The fix

Added the Server Power Calculator to `_data/navigation.yml` under the Tools submenu:

```yaml
  - title: Tools
    url: /tools/
    submenu:
      - title: Benefits Calculator
        url: /benefits-calculator/
      - title: Server Power Calculator
        url: /server-power-calculator/
```

Simple, but easy to miss when you’re adding new pages.

## Lessons Learned

1. **Data-driven pages need maintenance cycles.** If your tool depends on annual rates, set a reminder to update when new numbers drop.
2. **Navigation configs are easy to forget.** Always check `_data/navigation.yml` (or your equivalent) when adding new pages.
3. **Video backgrounds need constraints.** Without the 8-second loop cap and reduced-motion fallback, video heroes can be jarring and accessibility-unfriendly.
4. **Batch your updates.** Pushing related changes in a single branch keeps your commit history clean and makes rollbacks straightforward.

## What’s Next

- Upload the promo video file to `assets/videos/`
- Test the video hero across mobile devices and slow connections
- Consider adding a poster frame for the video element
- Monitor the 2027 COLA announcement (expected October 2026)

---

*Updates pushed via the `update-2026-cola-video-nav-fix` branch. If you’re a veteran using our benefits calculator, your numbers are now current.*
