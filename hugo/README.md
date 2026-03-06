# TinyWP.com under Hugo

[https://firebase.google.com/docs/cli/#install-cli-mac-linux](https://firebase.google.com/docs/cli/#install-cli-mac-linux)

## One-time process

```
git clone git@github.com:pothi/TinyWP.com.git ~/git

mkdir -p ~/sites/hugo.dev.local
cd ~/sites/hugo.dev.local/
ln ~/git/tinywp.com/firebase .
ln ~/git/tinywp.com/hugo .
```

## To develop (common steps)...

```
cd ~/sites/hugo.dev.local/hugo

# or
# cd ~/git/tinywp.com/hugo
hugo new content posts/(date +%F)-post_title.md

# edit the post to insert the content and other info

```

### To see the site locally with drafts and to see changes live...

```
hugo server --buildDrafts

```

Then visit [http://localhost:1313/](http://localhost:1313/){:target="_blank"} to see all changes immediately (hot-reload enabled).

### To see the site locally without drafts and without seeing changes live...

```
# remove old content if any
[ -d ~/sites/hugo.dev.local/public ] && rm -rf ~/sites/hugo.dev.local/public

cd ~/sites/hugo.dev.local/hugo
hugo --destination ~/sites/hugo.dev.local/public
```

Check out the site at [hugo.dev.local](https://hugo.dev.local){:target="_blank"}

### For production...

```
# remove old content if any.
[ -d ~/sites/hugo.dev.local/firebase/public ] && rm -rf ~/sites/hugo.dev.local/firebase/public

cd ~/sites/hugo.dev.local/hugo
hugo --config hugo-live.toml --destination ~/sites/hugo.dev.local/firebase/public

cd ~/sites/hugo.dev.local/firebase
firebase deploy --only hosting

# cleanup
[ -d ~/sites/hugo.dev.local/firebase/public ] && rm -rf ~/sites/hugo.dev.local/firebase/public
```
