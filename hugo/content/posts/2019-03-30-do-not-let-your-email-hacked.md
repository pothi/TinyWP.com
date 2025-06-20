---
layout: post
title:  "Do not let your email hacked"
subtitle: "Do you know anyone can spoof your email address?!"
excerpt: "Email spoofing is a machanism bywhich anyone can send an email on your behalf as email protocols don't have a way to authenticate emails."
date:   2019-03-30 11:12:00 +0530
last-modified-date: 2019-05-01
categories: ["security"]
tags: ["email", "spf"]
slug: 'do-not-let-your-email-hacked'
---

I received an email to my primary email address, from the same primary email address, with the following content...

> Hello,
>
> As you may have noticed, I sent this email from your email account (if you didn't see, check the from email id). In other words, I have full access to your email account.
>
> I infected you with a malware a few months back when you visited an adult site, and since then, I have been observing your actions. The malware gave me full access and control over your system, meaning, I can see everything on your screen, turn on your camera or microphone, and you won't even notice about it. I also have access to all your contacts.
>
> Why your antivirus did not detect malware? It's simple. My malware updates its signature every 10 minutes, and there is nothing your antivirus can do about it.
>
> I made a video showing both you (through your webcam) and the video you were watching (on the screen) while satisfying yourself. With one click, I can send this video to all your contacts (email, social network, and messengers you use).
>
> You can prevent me from doing this. To stop me, transfer $958 to my bitcoin address. If you do not know how to do this, Google - "Buy Bitcoin".
>
> My bitcoin address (BTC Wallet) is : *not shown here*
>
> After receiving the payment, I will delete the video, and you will never hear from me again. You have 48 hours to pay. Since I already have access to your system, I now know that you have read this email, so your countdown has begun.
>
> Filing a complaint will not do any good because this email cannot be tracked. I have not made any mistakes.
>
> If I find that you have shared this message with someone else, I will immediately send the video to all of your contacts.
>
> Take care!

How scary is that?! Fortunately, I was using Google Apps for Email for my primary email (that is my name @ this domain name). So, Google marked this email as spam and I do check my spam once in a while.

![Screenshot of warning in Gmail](https://www.tinywp.in/wp-content/uploads/2019/03/scary-email-warning.jpg)

Not everyone uses Google Apps for Email or Gmail, due to ever increasing concern about privacy. There was a time when we didn't have much alternatives to Gmail (except for hotmail and yahoo). However, we are in 2019. We have multiple alternatives these days. [Zoho Email](https://www.zoho.com/mail/), [Protonmail](https://protonmail.com/), or if you'd like to have a complete control over the emails, then we have [Mail in a Box](https://mailinabox.email/).

## What happened or how did it happen?

Delivery of emails is based on multiple factors. Primarily, an email server looks for SPF and DKIM records. SPF is the most common factor. This domains SPF looks like the following...

`"v=spf1 a mx include:_spf.google.com include:sendgrid.net include:spf.mtasv.net include:zoho.com include:sender.zohoinvoice.com ip4:130.211.118.59 ip4:208.113.132.170 ~all"`

It tells the email servers to trust any email originate from A record in DNS, MX record in DNS, SendGrid, Postmarkapp, Zoho and my server's IP addresses. Let me go ever all these one by one.

A record in DNS:

If I send an mail from IP 151.101.65.195 for the domain tinywp.com and if tinywp.com has an A record that returns 151.101.65.195 (which is true), then the email can go through.

MX record in DNS:

My domain's MX records point to Google's servers. If I send an email from Gmail interface, one of the Google's IPs are inserted automatically and email servers can validate the IP using the MX record.

Third-party Email servers:

I use Zoho, Postmarkapp and SendGrid to **send email on by behalf**. When they send my email on my behalf, they attach their own SPF record in the email headers. Since, I allowed them to send email on my behalf via SPF record, such emails can go through.

"all" qualifier:

"all" matches every other IP.

* `~` means Softfail. This means the email server can accept the email, but should mark the SPF as fail.
* `?` means Neutral. This means if an unknown IP sends an email, it doesn't have to accept it. Neither, it has to reject it.
* `+` means Pass. The email should be accepted from any IP address. The most dangerous option.
* `-` means Fail. The email should be marked as spam.

I have been using `~all` for a long time and I've also been watching how many emails are being sent **on my behalf** using DMARC. Postmarkapp has [a nice introduction to DMARC](https://postmarkapp.com/support/article/892-what-is-dmarc) and they offer a free weekly digest for your domain's DMARC.

## Solution

You may have multiple domains with multiple email addresses. However, as with me, you may have only one primary email address with your primary domain. In that case, I strongly recommend to use `-all` as qualifier that basically marks every email from every unknown IP as spam.

Update on May 1, 2019: This domain's SPF records are officially switched to have `-all`, after a month of testing. Thanks.
