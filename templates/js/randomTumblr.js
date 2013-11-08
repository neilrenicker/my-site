$(document).ready(function() {
  $.ajax({
    url: "http://api.tumblr.com/v2/blog/neilrenicker.tumblr.com/posts/quote?api_key=icCywcHT3QyyWoS7bszFsfNJZhMFgVUnlBLASX1U4ZzsDLUzgh",
    dataType: 'jsonp',
    success: function(data){
      quotes = data.response.posts;
      randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

      quoteContent = randomQuote.text;
      quoteSource = randomQuote.source;
      quotePermalink = randomQuote.post_url;

      $(".js-addQuote").html(quoteContent);
      $(".js-addQuoteSource").html('—' + quoteSource);
      $(".js-addQuotePermalink").html('<a href="' + quotePermalink + '" title="Visit this quote on my Tumblr">One of them</a>');
    }
  });
});