# TinyWP.com under Hugo

## To develop (common steps)...

```
git clone git@github.com:pothi/TinyWP.com.git ~/git

mkdir -p ~/sites/hugo.dev.local
cd ~/sites/hugo.dev.local/
ln ~/git/tinywp.com/firebase .
ln ~/git/tinywp.com/hugo .

cd hugo

```

### To see the site locally...

```

cd ~/sites/hugo.dev.local/hugo
hugo --destination ~/sites/hugo.dev.local/public
```

Check out the site at hugo.dev.local

### For production...

```
cd ~/sites/hugo.dev.local/hugo
hugo --config hugo-live.toml --destination ~/sites/hugo.dev.local/firebase/public

cd ~/sites/hugo.dev.local/firebase
firebase deploy --only hosting
```
