---
layout: post
title: Organized CSS – A Small Guide
intro: Clean code makes happy, efficient developers. I keep a short list of best practices for writing code that will last.
categories: articles
tags:
- css
dsq_thread_id: '906875464'

published: true
---

I have a certain weakness towards organization, so naturally, I gravitate towards organized code – even when it's just for my own satisfaction. I really do think there are efficiencies to be gained from organization in general, though – so it's not an entirely narcissistic endeavor.

In the spirit of organization and efficiency, I'll keep this list abbreviated and quick, sharing only a few quick ideas towards writing more organized CSS. None of these tricks are new and all are documented elsewhere, but I wanted to share my own take on the subject.

**1. Line up declarations in list format**

Here's an example:

	button {
		background-color: #8dc63f;
		color: white;
		padding: 8px 20px;
		text-decoration: none;
	}

...as opposed to this method:

	button { background-color: #8dc63f; color: white; padding: 8px 20px; text-decoration: none; }

I've read and heard of people who fall on both sides of the "list vs. line" argument for CSS formatting. There are benefits of both methods, but I choose to list out my declarations in a list format.

I can't promise that I'll always choose this method, but as a relatively new CSS developer, I find that it helps me feel more in control of my document and less prone to excess. All of the declarations are right out in the open and I can quickly scan them for duplicates and errors.

**2. Alphabetize declarations, sort-of**

Here's an example:

	header {
		border-bottom: 2px dashed #d8d8d4;
		margin-bottom: 2.5em;
		padding-bottom: 2.5em;
	}

Alphabetizing class declarations can be really helpful… until it's not. I make a "good faith effort" to alphabetize my declarations for easy of access later. If it starts slowing me down considerably, I resort to just slapping in the declaration wherever it makes sense.

A quick way to achieve this might be to use a CSS optimizing tool like <a href="http://www.styleneat.com/">styleneat.com</a>. This simple tool allows you to upload your complete style sheet, select the organizing features you want, and their software automatically organizes declarations by alphabetical order. This tool also allows you to quickly reformat your declarations to a single-line or multi-line format.

**3. Utilize the natural inheritance properties of CSS to write as little code as possible**

Here's an example:

	.menu a, .menu a:visited {
		background: #1ea8ab;
		border: none;
		border-radius: 4px;
		color: white;
		font-size: 1em;
		font-weight: 800;
		padding: .5em .6em;
	}

	.menu a:hover {
		background: #1f8283;
	}

CSS contains a lot of great natural organization tools that are easy to pass over. It takes a bit more time upfront if you're not accustomed to working this way, but once you get used to it, you'll find that you're a quicker developer overall.

Wherever possible and practical, group overlapping declarations in parent classes, and only use specific classes to declare the anomalies. This also makes future editing a breeze (and a lot less buggy) because you don't have to search through the entire document for fear that you have another applicable declaration attached to some isolated class.

**4. Group your CSS properties into a few primary sections**

A simple, yet very helpful organization technique is to roughly group your CSS properties into several sections, and create a "table of contents" commented out at the top of the page to help you find your way around. This provides visual relief within the document, and gives you a sense of direction later, as you're searching for or adding new styles after having been away from the site for awhile.

Ideally, you'd set up a common section structure that you're comfortable with, and reuse them for each project you work on. The longer you work with CSS, the more you'll feel right at home in your own familiar territory. You might consider setting up shortcuts for your headings in a program like <a href="http://smilesoftware.com/TextExpander/index.html">TextExpander</a> or a saving them as a template in a simple text file so you can quickly copy and paste into your active style sheet.

The most important principle to keep in mind with sectioning is to *keep them simple!* If you have many more than 4 or 5 sections, you'll probably find yourself wasting time as you try to decide which section to add your new styles to!

**5. A few final tips for the uber-organizer:**
  
* **Use `@import` for stylesheets that aren't the main dish.** If you're using reset stylesheets to zero out browser defaults, be sure to maintain all of that code on a separate document (reset.css) and use `@import` to include it within your main CSS file. This keeps your main CSS file clutter-free, and only focused on the positive (additive) styles instead of the negative styles. Example: `@import "css/reset.css";`
* **Indent your CSS properties.** You might find that your code becomes a lot easier to scan and work with when you have child classes indented appropriately underneath their parent classes.
* **Start with a CSS framework to speed up your process and cover territory you might forget.** There are a number of great CSS frameworks that can jumpstart your coding process, and thereby serve to keep you feeling organized and on top of your game. The most highly recommended are: <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a>, <a href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a>, and <a href="http://www.blueprintcss.org/">Blueprint CSS</a> (the first two are full HTML, JavaScript, and CSS frameworks, while the later only includes CSS).
  
### Further reading:

* Top CSS Tips from <a href="https://twitter.com/snookca">Jonathan Snook</a>: <a href="http://snook.ca/archives/html_and_css/top_css_tips/">http://snook.ca/archives/html_and_css/top_css_tips/</a>
* Expert Ideas for Better CSS Coding from <a href="http://www.smashingmagazine.com/">Smashing Magazine</a>: <a href="http://coding.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding/">http://coding.smashingmagazine.com/2007/05/10/70-expert-ideas-for-better-css-coding/</a>