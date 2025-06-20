---
# This is called "front matter"
# This can be in yaml, toml or json format
# Current it is in yaml format
# Know more at https://wikipedia.org/wiki/YAML

layout: post

title:  "Joplin - Cloudflare sync target"
subtitle: "Using Cloudflare R2 storage as backup storage location for Joplin notes."
excerpt: "Cloudflare R2 offers S3 compatible cloud storage that can be used to keep the backups of your Joplin notes."

date:   2025-06-19 20:08:33 +0530
last-modified-date: 2025-06-19

categories: ["notes"]

# tags usually contain a *list* of items
# List of items can be formatted differently in yaml
# In the following example, each item is surrounded by double quotes,
#   and separated by space.
# Jekyll additionally supports a simple comma-separated list (non-standard format)
# Do NOT ever use a non-standard format
tags: ["joplin", "cloudflare"]

slug: "/joplin-cloudflare-r2/"
---

Joplin has been my primary note taking app since 2023. I've been slowly increasing its usage since then. Currently, I use Joplin on four devices. Joplin has extensive documentation on how to sync your notes with S3 compatible storage providers. Ref: https://joplinapp.org/help/apps/sync/s3. However, it doesn't include my current cloud storage provider, Cloudflare R2. I've been using Cloudflare R2 for more than a year now. So, here are the guidelines on how to use Cloudflare R2 as your sync target.

* URL: https://0123456789abcdefghijklmnopqrstuv.r2.cloudflarestorage.com/
* Region: One of the [available regions](https://developers.cloudflare.com/r2/reference/data-location/#available-hints)
* Force Path Style: unchecked

Where 0123456789abcdefghijklmnopqrstuv is your [Cloudflare Account ID](https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/#copy-your-account-id).

You may get the URL and the region info under R2 Object Storage => Bucket Name => Settings => General. The URL is mentioned as S3 API in Cloudflare R2. It also contains the bucket name. For example, if your bucket name is 'pothi', the S3 API mentioned in Cloudflare would look like `https://0123456789abcdefghijklmnopqrstuv.r2.cloudflarestorage.com/pothi` . Remove the bucket name from this URL before entering into sync settings in Joplin.

You may create the API keys as mentioned in https://developers.cloudflare.com/r2/api/tokens/.

Takes less than 15 minutes to start using Cloudflare R2, even if you start from scratch. For existing Cloudflare R2 users, it takes less than 5 minutes to get it up and running (or syncing) in Joplin.

Happy note taking!
