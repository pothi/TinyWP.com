---
layout: post
title:  "Web Performance Checklist"
date:   2017-02-17 16:00:00 +0530
last-modified-date: 2017-02-17
categories: ["perf"]
---

I use some perf checklists whenever I review a site. Here's the incomplete list.

Inspired by / forked from [Dilip Siva's perf checklist](https://github.com/dhilipsiva/webapp-checklist#performance) and [AMP project](https://www.ampproject.org)!.

# Web Performance Checklist

- Prefer Brotli over gzip / deflate.
- Check caching-headers for all static content (css, js, images, fonts, icons, etc).
- Avoid free DNS from your DNS registrar (there are exceptions, of course).
- Try hosting your whole site in a CDN.
- Reduce the number of DOM elements.

## JavaScript

- Use a single resource for loading external JavaScript.

## CSS
- Inline critical CSS.
- Use a single resource for (non-critical) CSS loading.
- Only use [GPU-accelerated properties](https://www.ampproject.org/docs/guides/responsive/style_pages#restricted-styles).

## Images checklist

- Prefer WebP for images over PNG / Jpeg.
- Use a CDN for image-heavy sites.
- Serve small images for mobile users.

## Fonts checklist

- Do not use more than 2 external fonts (unless really really necessary on special circumstances).
- Load fonts asynchronously.
- Have plan B if the internet speed is too low!
