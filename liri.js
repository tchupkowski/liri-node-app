// Load the fs package to read and write
var fs = require("fs");

// Take two arguments.
// The first will be the action (i.e. "deposit", "withdraw", etc.)
// The second will be the amount that will be added, withdrawn, etc.
var action = process.argv[2];
var value = process.argv[3];

var Twitter = require('twitter');
var spotify = require('spotify');

// We will then create a switch-case statement (if-then would also work).
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

}

function spotifySong(){
  spotify.search({ type: 'track', query: value }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
    console.log("the artist is: " + data.tracks.items[0].artists[0].name)  
    console.log("the album name is " + data.tracks.items[0].album.name);

    });

}

function movie(){

}

function random(){

}