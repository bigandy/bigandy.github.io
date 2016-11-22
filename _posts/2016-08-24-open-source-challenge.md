---
layout: post
published: true
category: blog
title: Open Source Challenge
summary: switching from iTerm and Sublime Text to Open Source alternatives
post_id: x
---

I am in the process of switching from the software that I use. While both Sublime and iTerm are essential in my daily life one will be more difficult to switch away from than the other.

This post is a work in progress!

## [Atom](https://atom.io/)

I have been using Sublime Text for about five years so changing from this to use something else will be a big challenge for me.

I have my own snippets in sublime (e.g. press `cl + tab` and you get `console.log();` with the cursor within the parentheses) and many more things like this that have become muscle memory. It turns out that [creating atom snippets](http://flight-manual.atom.io/using-atom/sections/snippets/) is easy. 

Another issue is projects. I work on multiple projects and I need a way of easily switching back and forth between them. It is simple in Sublime but I am yet to find a solution in Atom.


### Gotchas:
- I am using the [beta version of atom](https://atom.io/beta) so if I need to open the current working directory I need to use the `atom-beta .` command. I have created an alias of `a.` to do the same thing.  
- Turns out you cannot easily use Atom and Atom Beta side-by-side in Windows.

### Likes:
- inbuilt git support
- inbuilt markdown preview
- better linting, feels more current
- easy to edit theme as built with electron and is on top of chromium.

### Dislikes:
- is not sublime!

## [Hyper](https://github.com/zeit/hyper)

For me this was an easy transition because there were not many things specific to iTerm that I needed.

### Gotchas:
- I needed to add `EDITOR=atom-beta` to my .bash_profile so I could open the config file  
