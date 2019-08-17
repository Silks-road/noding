console.log("Post Tweet...");

var Twit = require("twit");
var config = require("./config");
var T = new Twit(config);

// tweetIt();

// setInterval(tweetIt, 1000*5);

function tweetIt() {

  var randomNo = Math.floor(Math.random()*100);
  var tweet = {
    status: "Api test bot tweet " + randomNo + " #itsAlive!"
  }

  T.post("statuses/update", tweet, postTweet);

  function postTweet(error, data, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Hurrah!");
    }
  };
};
