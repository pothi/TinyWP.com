---
layout: post
title:  'Blocking search engines and CDN to avoid duplicate content'
subtitle: 'How to prevent duplicate content when using a CDN or a public-facing development site.'
slug: 'avoid-duplicate-content-cdn-search-engines'
date:   2019-05-15 00:15:30 +0530
last-modified-date: 2019-05-15
categories: ["seo"]
tags: ["google", "staging", "development"]
---

A lot of sites use CDNs to host their assets, such as stylesheets, javascripts and images. However, if not properly configured, CDNs can also duplicate the actual content of a site. Also, it is not uncommon to have a public facing staging site or development site for testing the changes in code. Some hosts offer free staging environment/s as well. Here, let me show you the correct way to prevent duplicate content when configuring a CDN or a staging / development / testing site.

The basic idea is to prevent search engines and CDNs from serving the following...

- robots.txt
- sitemap/s
- the actual content / post / page (anything except CSS, JS and images)

## CDN configuration

Nginx web server:

In Nginx, the following code would work to block search engines from crawling the test site...

```
location / {
    if ( $http_user_agent = "Amazon CloudFront" ) { return 403; access_log off; }
    if ($http_x_pull = "KeyCDN") { return 403; access_log off; }
}

If you use any other CDN, contact the CDN provider to find the user agent and unique header that they use to pull the content. Once you have that information, you may modify the above to fit your particular scenario. In the above code, AWS CloudFront uses the user agent string "Amazon CloudFront" while pulling the content from the origin. KeyCDN uses a custom ["X-Pull: KeyCDN" header](https://www.keycdn.com/support/how-to-use-x-pull).

```

## Staging site configuration

In Nginx, the following code could work...

```
# deny access to robots.txt across the board
location = /robots.txt { access_log off; deny all; }
location ~ /sitemap { access_log off; deny all; }

# block sitemaps with .xml and .xml.gz endings such as news-sitemap.xml (Yoast SEO)
location ~ \.xml$ { access_log off; deny all; }
location ~ \.xml\.gz$ { access_log off; deny all; }

# deny specific bots
if ( $http_user_agent ~ "Google" ) { return 403; }
if ( $http_user_agent ~ "bingbot" ) { return 403; }
```

If you use Apache 2.4+, you may insert the following code at the code in `.htaccess` file at the root of the domain.

```
<Files "robots.txt">
  Require all denied
</Files>

<FilesMatch "sitemap.+">
  Require all denied
</FilesMatch>

<FilesMatch ".+\.(xml|xml\.gz)">
  Require all denied
</FilesMatch>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP_USER_AGENT} ^(Google|bingbot) [NC]
  RewriteRule .* - [F,L]
</IfModule>
```

This is probably the easiest way to avoid duplicate content on your CDN and on your search engine traffic to the development site. If you have any other tips to avoid duplicate content, please share it in the comments section below.

Happy coding!
