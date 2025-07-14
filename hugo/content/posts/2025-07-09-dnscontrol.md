---

layout: post

title: "DNSControl"

subtitle: "DNSControl brings version control to DNS records."
excerpt: "DNSControl helps us to avoid commond mistake while making changes in the DNS by bringing version control to DNS records."

date: 2025-07-09T16:31:15+05:30
last-modified-date: 2025-07-09

# draft: true
toc: false
images:

categories: ["dns"]

tags: ["cloudflare", "route53", "version-control"]

slug: "/dnscontrol/"
---

At times, you came across new people or things. After a few days of talking to them or using those tools, you’d get a feel “how did I live my life so far without them?!”. I got the same feeling when I tried dnscontrol by Stack Overflow.

## So, what does it do?

Firstly, it brings in version control for your DNS. I had a situation where I deleted a DNS record. Not accidentally, but deliberately, assuming that I will never need that record again. It was for AWS SES. A few years ago, when Amazon SES was launched, I have configured my primary domain tinywp.com to send emails on my behalf. I had to create seven DNS records. However, with the newer console for SESv2, we need only six, one less than earlier. I thought that the additional record (TXT record for `_amazonses.example.com`) isn't needed anymore. However, for the domains authenticated with v1 console, it is still neded. Ref: https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dns-txt-records.html . I knew this only when I received an email from Amazon to reinstate the record within 72 records. I thought it was a spam and ignored it. Only when emails stopped sending after 72 hours, I knew something was really wrong. I spent nearly 30 minutes to search for that missing record. If I had used DNSControl to delete records, I may have saved that precious 30 minutes.

## Error Checking

DNSControl helps to avoid common DNS mistakes, thus saves times and frustration to find where the issue is. Once, I was adding a TXT record in DigitalOcean that goes like `google._domainkey.example.com` by copying the record literally from another website. When I entered it, it was accepted as `google._domainkey.example.com.example.com`. I didn't know that I shouldn't mention the trailing "example.com" in DigitalOcean. So, I should have only entered `google._domainkey` if I wanted to add record for `google._domainkey.example.com`. I wasn't aware of it. DigitalOcean just accepted the entry as it is. However, I couldn't verify the actual record as it was wrong. With DNSControl, adding a similar entry would throw an error and it would stop me from pushing the record to DigitalOcean. Here's the error I got trying to add a similar entry...

```
2021/04/20 13:15:46 printIR.go:88: 1 Validation errors:
2021/04/20 13:15:46 printIR.go:94: ERROR: label "google._domainkey.example.com" ends with domain name "example.com". Record names should not be fully qualified. Add {skip_fqdn_check:"true"} to this record if you really want to make google._domainkey.example.com.example.com
```

### Making life easy in general

Like some others, I used to be afraid of making changes in the DNS as in those days, as everything used to take "upto 48 hours" for the changes to propagate. So, if I made a wrong entry in the DNS, the site may be down even after I fixed the issue. I no longer hesitate to make changes. Thanks to [DNSControl](https://dnscontrol.org/).

