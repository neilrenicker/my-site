# neilrenicker.com

All the codes for the future [neilrenicker.com](http://neilrenicker.com). Built with love, late nights, and darker than normal coffee.

## Images

* All images are retina-fied using [picturefill.js](https://github.com/scottjehl/picturefill).
* Syntax: date-title-size (example: `130612-on-the-go-small.jpg`, `130612-on-the-go-small@2x.jpg`)
* Save as **progressive**
* Run through image minifier

Here are the size templates for common image areas:

1. Home page (`img/home`)
  * small: 640px w (+ @2x)
  * medium: 275px w/h (+ @2x)
2. Post pages (`img/articles`)
  * large: 900px w

## Jekyll Front Matter

Here are all of the front matter parameters each post needs:

    ---
    layout: article
    title: An Older Post
    photo: small-strokes.jpg
    intro: As I’m working through my apprenticeship at Sparkbox, there are a few ideas that have kept me going when I hit the paralyzing fear of a challenging programming problem.
    categories: articles
    tags:
    - programming
    - learning
    dsq_thread_id: '1169640142'
    css: 2013-07-19-changes
    art:
      <img class="2013-07-19-sb-neon-on" src="../img/articles/2013-07-19-sb-neon-on.png" alt="Sparkbox Neon Glow">
      <img class="2013-07-19-sb-neon-off" src="../img/articles/2013-07-19-sb-neon-off.png" alt="Sparkbox Neon in the Dark">

    published: true
    ---

## Art Direction

* If a post is to have custom art direction, the markup should live in front matter called `art:`. Indent markup 2 spaces. It will be included in an otherwise empty, unstyled `<div>` with a class of `art-top`.
* Custom styles for that post should be placed in a `.scss` file within `templates/_scss/posts/post-date-and-name.scss`. Sass file should be named the exact name of the post. Update the `CSS:` front-matter to match the file name (no extension) of the Sass file.