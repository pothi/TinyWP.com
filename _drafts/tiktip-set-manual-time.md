---
layout: post
title:  "Tik Tip - Always configure timezone manually!"
subtitle: "Never depend on anything that may lead to incorrect timezone"
excerpt: "Configuring correct timezone / time is very important for any device. Having incorret time or timezone can lead to numerous issues. Fortunately, it is not hard to configure timezone manually in any device, particular in a Mikrotik Device."
# date:   2022-11-01 00:20:00 +0530
# last-modified-date: 2022-11-01
categories: mikrotik
tags: time
image: /img/2019/mikrotik_hap_ac2.png
---

Mikrotik cloud timesync becomes active by default, if we don't configure a NTP client. While there are advantages of using the Mikrotik's cloud timesync service, there is a problem in it. This service depends the public IP that the device receives. What if the automatic timezone detection based on IP goes wrong. It happens at times. Always keep the possibility of error to the minimum. So, in order to avoid the auto timezone detection, please always configure the timezone manually under system => clock.

I hope that helps someone in the future.
