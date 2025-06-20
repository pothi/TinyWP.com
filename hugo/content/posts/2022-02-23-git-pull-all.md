---
layout: post
title:  'Git Automation @Home'
slug: 'git-pull-all'
subtitle: "Pull all repos periodically."
excerpt: "When you work with multiple version control projects, it is important to run 'git pull' on all. Here's a way to automate it!"
date:   2022-02-23 11:03:00 +0530
last-modified-date: 2022-02-23
categories: ["misc"]
tags: ["git", "vcs", "dev"]
---

I host more than 30 repos in Github and even more in [AWS CC](https://aws.amazon.com/codecommit/), BitBucket, Google Cloud Source Repositories, Gitlab, etc. I don't work with all of them on a daily basis. At times, I don't check them for months or even years. I also work on multiple workstations (laptops, desktops and Raspberry Pis), utilizing some of those repos. When I push a commit to Github (or any other similar host), I want to make sure the other workstations are in sync. Unlike servers, workstations aren't always online. So, I switch a workstation, I'd like to make sure every repo is in sync. It is impractical to remember all the changes that I did in another workstation to pull them into the current workstation. Here's a little script that goes through all the repos and run 'git pull' on each...

```
#!/bin/sh

# set -x

echo "Running 'git pull' on all directories inside ~/git/ ..."

for d in ~/git/*/; do
    echo; echo "Current dir: $d"
    git -C $d pull
done

echo
```

I keep all the repos under `~/git`. Yours may vary, though. Then, you can create a schedule (cron) to run upon restart. Some workstations, such as (Mac) laptops, are rarely restarted. In those, it is recommended to schedule it for every hour or minute (if you don't spend much time in it).

Every code is continuously improved. So, for any changes to the above code can be tracked at [https://github.com/pothi/snippets/blob/main/mac/git-pull-all.sh](https://github.com/pothi/snippets/blob/main/mac/git-pull-all.sh).

Do you have an alternative approach? Please share it in the comments!

Happy Coding!

