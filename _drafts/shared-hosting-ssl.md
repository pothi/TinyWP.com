---
layout: post
title:  'SSL on shared hosting'
# date:   2019-03-27 00:20:00 +0530
# last-modified-date: 2019-03-27
categories: ssl
tags: letsencrypt godaddy buypass
---

Recently, I was asked to generate and install SSL certificates for a domain hosted in GoDaddy shared hosting and let the SSL certificates be renewed automatically. Here's the process that worked well for me and I'd want to share some limitations in a shared hosting in this mini post.

## Generating SSL and deploying for the first time

With the ever maturing ACME clients, generating SSL certificates has become much easier. I used the [acme.sh script](https://acme.sh) by [Neil](https://twitter.com/neilpangxa) who is from Xian, China. It's been maintained regularly. It doesn't have any external dependency. It is based on shell (bash, dash and sh compatible) that exists in almost all Linux / BSD servers. Most importantly, it doesn't require `sudo or root` privilege, as is the case of shared hosting.

It is [easy to install](https://github.com/Neilpang/acme.sh#1-how-to-install) and [issue the first SSL certificate](https://github.com/Neilpang/acme.sh#2-just-issue-a-cert). Things aren't easy when it comes to deploying the issued SSL certificate. Primarily, an SSL certificate consists of public key and a private key.

## Renewing SSL certificates

There are two steps involved in it.

1. Renewing the SSL certificate in LetsEncrypt
2. Applying the renewed SSL certificate/s in the server

Step #1 is easy to do. Usually, it involves setting up a cron job that runs every day.

Step #2 is not so easy to do. Since, we don't have control over the server on a shared hosting environment, we can't apply the updated SSL certificates automatically. We have go through the process mentioned earlier to apply the updated certificates upon **each** renewal that comes once in 90 days with LetsEncrypt. [Buypass](https://www.buypass.com/) supports SSL certificates with a validity of upto 180 days. I'd recommend Buypass over LetsEncrypt for this specific reason.
