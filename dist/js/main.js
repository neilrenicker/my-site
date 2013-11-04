$.get('http://neilrenicker.tumblr.com/rss', function(data) {
  posts = $(data).find("item");
  randPost = $(posts[Math.floor(Math.random()*posts.length)]);
  postContent = randPost.find("description").text();
  postPermalink = randPost.find("link").text();

  $(".js-addQuote").html(postContent);
});