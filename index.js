// pinboard-blog-rss - Copyright Conor O'Neill 2020, conor@conoroneill.com
// LICENSE Apache-2.0
// Invoke like https://url.of.serverless.function/dev/rss

module.exports.check = (event, context, callback) => {
  var request = require("request");
  var cheerio = require("cheerio");
  var RSS = require("rss");
  var sectionURL = "https://blog.pinboard.in";

  var feed = new RSS({
    title: "Pinboard Blog RSS",
    description: "Get latest Pinboard blogposts as Maciej's link is broken",
    feed_url: "http://example.com/rss.xml",
    site_url: "https://blog.pinboard.in/",
    image_url: "https://pinboard.in/bluepin.gif",
    docs: "http://example.com/rss/docs.html",
    managingEditor: "conor@conoroneill.com",
    webMaster: "conor@conoroneill.com",
    copyright: "2020 Conor ONeill",
    language: "en",
    pubDate: "Jul 10, 2020 08:00:00 GMT",
    ttl: "60"
  });

  request(sectionURL, function(error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $(".blog_title").each(function() {
        var link = sectionURL + $(this).attr("href");
        if (link.indexOf(sectionURL) > -1) {
        //  console.log(link);
          var title = $(this).text();
          //console.log(title);
          var currentDate = new Date();
          feed.item({
            title: title,
            description: title,
            url: link,
            author: "maciej@example.com",
            date: currentDate
          });
        }
      });
      var xml = feed.xml();
      context.succeed(xml);
    }
  });
};
