---
layout: post
title:  'Find useful info about Nginx on any server'
subtitle: 'Some tips to find information about Nginx installed on any Linux or BSD server'
date:   2019-06-06 00:09:20 +0530
last-modified-date: 2019-06-06
categories: "hosting"
tags: "nginx"
---

Nginx is one of the popular web servers. Even though, it is popular, it is not widely used by system admins due to lack of support for htaccess file. Troubleshooting Nginx is even harder. In order to effectively use Nginx, one must know all the information about Nginx installed in a server. Here are some useful tips to get the same.

## Find installed modules

The basic idea is to use `nginx -V` and parse the information provided by it. However, the output from `nginx -V` isn't intuitive. For example, here's the output of `nginx -V` on a Debian 9 (Stretch) server...

```
$ nginx -V
nginx version: nginx/1.16.0
built by gcc 6.3.0 20170516 (Debian 6.3.0-18+deb9u1)
built with OpenSSL 1.1.0j  20 Nov 2018
TLS SNI support enabled
configure arguments: --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --user=nginx --group=nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module --with-cc-opt='-g -O2 -fdebug-prefix-map=/data/builder/debuild/nginx-1.16.0/debian/debuild-base/nginx-1.16.0=. -fstack-protector-strong -Wformat -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -fPIC' --with-ld-opt='-Wl,-z,relro -Wl,-z,now -Wl,--as-needed -pie'
```

You have to scroll horizontally in order to see the list of "configure arguments". To make it easy to read, let's use the following one-liner...

`nginx -V 2>&1 | sed 's/--/\'$'\n  &/g'`

Now, the ouput would be much more reabable...

```
$ nginx -V 2>&1 | sed 's/--/\'$'\n  &/g'
nginx version: nginx/1.16.0
built by gcc 6.3.0 20170516 (Debian 6.3.0-18+deb9u1)
built with OpenSSL 1.1.0j  20 Nov 2018
TLS SNI support enabled
configure arguments:
  --prefix=/etc/nginx
  --sbin-path=/usr/sbin/nginx
  --modules-path=/usr/lib/nginx/modules
  --conf-path=/etc/nginx/nginx.conf
  --error-log-path=/var/log/nginx/error.log
  --http-log-path=/var/log/nginx/access.log
  --pid-path=/var/run/nginx.pid
  --lock-path=/var/run/nginx.lock
  --http-client-body-temp-path=/var/cache/nginx/client_temp
  --http-proxy-temp-path=/var/cache/nginx/proxy_temp
  --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp
  --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp
  --http-scgi-temp-path=/var/cache/nginx/scgi_temp
  --user=nginx
  --group=nginx
  --with-compat
  --with-file-aio
  --with-threads
  --with-http_addition_module
  --with-http_auth_request_module
  --with-http_dav_module
  --with-http_flv_module
  --with-http_gunzip_module
  --with-http_gzip_static_module
  --with-http_mp4_module
  --with-http_random_index_module
  --with-http_realip_module
  --with-http_secure_link_module
  --with-http_slice_module
  --with-http_ssl_module
  --with-http_stub_status_module
  --with-http_sub_module
  --with-http_v2_module
  --with-mail
  --with-mail_ssl_module
  --with-stream
  --with-stream_realip_module
  --with-stream_ssl_module
  --with-stream_ssl_preread_module
  --with-cc-opt='-g -O2 -fdebug-prefix-map=/data/builder/debuild/nginx-1.16.0/debian/debuild-base/nginx-1.16.0=. -fstack-protector-strong -Wformat -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -fPIC'
  --with-ld-opt='-Wl,-z,relro -Wl,-z,now -Wl,
  --as-needed -pie'
```

## Find Nginx installation path

Assume that you are assigned a task to fix an issue with the Nginx web server or fine-tune it for better performance. You get the login credentials to the server, you log into the server and find no files at `/etc/nginx`. What would you do in that case?

The `nginx.conf` is mentioned in the output of `nginx -V`, as `--conf-path` parameter. You might want to get the same info programmatically to be used in a script to automate your tasks. In that case, you may use the following one-liner to get the path of `nginx.conf` file...

```
$ nginx -V 2>&1 | sed -e 's/--/\'$'\n&/g' | grep '^--conf-path' | sed -e 's/--conf-path=//g'
/etc/nginx/nginx.conf
```

You may store the output in a variable and use it however you wish, such as to find the number of domains installed on a particular server.

I hope that helps!
