# Instructions for Firebase CLI Installation and Initialization

- Install node (and thus npm). Preferable using fnm.
- `npm install -g firebase-tools`
- `firebase login --no-localhost` (and follow the prompts)
- `firebase projects:list`
- `firebase use --add` (to set / select an active project and alias)
- `firebase --project project_alias deploy --only hosting` (without setting an active project)

# Instructions for Ubuntu Focal Fossa (20.04)

One time process:

As root / sudo, install ruby, ruby-dev and other pre-requisites...

```
sudo apt install ruby ruby-gem
sudo apt install zlib1g-dev libffi-dev
```

Then, create a vhost on your webserver to serve the new site at `/home/web/sites/example.com/public`.

As normal user...

- configure GEM_HOME (ex: ~/.gem or ~/gem) and GEM_BIN (usually $GEM_HOME/bin) in `~/.bashrc` (or `~/.zshrc`). Relaunch the shell.
- install bundler (`gem install bundler`). We may need to install additional dependencies as root / sudo.

```
# JS_URL = Jekyll Site URL
export JS_URL=example.com
mkdir -p ~/sites/$JS_URL/{jekyll,firebase}
cd ~/sites/$JS_URL
git clone https://github.com/pothi/TinyWP.com.git jekyll
cp jekyll/firebase.json firebase/
cd jekyll
bundle install

# cp `_dev.yml` `_focal.yml` (if not done already)
# vi `_focal.yml` (to update the URL)

# create a new post under `_posts` dir and test it using the command...

bundle exec jekyll build -d ~/sites/$JS_URL/public --config _focal.yml --watch --incremental

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

