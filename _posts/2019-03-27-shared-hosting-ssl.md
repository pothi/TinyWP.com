---
layout: post
title:  'SSL on shared hosting'
date:   2019-03-27 00:20:00 +0530
last-modified-date: 2019-03-27
categories: ssl
tags: letsencrypt godaddy
---

Recently, I was asked to generate and install SSL certificates for a domain hosted in GoDaddy shared hosting and let the SSL certificates be renewed automatically. Here's the process that worked well for me and I'd want to share some limitations in a shared hosting.

## Generating SSL and deploying for the first time

## Renewing SSL certificates

There are two steps involved in it.

1. Renewing the SSL certificate in LetsEncrypt
2. Applying the renewed SSL certificate/s in the server

Step #1 is easy to do. Usually, it involves setting up a cron job that runs every day.

Step #2 is not so easy to do. Since, we don't have control over the server on a shared hosting environment, we can't apply the updated SSL certificates automatically. We have go through the process mentioned earlier to apply the updated certificates upon **each** renewal that comes once in 90 days.
