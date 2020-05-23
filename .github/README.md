# Instructions for Juno

One time process:
- install ruby, ruby-dev (`apt install ruby ruby-gem`)
- install prerequisites `apt install zlib1g-dev`
- update gem to the latest version (`gem update --system`)
- as a normal user, install bundler (`gem install bundler`)
- point this site to local machine and create nginx vhost entry using `local-box -s com.tinywp.juno.dev`
- clone this repo to `~/git/com.tinywp.juno.dev/jekyll` and run `bundle install`
- copy `firebase.json` file from tinywp.com repo to `~/sites/com.tinywp.juno.dev/firebase/`.

# Generic notes

* the directory ./jekyll/ is git-ified with the repo hosted in github.com/pothi/tinywp.com
* firebase directory is not git-ified. Neither, it needs to be under version control.
* this README is very important!

Development process:
```
# clone the repo to a local folder
- (one time process) git clone https://github.com/pothi/tinywp.com ~/sites/com.tinywp.juno.dev/jekyll
- cd ~/sites/com.tinywp.juno.dev/jekyll
- git pull origin master
- create draft post in *_drafts* folder.
# to develop locally
# the only diff between _juno.yml and the default _config.yml is the URL
bundle exec jekyll build --drafts -d ~/sites/com.tinywp.juno.dev/public --config _juno.yml --watch --incremental
- test it locally at [com.tinywp.juno.dev](https://com.tinywp.juno.dev)
- push the local changes to github.
```

### for production
```
- npm i -g firebase-tools
- migrate the draft post to *_posts* folder.
bundle exec jekyll build -d ~/sites/com.tinywp.juno.dev/firebase/public
cd ~/git/com.tinywp.juno.dev/firebase
cp ~/git/com.tinywp.juno.dev/jekyll/firebase.json .
firebase --project tinywpcom deploy --only hosting
```

## instructions for macOS
```
# edit or create new posts in jekyll->_posts directory
# use the format found in the existing files / posts.
cd /Users/pothi/sites/tinywpcom.test/jekyll
# to develop locally
# the only diff between _mba.yml and the default _config.yml is the URL
# do a diff to see it yourself
bundle exec jekyll build -d ~/sites/tinywpcom.test/public --config _mba.yml
```

### for production
```
bundle exec jekyll build -d ~/sites/tinywpcom.test/firebase/public
cd ~/sites/tinywpcom.test/firebase
firebase deploy --only hosting
```

## instructions for eos
* setup jekyll
* setup local nginx to point dev.tinywp.com to point to ~/sites/tinywp.com/dev/public.
* setup firebase

```
# clone the repo to a local folder
git clone https://github.com/pothi/tinywp.com ~/sites/tinywp.com/jekyll
cd ~/sites/tinywp.com/jekyll
# to develop locally
# the only diff between _dev.yml and the default _config.yml is the URL
# do a diff to see it yourself
bundle exec jekyll build -d ~/sites/tinywp.com/dev/public --config _dev.yml
```

### for production
```
bundle exec jekyll build -d ~/sites/tinywp.com/firebase/public
cd ~/sites/tinywp.com/firebase
cp ~/git/tinywp.com/juno/firebase.json .
firebase deploy --only hosting
```

