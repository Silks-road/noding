var Twit = require("twit");
var config = require("./config");
var T = new Twit(config);


var params = {
      q: "unicorns",
  count: 5,
   lang: "tr"
}

T.get("search/tweets", params, gotTweet);

function gotTweet(error, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
  }
};
