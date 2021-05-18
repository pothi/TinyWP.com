---
layout: post
title:  'OpenSSH 8.2 on Ubuntu 20.04'
# date:   2021-05-21 00:20:00 +0530
# last-modified-date: 2021-05-21
categories: misc
tags: focal ssh
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

## OpenSSH 8.2

OpenSSH 7.3 added a feature that supports `Include` keyword on sshd_config file in `/etc/ssh/sshd_config`, the config file for SSH server. While `Include` directive is the same as above, the use-case here is applicable or useful in a completely different context. With `Include` in sshd_config file, we no longer have to update the primary configuration file by hand. Whenever we wish to modify the default behaviour of ssh server, we can include it as a file. Ubuntu 20.04 has already configured this and has the following line at the top of `/etc/ssh/sshd_config`...

```
Include /etc/ssh/sshd_config.d/*.conf
```

So, if we need to disable root login completely, we can include a file named `deny-root-login.conf` with the text `PermitRootLogin no`. if we need to allow password login for users, we can include a file named `allow-passwd-auth.conf` with the text `PasswordAuthentication yes`. This is much handy than overwriting the original file. We also know what tweaks we have done to the ssh server.

### H3 header

An example for h3 header is shown above.

#### H4 header

An example for h4 header.

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png){: width="200px"}
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat"){: width="200px"}

Like links, Images also have a footnote style syntax

![Alt text][id]{: width="200px"}

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::

