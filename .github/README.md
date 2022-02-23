# Instructions for Firebase CLI

- Install node (and thus npm). Preferable using fnm.
- `npm install -g firebase-tools`
- `firebase login --no-localhost` (and follow the prompts)
- `firebase projects:list`
- `firebase use --add` (to set an active project)
- `firebase --project tinywpcom deploy --only hosting` (without setting an active project)

# Instructions for Ubuntu Focal Fossa (20.04)

One time process:

As root / sudo, install ruby, ruby-dev and other pre-requisites...

```
sudo apt install ruby ruby-gem
sudo apt install zlib1g-dev libffi-dev
```

Then, create a vhost on your webserver to serve the new site at `/home/web/sites/example.com/public`.

As normal user...

- set GEM_HOME (ex: ~/.gem or ~/gem) and GEM_BIN (usually $GEM_HOME/bin) in `~/.bashrc` (or `~/.zshrc`).
- install bundler (`gem install bundler`). We may need to install additional dependencies as root / sudo.

```
# JS_URL = Jekyll Site UR
export JS_URL=example.com
mkdir -p ~/sites/$JS_URL/{jekyll,firebase}
cd ~/sites/$JS_URL
git clone https://github.com/pothi/TinyWP.com.git jekyll
cp jekyll/firebase.json firebase/
cd jekyll
bundle install

# cp _dev.yml _focal.yml (if not done already)
# vi _focal.yml (to update the URL)

# create a new post under _posts dir and test it using the command...

`bundle exec jekyll build -d ~/sites/$JS_URL/public --config _focal.yml --watch --incremental`

# Try making minor edits.
```

### For Production

```
export JS_URL=example.com
cd ~/sites/$JS_URL/jekyll
bundle exec jekyll build -d ~/sites/$JS_URL/firebase/public
cd ~/sites/$JS_URL/firebase
firebase deploy --only hosting

```

# Generic notes

* the directory `~/sites/$JS_URL/jekyll/` is a read-only repo hosted in github.com/pothi/tinywp.com
* Migrate the changes to your workstation, commit and push changes from there.
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

