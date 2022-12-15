---
layout: post
title:  "Installing PhpMyAdmin with Nginx"
date:   2017-03-18 18:31:23 +0530
last-modified-date: 2017-03-18
categories: ["linux"]
tags: ["phpmyadmin", "nginx", "debian", "ubuntu"]
---

# Installing PhpMyAdmin with Nginx

While installing the default PhpMyAdmin package with Debian (or with any of its derivatives including Ubuntu), you'll be asked to choose the web server (between Apache and Lighttd). If you are going to use only Nginx, then you may just skip that step. The actual process of setting up a perfect PhpMyAdmin install on Nginx is bit tricky, but achieveable. You are already on your way (didn't you skip the prompt to choose the web server?).

Now, it is time to setup the actual vhost entry for PhpMyAdmin. The example vhost entries for Apache and Lighttd are provided at `/etc/phpmyadmin` . If you look at those example configuration, the basic idea is simple...

- the root of the PhpMyAdmin is at `/usr/share/phpmyadmin`
- we need to restrict access to `setup` sub-directory

With this in mind, let's start creating our vhost entry...

```
server {
    server_name phpmyadmin.example.com;
    root /usr/share/phpmyadmin;

    # config to process PHP

    location /setup { return 403; }
    locaton / {
        try_files $uri $uri/ index.php$is_args$args;
    }
}
```

It can't get simpler than this. Can it?

Now, if you visit `phpmyadmin.example.com`, you'll able to login. But, will be presented with two errors. Let's fix one by one.

> The phpMyAdmin configuration storage is not completely configured, some extended features have been deactivated. To find out why click here.

This happens because the php process doesn't have read access to `/etc/phpmyadmin/config-db.php`. Here comes ACL to the rescue...

```
root# ls -ld /etc/phpmyadmin/config-db.php
-rw-r----- 1 root www-data 549 Mar 18 11:47 config-db.php

root# setfacl -m 'phpuser:r--' /etc/phpmyadmin/config-db.php
root# ls -ld /etc/phpmyadmin/config-db.php
-rw-r-----+ 1 root www-data 549 Mar 18 11:47 /etc/phpmyadmin/config-db.php
root# getfacl /etc/phpmyadmin/config-db.php
getfacl: Removing leading '/' from absolute path names
# file: etc/phpmyadmin/config-db.php
# owner: root
# group: www-data
user::rw-
user:phpuser:r--
group::r--
mask::r--
other::---

```

In the above example, `phpuser` is the username underwhich PHP runs. If you care about the security, it shouldn't run as www-data!

Now, we still have one more issue to solve...

> The configuration file now needs a secret passphrase (blowfish_secret).

This happens because the php process doesn't have read access to `/var/lib/phpmyadmin/blowfish_secret.inc.php`. Let's use ACL again to fix it...

```
root# ls -ld /var/lib/phpmyadmin/blowfish_secret.inc.php
-rw-r----- 1 root www-data 60 Mar 18 11:47 /var/lib/phpmyadmin/blowfish_secret.inc.php

root# setfacl -m 'phpuser:r--' /var/lib/phpmyadmin/blowfish_secret.inc.php
root# ls -ld /var/lib/phpmyadmin/blowfish_secret.inc.php
root# getfacl /var/lib/phpmyadmin/blowfish_secret.inc.php
getfacl: Removing leading '/' from absolute path names
# file: var/lib/phpmyadmin/blowfish_secret.inc.php
# owner: root
# group: www-data
user::rw-
user:phpuser:r--
group::r--
mask::r--
other::---

```

Now, reload PhpMyAdmin to see the changes. You wouldn't see any more errors upon logging into PhpMyAdmin. Happy coding!
