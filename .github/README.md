# Instructions for Firebase CLI

- Install node (and thus npm). Preferable using fnm.
- `npm install -g firebase-tools`

# Instructions for Ubuntu Focal Fossa (20.04)

One time process:

- install ruby, ruby-dev (`sudo apt install ruby ruby-gem`)
- install prerequisites `sudo apt install zlib1g-dev libffi-dev`
- (optional) update gem to the latest version (`gem update --system`)
- as a normal user, set GEM_HOME (ex: ~/.gem or ~/gem) and GEM_BIN (usually $GEM_HOME/bin)
- install bundler (`gem install bundler`). We may need to install additional dependencies.
- create new site using `local-box -s com.focal.tinywp.in`
- `cd ~/sites/com.focal.tinywp.in`
- `git clone git@github.com:pothi/TinyWP.com.git ~/sites/com.focal.tinywp.in/jekyll`
- `cp ~/sites/com.focal.tinywp.in/jekyll/firesbase.json ~/sites/com.tinywp.juno.dev/firebase/`
- `cd ~/sites/com.focal.tinywp.in/jekyll`
- `bundle install`
- `mkdir ~/sites/com/focal.tinywp.in/firebase`
- Test the site using `bundle exec jekyll build --drafts -d ~/sites/com.focal.tinywp.in/public --config _focal.yml --watch --incremental`
- Try making minor edits.

### For Production
- `bundle exec jekyll build -d ~/sites/com.focal.tinywp.in/firebase/public`
- `cd ~/sites/com.focal.tinywp.in/firebase`
- `firebase deploy --only hosting`

#### Firebase initialization

- `firebase login --no-localhost` (and follow the prompts)
- `firebase projects:list`
- `firebase use --add` (to set an active project)
- `firebase --project tinywpcom deploy --only hosting` (without setting an active project)

# Generic notes

* the directory ./jekyll/ is git-ified with the repo hosted in github.com/pothi/tinywp.com
* firebase directory is not git-ified. Neither, it needs to be under version control.
* this README is very important!

## Development process:

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

