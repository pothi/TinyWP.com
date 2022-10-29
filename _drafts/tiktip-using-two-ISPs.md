---
layout: post
title:  "Tik Tip - Using Two ISPs with Manual Failover"
subtitle: "An efficient way to use two internet connections!"
excerpt: "Do you know that with a Mikrotik router, we can manually switch to another ISP effortlessly?!"
# date:   2022-11-01 00:20:00 +0530
# last-modified-date: 2022-11-01
categories: mikrotik
tags: failover
---

I had a unique situation last week. I have two internet connections (both mobile, not fiber). Let's call them ISP1 and ISP2. In each, I have a 2GB daily quota. Total 4GB per day. Apple released an update to Mac OS X last week and the size of the update is 2.53GB to be precise. If I switch the wifi while the update was running, the update will restart from zero thus losing all the GBs or MBs downloaded earlier. The issue is unique to Mac OS X and it doesn't exist with iPadOS 15 onwards. The iPadOS update paused when I tried to update it to iPadOS 16.1 last week. Anyway, coming back to Mac OS X, it was the Mikrotik router (hAP ac2) that helped me to pull together both ISPs while switching the internet connections. Please let me explain.

ISP1 is connected using Mikrotik SXT LTE kit on ether1 of Mikrotik hAP ac2. ISP2 is connected using a standard Android phone (with tethering) using the USB interface of aforementioned hAP ac2. Since, ethernet takes precedence, ISP1 is always connected and used by default. While ISP2 is technically connected as well, it is not used for ongoing traffic. While one can setup automatic failover, I don't need such failovers every day, as Mac OS X gets updates only once in a few months. So, I went with manual failover. When the update was halfway through, I disabled the ether1. This results in smooth transfer of traffic to the second ISP without disturbing the update process.

I hope that helps someone in the future.
