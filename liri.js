// Load the fs package to read and write
var fs = require("fs");

var request = require('request');


// Take two arguments.
// The first will be the action (i.e. "deposit", "withdraw", etc.)
// The second will be the amount that will be added, withdrawn, etc.
var action = process.argv[2];
var value = process.argv[3];

var Twitter = require('twitter');
var spotify = require('spotify');
 


// The switch-case will direct which function gets run.
switch (action) {
  case "my-tweets":
    tweets();
    break;

  case "spotify-this-song":
    spotifySong();
    break;

  case "movie-this":
    movie();
    break;

  case "do-what-it-says":
    random();
    break;
}

function tweets(){
  var keys = require("./keys.js");
  var client = new Twitter(keys.twitterKeys)
  var params = {screen_name: 'youngliontrc'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log("Here are my last twenty tweets\n");
        for(i=0; i<20; i++){
          console.log(tweets[i].text);
          console.log("Tweeted at: " + tweets[i].created_at + "\n");
        }
      }else{
        console.log(error);
        console.log(keys.twitterKeys);
      }
    });
}

function spotifySong(){
  if (value){
    //console.log("4 " + process.argv[4]);
    spotify.search({ type: 'track', query: value }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
    console.log("The artist is: " + data.tracks.items[0].artists[0].name)  
    console.log("The song's name is: " + value);
    console.log("A preview link of the song is: " +data.tracks.items[0].preview_url);
    console.log("The album name is: " + data.tracks.items[0].album.name);
    });
  }else{
    spotify.search({ type: 'track', query: "the sign ace of base" }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
    console.log("The artist is: " + data.tracks.items[0].artists[0].name)  
    console.log("The song's name is: The Sign");
    console.log("A preview link of the song is: " +data.tracks.items[0].preview_url);
    console.log("The album name is: " + data.tracks.items[0].album.name);
    });
  }  
}

function movie(){
  var options = {
    url: 'http://www.omdbapi.com/?t='+value+'&y=&plot=short&r=json&tomatoes=true',
    headers: {
      'User-Agent': 'request'
    }
  };

  var options2 = {
    url: 'http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&r=json&tomatoes=true',
    headers: {
      'User-Agent': 'request'
    }
  };

  if(value){
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //console.log(body);
        console.log("The movie's title is: " + JSON.parse(body).Title);
        console.log("The Year it was made: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
        console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL); 
      }
    });
  }else{
    request(options2, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //console.log(body);
        console.log("The movie's title is: " + JSON.parse(body).Title);
        console.log("The Year it was made: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
        console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL); 
      }
    });
  }  
}
function random(){

}