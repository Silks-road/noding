console.log("Follow event...");

var Twit = require("twit");
var config = require("./config");
var T = new Twit(config);

var stream = T.stream("user");

stream.on("follow", followed);

function followed(eventMsg) {
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt('I was followed by: ' + name + ' ' + screenName)
}

function tweetIt(txt) {

  var tweet = {
    status: txt
  }

  T.post("statuses/update", tweet, postTweet);

  function postTweet(error, data, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Hurrah!");
    }
  };
}
