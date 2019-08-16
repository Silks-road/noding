console.log("Hiya big wide world!");

var Twit = require("twit");
var config = require("./config");
var T = new Twit(config);


// var params = {
//       q: "unicorns",
//   count: 5,
//    lang: "tr"
// }
//
// T.get("search/tweets", params, gotTweet);
//
// function gotTweet(error, data, response) {
//   var tweets = data.statuses;
//   for (var i = 0; i < tweets.length; i++) {
//       console.log(tweets[i].text);
//   }
// };

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
