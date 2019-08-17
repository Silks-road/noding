console.log("Follow event...");

var Twit = require("twit");
var config = require("./config");
var T = new Twit(config);

var stream = T.stream("user");

stream.on("follow", followed);

// function followed(eventMsg) {
//   var name = eventMsg.source.name;
//   var screenName = eventMsg.source.screen_name;
//   tweetIt('I was followed by: ' + name + ' ' + screenName)
// }
//
// function tweetIt(txt) {
//
//   var tweet = {
//     status: txt
//   }
//
//   T.post("statuses/update", tweet, postTweet);
//
//   function postTweet(error, data, response) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Hurrah!");
//     }
//   };
// }



function followed(eventMsg){
  console.log('Follow event');
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetMessage('@' + screenName + " Thank you for following me!")
} // callback function for follow event

function tweetMessage(txt){
  var tweet = {
    status: txt
  }

T.post('statuses/update', tweet, tweeted)

function tweeted(err, data, response) {
  if(err) {
    console.log(err);
  } else {
    console.log("Voila It worked!");
}
}
}
