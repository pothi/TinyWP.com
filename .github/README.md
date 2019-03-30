# Instructions for Juno

One time process:
- install ruby, ruby-dev (`apt install ruby ruby-gem`)
- install prerequisites `apt install zlib1g-dev`
- update gem to the latest version (`gem update --system`)
- as a normal user, install bundler (`gem install bundler`)
- clone this repo to `~/git/tinywp.com/juno` and run `bundle install`
- create a new site to develop locally, for example, `local.tinywp.com`
- point this site to local machine and create nginx vhost entry
- copy firebase.json file from tinywp.com repo to ~/sites/tinywp.com/firebase/.

Development process:
- `cd ~/git/tinywp.com/juno`
- create new blog post.
- run `bundle exec jekyll build -d ~/sites/tinywpcom.juno.dev/public --config _juno.yml --watch --incremental --drafts`
- test it locally at [tinywpcom.juno.dev](https://tinywpcom.juno.dev)
- push to production.

# Generic notes

* the directory ./jekyll/ is git-ified with the repo hosted in github.com/pothi/tinywp.com
* firebase directory is not git-ified. Neither, it needs to be under version control.
* this README is very important!

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
firebase deploy --only hosting
```

## instructions for macOS
```
# edit or create new posts in jekyll->_posts directory
# use the format found in the existing files / posts.
cd /Users/pothi/code/tinywp.com/jekyll
# to develop locally
# the only diff between _dev.yml and the default _config.yml is the URL
# do a diff to see it yourself
bundle exec jekyll build -d ~/sites/tinywpcom.test/public --config _dev.yml
```

### for production
```
bundle exec jekyll build -d ~/code/tinywp.com/firebase/public
cd ~/code/tinywp.com/firebase
firebase deploy --only hosting
```
