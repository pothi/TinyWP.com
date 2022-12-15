---
layout: post
title:  "Jekyll on macOS using MacPorts"
subtitle: "Get started with Jekyll SSG (Static Site Generator) on macOS using MacPorts."
date:   2017-10-24 12:53:00 +0530
last-modified-date: 2019-05-01
categories: ["jekyll"]
tags: ["macOS", "macports"]
---

Jekyll grows fast. Keeping it updated to the latest version is easy, if we keep every dependency to the latest version too, starting with ruby! The previous article on installing Jekyll on mac Sierra is too old to be used now. Also, it used the ruby version comes by default in macOS. That's usually an older version. In order to get the latest version of ruby (or anything), there are paths available. I personally like [macports](https://www.macports.org/). So, let's get started.

## macports

Make sure you have macports already installed. If you don't have it yet, see the [quick start guide on macports](https://www.macports.org/install.php). Basically, you'd need xcode commandline tools (`xcode-select --install`) and then select the appropriate macports package to install depending on your macOS version. Once installed, verify it using the command... `port version`.

## ruby

The current version of Ruby (as of this writing) is 2.4.x. It can be installed using the command... `sudo port install ruby24`. This will install ruby2.4 and gem2.4 binaries at /opt/local/bin. Let's create symlinks to override the default ruby and gem (comes bundled with macOS).

```
sudo ln -s /opt/local/bin/ruby2.4 /opt/local/bin/ruby
sudo ln -s /opt/local/bin/gem2.4 /opt/local/bin/gem
```

## bundler

[Bundler](http://bundler.io/) is an easy way to pack gems for a Ruby project. You may install bundler using the command `gem install bundler`. You are likely to receive the error related to the permissions. Because, by default, gem tries to install globally. You may force gem to install its gems only to the local user by setting up the environment variable `GEM_HOME` to a local directory such as `~/.gem` or `~/gem`. I prefer the former.

## jekyll

Finally, it's time to install Jekyll.

```
gem install jekyll
cd ~/tmp
jekyll new my-awesome-site
jekyll serve
```

## video

(coming soon) If you are a fan of learning through videos, here's the video that covers most steps.
