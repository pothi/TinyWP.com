# the directory ./jekyll/ is git-ified with the repo hosted in github.com/pothi/tinywp.com
# firebase directory is not git-ified. Neither, it needs to be under version control.
# this README is very important!

#-- instructiosn for eos --#
# setup jekyll
# setup local nginx to point dev.tinywp.com to point to ~/sites/tinywp.com/dev/public.
# setup firebase

# clone the repo to a local folder
git clone https://github.com/pothi/tinywp.com ~/sites/tinywp.com/jekyll

cd ~/sites/tinywp.com/jekyll

# to develop locally - the only diff between _dev.yml and the default _config.yml is the URL - do a diff to see it yourself
bundle exec jekyll build -d ~/sites/tinywp.com/dev/public --config _dev.yml

# for production
bundle exec jekyll build -d ~/sites/tinywp.com/firebase/public
cd ~/sites/tinywp.com/firebase
firebase deploy --only hosting

#-- instructions for macOS --#
# Edit or create new posts in jekyll->_posts directory using the format found in the existing files / posts.
cd /Users/pothi/code/tinywp.com/jekyll

# for dev purpose - the only diff between _dev.yml and the default _config.yml is in the URL - do a diff to see it yourself.
bundle exec jekyll build -d ~/sites/tinywpcom.test/public --config _dev.yml

# for production
bundle exec jekyll build -d ~/code/tinywp.com/firebase/public
cd ~/code/tinywp.com/firebase
firebase deploy --only hosting
