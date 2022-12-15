---
layout: post
title:  'OpenSSH 8.2 on Ubuntu 20.04'
subtitle: "Rundown of useful features introduced in OpenSSH in recent years."
excerpt: "Recent features in OpenSSH allows efficient handling of configurations, both on the client side and on the server side. Let's find out what they are."
date:   2021-05-21 12:30:00 +0530
last-modified-date: 2021-05-21
categories: "misc"
tags: ["focal", "ssh"]
---

Ubuntu 20.04 released on Apr 2020 included OpenSSH version 8.2. Ubuntu 20.04 is the latest LTS version as of this writing. The previous LTS release (Ubuntu 18.04) included OpenSSH version 7.6. Lately, I've been migrating lots of servers running Ubuntu 16.04 (that reached its EOL on Apr 2021) to Ubuntu 20.04 (that will reach its EOL on April 2025). Those servers (running Ubuntu 16.04) were using OpenSSH 7.2. There has been a lot of changes since OpenSSH version 7.2 and since version 7.6. Let me go through each and find out how easy things are now with the latest features.

## OpenSSH 7.3

OpenSSH 7.3 added a feature that supports `Include` keyword on ssh_config file/s that are present in `/etc/ssh/ssh_config` or in `~/.ssh/config`. It means if I have hundreds of servers to manage, I can split ssh_config file into multiple files. For example, previously, my `~/.ssh/config` looked like this...

```
Host home_pi_3_server
    Hostname    192.168.91.3
    User        ubuntu

Host home_pi_4_desktop
    Hostname    192.168.91.4
    User        pi

Host client_name_1
    Hostname    example.com
    User        actual_user

Host client_name_2
    Hostname    example.tld
    User        actual_user
```

Now, the same file looks like this...

```
Include config.d/*
```

Yes. Just a single line. With home and client data are split into multiple files in `~/.ssh/config.d/` directory. Here are the contents of `~/.ssh/config.d/home`...

```
Host home_pi_3_server
    Hostname    192.168.91.3
    User        ubuntu

Host home_pi_4_desktop
    Hostname    192.168.91.4
    User        pi
```

Contents of `~/.ssh/config.d/work`...

```
Host client_name_1
    Hostname    example.com
    User        actual_user

Host client_name_2
    Hostname    example.tld
    User        actual_user
```

There is another advantage of having ssh_config file split into multiple files. I have plenty of test servers running as LXD containers and virtual machines. I can keep those servers in a separate config file and then let gitignore file ignore only that config file. Yes, I keep my ssh_config file in version control.

## OpenSSH 7.6

RemoteCommand has been introduced in this release to execute any command upon successful login to the remote machine. This is another handy feature that saves times.

## OpenSSH 8.0

Earlier, when we generate SSH keys using `ssh-keygen` command, by default RSA keys were generated with the 2048 bits. Now, since OpenSSH 8.0, it is been increased to 3072 bits.

## OpenSSH 8.2

OpenSSH 7.3 added a feature that supports `Include` keyword on sshd_config file in `/etc/ssh/sshd_config`, the config file for SSH server. While `Include` directive is the same as above, the use-case here is applicable or useful in a completely different context. With `Include` in sshd_config file, we no longer have to update the primary configuration file by hand. Whenever we wish to modify the default behaviour of ssh server, we can include it as a file. Ubuntu 20.04 has already configured this and has the following line at the top of `/etc/ssh/sshd_config`...

```
Include /etc/ssh/sshd_config.d/*.conf
```

So, if we need to disable root login completely, we can include a file named `deny-root-login.conf` with the text `PermitRootLogin no`. if we need to allow password login for users, we can include a file named `allow-passwd-auth.conf` with the text `PasswordAuthentication yes`. This is much handy than overwriting the original file. We also know what tweaks we have done to the ssh server.

### Summary

There are a lot more tiny features introduced in each release. The above are my favorites that helped me to save tons of time and organize my workflow in a better way. Do you have any favorite feature not listed above?
