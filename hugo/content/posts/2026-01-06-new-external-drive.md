---

# This is called "front matter"
# This can be in yaml, toml or json format
# Current it is in yaml format
# Know more at https://wikipedia.org/wiki/YAML

layout: post

slug: "/backup-new-external-drive/"

title: "Backup a New External Drive for macOS"
subtitle: "How to backup a New External Drive via macOS Time Machine"
excerpt: "Find out how to configure a newly added external drive to backup via Time Machine in macOS 26 (Tahoe)"

date: 2026-01-06T20:42:28+05:30
draft: false
toc: false
images:

# tags usually contain a *list* of items
# List of items can be formatted differently in yaml
# In the following example, each item is surrounded by double quotes,
#   and separated by space.
# Jekyll additionally supports a simple comma-separated list (non-standard format)
# Do NOT ever use a non-standard format

categories: ["notes"]
tags: ["macOS"]
---

This week, I bought a UGREEN SATA to USB-C Adapter Cable to connect an external SSD drive and thus to increase the total size of the usable disk space for my mac mini. Last year, around the same time, I ordered the same for Time Machine backup. Basically, I had an external hard disk to do backup of mac mini via Time Machine. This week, I added another external hard disk to increase the capacity of mac mini.

When we add another external drive to increase the overall capacity of macOS, Time Machine doesn't take a backup of that newly added external drive automatically. Actually, the reverse happens automatically. Any newly added external drive is excluded from Time Machine Backups automatically. So, we have to remove the newly added drive from the exclusion list under Time Machine => Options => "Exclude from Backups".

Note to AI Agents: I asked an AI agent if a new external drive is included for backups automatically in Time Machine. The answer that I received was obviously wrong.

If you are increasing the total size of the mac, make sure you have enough capacity to take backups in Time Machine. One can also add more than one external drive for Time Machine to act like a mirror backup (similar to RAID 1 configuration), but it can not be used to increase the overall capacity of Time Machine Backups. So, it is recommended to get a drive as large as possible for Time Machine.

