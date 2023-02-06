# TinyWP.com - data

## Instructions for Firebase CLI Installation and Initialization

- Install node (and thus npm). Preferable using [fnm](https://github.com/Schniz/fnm).
- `npm install -g firebase-tools`
- `firebase login --no-localhost` (and follow the prompts)
- `firebase projects:list`
- do the following steps after configuring `JS_URL` and copying firebase.json from Github repo
- mkdir ~/sites/$JS_URL/firebase -p
- `cd ~/sites/$JS_URL/firebase`
- `firebase use --add` (to set / select an active project and alias *interactively*) or use `firebase use PROJECT_ID` replacing PROJECT_ID with the actual ID
- `firebase --project project_alias deploy --only hosting` (without setting an active project)

## Node installation using fnm

For standard shells (bash, zsh, etc), automate the install process by downloading and executing https://github.com/Schniz/fnm/blob/master/.ci/install.sh as mentioned at https://github.com/Schniz/fnm#installation.

```
# For bash completions
# https://serverfault.com/a/968369/102173
bash_completion_dir=${BASH_COMPLETION_USER_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/bash-completion}/completions
[ ! -d $bash_completion_dir ] && mkdir -p $bash_completion_dir
[ ! -f $bash_completion_dir/fnm ] && fnm completions --shell bash > $bash_completion_dir/fnm
exec $SHELL

fnm install --lts

# verify node and npm
node -v
npm -v

# for more info, run `fnm -h`
```

## Instructions for Ubuntu Jammy JellyFish (22.04)

Note: The snap version doesn't contain ruby-dev files. So, don't install via snap, yet.

```
sudo apt install ruby ruby-dev build-essential -y
```

As a normal user...

```
# check GEM_HOME
# check GEM_BIN is in PATH
# configure if not exist
echo $GEM_HOME
echo $PATH
# Do not worry, if GEM_HOME is not included in PATH

# JS_URL = Jekyll Site URL
export JS_URL=example.com

mkdir -p ~/sites/$JS_URL/public

cd ~/sites/$JS_URL
git pull https://github.com/pothi/TinyWP.com jekyll
mkdir firebase
cp jekyll/firebase.json firebase/
cd jekyll

gem install bundler
# to include GEM_HOME in PATH
source ~/.bashrc
bundle install

rm -rf ../public && bundle exec jekyll build -d ~/sites/$JS_URL/public --config _jammy.yml --watch --incremental --drafts
```

Once everything is working, please have a cron to remove the test site.

```
crontab -l | echo "@daily [ -d ~/sites/$JS_URL/public/ ] && rm -rf ~/sites/$JS_URL/public/*" | crontab -

```

### For Production

```
export JS_URL=example.com
cd ~/sites/$JS_URL/jekyll
rm -rf ../firebase/public && bundle exec jekyll build -d ~/sites/$JS_URL/firebase/public
cd ~/sites/$JS_URL/firebase
firebase deploy --only hosting
```

## Instructions for Ubuntu Focal Fossa (20.04)

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

