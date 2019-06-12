---
layout: post
title:  "MikroTik Quickstart Guide"
subtitle: "Have you just purchased a MikroTik router and don't know where to start?"
image: /img/2019/mikrotik_hap_ac2.png
date:   2019-04-29 11:22:00 +0530
last-modified-date: 2019-05-01
categories: mikrotik
tags: networking
---

MikroTik routers offer the best value for money. However, they may be hard to configure for newbies. Most online videos, tutorials, guides, etc., are based on [Winbox](https://wiki.mikrotik.com/wiki/Manual:Winbox), a handy utility for getting things quickly for *experienced* users. It isn't the best fit for newbies, though. The best way to start using MikroTik RouterOS is to start with [Quickset](https://wiki.mikrotik.com/wiki/Manual:Quickset#VPN) that can be revoked by typing 192.168.88.1 in a browser.

![MikroTik Logo](/img/2019/mt.png "MikroTik Logo")

## Tools of the trade

MikroTik offers various ways to manage RouterOS, such as...

* Quickset - ideal for newbies and to get started quickly (as the name suggests).
* Winbox - for *experienced* users, offers multiple window support, ability to copy-paste configurations, etc.
* Webfig - browser based web-configuratio utility; only limited features are available to configure.
* Console - swiss-army knife of RouterOS. Every configuration option is available via console.

In our example, let's configure a MikroTik hap ac<sup>2</sup>, one of the best routers from MikroTik. It has five ethernet ports. By default, the ethernet port 1 is used as input for internet (from your ISP via a modem or a direct ethernet connection). The other ports can be used to connect computers, IoT devices or any device that require ethernet connection. Please know that you may use more than one wired internet for failover or for load-balancing. Those are advanced topics that would be covered as separate blog posts.

## Quickset

When you start the router, it'd automatically detect internet on ethernet port 1 and would start distributing internet via other ethernet ports and via wifi. The wifi doesn't come with any default password! There are two points to note here...

1. Since, wifi doesn't have a default password, you don't need a ethernet enabled computer or laptop to configure. You may even use your mobile phone to connect to wifi and point 192.168.88.1 in your browser in order to get to "Quickset" page. The default user "admin" doesn't have a password, either. So, you'd be logged-in automatically, once you type 192.168.88.1 in a web browser of your choice.

2. Since, wifi doesn't have a default password, the first step to do is to secure your wifi network. Otherwise, a bad neighbor can consume all your internet bandwidth.

Since, the default user "admin" doesn't have a password, either, you may optionally create a password for the user "admin" or create a completely different user with all privileges and then drop the default user "admin" (after logging in successfully as the other user).

I hope this quickpost helps to get started quickly with MikroTik routers. This is the first post in a series of MikroTik related articles. I will be covering more guides and tips in order to use RouterOS effectively. If you'd like me to cover any particular topic, please post it in the comments section below.

Have a great time!
