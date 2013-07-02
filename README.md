# neilrenicker.com

All the codes for the future [neilrenicker.com](http://neilrenicker.com). Built with love, late nights, and darker than normal coffee.

## Images

* All images are retina-fied using [picturefill.js](https://github.com/scottjehl/picturefill).
* Syntax: date-title-size (example: `130612-on-the-go-small.jpg`, `130612-on-the-go-small@2x.jpg`)
* Save as **progressive**
* Run through image minifier

Here are the size templates for common image areas:

1. Home page
  * small: 640px w (+ @2x)
  * medium: 275px w/h (+ @2x)
2. Post pages
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

    published: true
    ---