---

# This is called "front matter"
# This can be in yaml, toml or json format
# Current it is in yaml format
# Know more at https://wikipedia.org/wiki/YAML

layout: post

slug: '/post-slug/'

title: ''
subtitle: ''
excerpt: ''

date: '{{ .Date }}'
toc: false
images:

# tags usually contain a *list* of items
# List of items can be formatted differently in yaml
# In the following example, each item is surrounded by double quotes,
#   and separated by space.
# Jekyll additionally supports a simple comma-separated list (non-standard format)
# Do NOT ever use a non-standard format
categories: ["misc"]
tags: ["misc"]

# change this to false before publishing to live / production site.
draft: true

---
