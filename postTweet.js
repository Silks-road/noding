var Twit = require("twit");
var config = require("./config");
var T = new Twit(config);


var tweet = {
  status: "#Api test bot tweet!"
}

T.post("statuses/update", tweet, postTweet);

function postTweet(error, data, response) {
  if (error) {
    console.log(error);
  } else {
    console.log("Hurrah!");
  }
};
