---
layout: post
title:  "One-way Backups"
subtitle: "The correct way to take backups of your site using AWS S3 or Google Cloud Storage."
date:   2017-09-18 13:21:23 +0530
last-modified-date: 2019-05-01
categories: ["backups"]
tags: ["aws", "s3", "backups"]
slug: 'write-only-backups-in-S3'
---

Taking backup is important. How we take backups is even more important. I use AWS S3 for most of my backups, not just because of its cost, but because of its ability to fine-tune your backup strategies. For example, for my other site [tinywp.in](https://www.tinywp.in/) that is running on Google Compute Platform, I take regular backups using my own [backup scripts](https://github.com/pothi/backup-wordpress). There *was* one potential issue in it. If the bad guy (or girl) breaks into my servers, all my data would be gone. He / she can even delete all my data in offsite location (S3). Right? No, not with AWS IAM and some fine-tuned strategy. Let's dive a little deeper.

## How Does Amazon Web Services Work

You usually log into Amazon using your own credentials... email address (or phone number) and a password. Possibly with a two-factor authentication. This would work, if we need to put files manually in an S3 bucket. However, we'd want to automate the process of taking backups of our site and then **put** it in Amazon S3. To do this, AWS (Amazon Web Services) has a nice utility called AWS IAM (Identity and Access Management). Here, you can create users (or groups of users) who can programmatically access S3 buckets. In general, most people would create a user named 'backup' and allow this user act as [AmazonS3FullAccess](https://console.aws.amazon.com/iam/home?region=us-east-1#/policies/arn:aws:iam::aws:policy/AmazonS3FullAccess$serviceLevelSummary) that provides full access to *all* buckets associated with your account. It simply means... anyone who has got access to the access keys for this 'backup' user would be able to wipe out all the data. Not an ideal situation that you'd want to deal with! Consider taking backups of your clients' data!

## What's the solution?

Use the principle of least privilege when granting access.

AWS IAM is so flexible that it allows the user to be attached to a particular policy. For example, what if someone can only **put** some data into our buckets, but can never actually read it!!! Yes, it is possible to allow write access to a particular S3 bucket and disallow any read access to the same bucket.

## What if I want to delete older backups automatically?

Use a [lifecycle policy](http://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-lifecycle.html).

## I don't use Amazon S3. I use xyz. How do I do this?

Check the manual. For example, Google Cloud Storage supports a role named [roles/storage.objectCreator](https://cloud.google.com/storage/docs/access-control/iam-roles) that can create new objects, but is forbidden to view, delete or overwrite objects!

Got any questions. Feel free to ask in the comment section below!
