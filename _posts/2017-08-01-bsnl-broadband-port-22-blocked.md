---
layout: post
title:  "Solutions for BSNL Broadband without port 22"
date:   2017-08-02 16:21:23 +0530
last-modified-date: 2017-08-02
categories: ["bsnl"]
tags: ["bsnl", "broadband", "ban", "block", "ssh"]
---

If you are a BSNL broadband user and you work as a web developer or system admin, you may want to connect to your client sites and servers using port 22. Since, August 1, 2017, BSNL has blocked / banned port 22 on its network. It's not clear if it is temporary or permanent. Recently, [thousands of BSNL broadband modems were affected by malware](http://www.thehindu.com/news/national/karnataka/malware-affects-thousands-of-bsnl-broadband-modems/article19381410.ece). Those affected modems may be spreading the malware on their own using port 22. If this is so, it is recommended to block port 22 temporarily. That's why BSNL has only banned port 22 only on their broadband network. BSNL mobile network isn't affected. None of the other ISPs blocked port 22, either. What's worse is BSNL broadband hasn't informed its users of this policy change.

Anyway, let's talk about the alternatives or solutions to continue to use BSNL broadband irrespective of its ban over port 22.

## Github Users

It's easy to solve it by [running SSH over HTTPS](https://help.github.com/articles/using-ssh-over-the-https-port/) that is allowed by Github.

## Web developers

Web developers usually do not have access to the server. One solution is to ask your server administrator to open an additional port. There are plenty of [unused ports](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers) available. My favorites are 420 and 24. :)

## System Administrators

There are plenty of workarounds available for system admins. As mentioned above, opening additional port is easiest to achieve, considering it helps the web developers your client may have.

## Paid Solutions

### Static IP

Thanks to [Lawrence](http://www.elawrence.in/) who provided this information via comments.

BSNL unblocks port 22 if the BB user opt for static IP that costs Rs.2000 (or Rs.1800 on certain high-end plans). Static IP is available only on plans that are above 1k. As of this writing, the least feasible plan to get static IP is BBG Combo ULD 1199.

### Paid VPN
If you don't mind spending additional money, buy a VPN service. It is the easiest way to get around the present situation with BSNL. Btw, are you aware that [Apple pulled down VPN apps from its China Apps Store](http://www.zdnet.com/article/apple-pulls-vpns-from-china-app-store/). And then, [Russia banned VPN](http://www.zdnet.com/article/nsa-whistleblower-snowden-vpn-ban-makes-russia-less-safe-and-less-free/). So, if port 22 can be banned by an ISP now, anything can happen in India in the future!

I haven't covered all use-cases. For example, most (managed) hosts do not open additional port for SSH / SFTP. There are workaround available for such users too. However, it isn't easy, especially who have never used SSH. In general, if you know how to use SSH, then buy a small server (VPS servers are available as low as USD2.5 per month) and then [use that server as an intermediate server](https://www.cyberciti.biz/faq/linux-unix-ssh-proxycommand-passing-through-one-host-gateway-server/) to connect to all others sites / servers. If nothing works, use a [free VPN](https://hide.me/). Good luck!
