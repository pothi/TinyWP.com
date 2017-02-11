---
layout: post
title:  "Jekyll on Mac OS Sierra"
date:   2017-02-09 23:31:23 +0530
last-modified-date: 2017-02-11
categories: ssg jekyll
---
<a href="http://jekyllrb.com" target="_blank">Jekyll</a> is one of the oldest static site generators and is <em>the</em> most famous SSG (short for Static Site Generator) of all. It considers itself as "blog-aware". Every other SSG software now includes a way to bring blog functionality in its core, though. It is based on Ruby. MacOS Sierra already has it at version 2.0.0p648. So, installing Jekyll should be straight-forward. But, it isn't. The tutorials around the internet may usually contain how to install it using brew. There's nothing wrong with it. But, when there is a way to install it without brew or any other third-party tool, we will have a clean system. So, let's dive in.
<h3>Local install</h3>
There are two ways to install most common packages that are requirements for Jekyll. Installing them locally or installing them globally for all users. Since, I use MacOS alone (how many of you share your laptop with others?), I don't want to install anything globally. Also, installing locally, I can distinguish between the gems installed by MacOS and gems installed by me.

Let's have a ~/gem directory to hold everything related to RubyGems. Also, let's have all the executables in ~/gem/bin and update the $PATH environment value. So, if you prefer another path such as ~/.gem, feel free to change it accordingly...
<pre><code>$ mkdir -p ~/gem/bin
$ echo 'set GEM_HOME ~/gem' &gt;&gt; ~/.config/fish/config.fish
$ source ~/.config/fish/config.fish
$ echo 'gem: --user-install -n~/gem/bin --no-document' &gt;&gt; ~/.gemrc
</code></pre>
A little explanation:

<code>~/.config/fish/config.fish</code> is the file that is used by <a href="http://fishshell.com" target="_blank">Fish shell</a>.

<code>~/.gemrc</code> is the file parsed by gem for custom configurations. This is where we can instruct gem to use ~/gem/bin to keep the executables.

Now let's try to install bundle that is a dependancy for Jekyll.
<pre><code>$ gem install bundle</code></pre>
If things go smoothly without an error, we can proceed to install Jekyll...
<pre><code>$ gem install jekyll</code></pre>
Usually, this will go through too. If it didn't, please let me know the actual error in the comments, I will try to help you. Now, time to install a new site locally...
<pre><code>
$ jekyll new my-awesome-site
Running bundle install in /Users/yourname/gem/my-awesome-site... 


Your user account isn't allowed to install to the system RubyGems.
  You can cancel this installation and run:

      bundle install --path vendor/bundle

  to install the gems into ./vendor/bundle/, or you can enter your password
  and install the bundled gems to RubyGems using sudo.

  Password: 
</code></pre>
Possibly, the first road-block in our installation. But, easy to fix as mentioned in the output. Let's cancel the installation by pressing ctrl+c in the keyboard. This will throw a bunch of errors. Safe to ignore them.
<pre><code>
$ cd my-awesome-site
$ bundle install --path vendor/bundle

</code></pre>
The last command may take sometime to execute depending on the CPU and network speed. Hold on. It's worth the wait!

Let's try to serve the just-installed site...
<pre><code>$ bundle exec jekyll serve
Configuration file: /Users/yourname/gem/my-awesome-site/_config.yml
Configuration file: /Users/yourname/gem/my-awesome-site/_config.yml
            Source: /Users/yourname/gem/my-awesome-site
       Destination: /Users/yourname/gem/my-awesome-site/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
             ERROR: YOUR SITE COULD NOT BE BUILT:
                    ------------------------------------
                    Invalid date '&lt;%= Time.now.strftime('%Y-%m-%d %H:%M:%S %z') %&gt;': Document 'vendor/bundle/ruby/2.0.0/gems/jekyll-3.4.0/lib/site_template/_posts/0000-00-00-welcome-to-jekyll.markdown.erb' does not have a valid date in the YAML front matter.
</code></pre>
A quick search revealed <a href="https://github.com/jekyll/jekyll/issues/2938#issuecomment-131456094" target="_blank">two</a> <a href="https://github.com/jekyll/jekyll/issues/2938#issuecomment-249033221" target="_blank">reasons</a> and how to fix both...
<pre><code>$ echo 'exclude:
- vendor/bundle' &gt;&gt; _config.yml
$ bundle exec jekyll serve
Configuration file: /Users/yourname/gem/my-awesome-site/_config.yml
Configuration file: /Users/yourname/gem/my-awesome-site/_config.yml
            Source: /Users/yourname/gem/my-awesome-site
       Destination: /Users/yourname/gem/my-awesome-site/_site
 Incremental build: disabled. Enable with --incremental
      Generating... 
                    done in 0.611 seconds.
 Auto-regeneration: enabled for '/Users/yourname/gem/my-awesome-site'
Configuration file: /Users/yourname/gem/my-awesome-site/_config.yml
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
</code></pre>
Visit http://127.0.0.1:4000/ and viola! You'll see the new Jekyll site in the browser.

<img class="aligncenter size-full wp-image-1908" src="https://tinywp.azureedge.net/wp-content/uploads/2017/02/Screen-Shot-2017-02-08-at-9.40.17-PM.jpg" alt="" width="781" height="542" srcset="https://tinywp.azureedge.net/wp-content/uploads/2017/02/Screen-Shot-2017-02-08-at-9.40.17-PM.jpg 781w, https://tinywp.azureedge.net/wp-content/uploads/2017/02/Screen-Shot-2017-02-08-at-9.40.17-PM-150x104.jpg 150w, https://tinywp.azureedge.net/wp-content/uploads/2017/02/Screen-Shot-2017-02-08-at-9.40.17-PM-300x208.jpg 300w, https://tinywp.azureedge.net/wp-content/uploads/2017/02/Screen-Shot-2017-02-08-at-9.40.17-PM-768x533.jpg 768w" sizes="(max-width: 706px) 89vw, (max-width: 767px) 82vw, 740px" />
