require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var a = process.argv[2];
var movieName = process.argv[3];

//check the argument, what user search for
if (a == "movie-this") {

// Grab the axios package...
var axios = require("axios");

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);
    console.log("The movie's release in: " + response.data.Year);
    console.log("Artists: " + response.data.Actors);
    console.log("Producers: " + response.data.Director);

 }
);

// Grab the movieName which will always be the third node argument.



// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
//console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Screen Play: " + response.data.Writer);
  }
);
};

//check argument if user look for track
if (a == "spotify-this-song" ) {
spotify
.search({type: "track", query: "artist"})
.then(function(response){
  console.log(response);
})
.catch(function(err) {
  console.log(err);
});
}

if (a == "concert-this") {
  console.log("No API key from band-in-town at this time")
}

//read data from file
// fs is a core Node package for reading and writing files
if (a == "do-what-it-says") {
var fs = require("fs");

// This block of code will read from the "random.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("random.txt", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);

});
}







