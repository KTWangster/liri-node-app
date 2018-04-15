require("dotenv").config();

var fs = require("fs");
var path = "random.txt";
// Stores all arguments in an array.
var nodeArgs = process.argv;
var spotify = require("node-spotify-app");
var twitter = require("twitter");
var userCommand = process.argv[2];
var userInput = process.argv[3];
// Empty variable for holding searches.
var search = "";

// Defines Twitter function.
function twitterCall() {
    var client = new Twitter({
        consumer_key: 'RkRDXnkPtC1v92i8Uv8ASsGVJ',
        consumer_secret: 'leL5MlhS3Duo0qOJYCo6Nl9J01DyZ6S3UudHbura2VfVXKOD7N',
        access_token_key: '985341007897210880-bXNCjR4fVaFt7pDuStzK0menmEmN837',
        access_token_secret: '4hJtZ3rVeRmwk1YVMwOrYxlQdm3yOyYiX1m5K1lEySCAz'
    });

    var params = { screen_name: 'affectivecode' };
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
};

// Defines Spotify function.
// Retrieves song artist, name, preview, and album from Spotify API.
function spotifyCall() {
    var spotify = new Spotify({
        id: '582c3d1873bf4d959c639de76b7fd7d6',
        secret: '6d9cac2192ba4e3ab01cc191f201b57e'
    });

    spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var spotifyArtist = data.tracks.items[0].artists;
        var spotifyName = data.tracks.items[0].name;
        var spotifyPreview = data.tracks.items[0].preview_url;
        var spotifAlbum = data.tracks.items[0].album.name;
        // Variable with all results.
        var spotifyResult = "Artist: " + spotifyArtist + "\nSong: " + spotifyName + "\nPreview: " +
            spotifyPreview + "\nAlbum: " + spotifyAlbum;

        // Output Spotify result.
        console.log(spotifyResult);

    });
};


// Defines Movie function using OMDB API.
// Outputs: Title, year, rating, Rotten Tomatoes rating, production country, language, plot, actors.
function movieCall() {
    for (var i = 2; i < nodeArgs.length; i++) {
        if (i > 2 && i < nodeArgs.length) {
            search = search + "+" + search[i];
        } else {
            search += nodeArgs[i];
        }
    }

    var queryURL = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy"
    console.log(queryURL);

    request(queryURL, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            // Parse body of site and recover required outputs.

            var omdbTitle = JSON.parse(body).Title;
            var omdbYear = JSON.parse(body).Year;
            var omdbImdb = JSON.parse(body).IMDBRating;
            var omdbRottenTomatoes = JSON.parse(body).RottenTomatoes;
            var omdbProduction = JSON.parse(body).Title;
            var omdbLanguage = JSON.parse(body).Title;
            var omdbPlot = JSON.parse(body).Title;
            var omdbActors = JSON.parse(body).Title;
            // Output OMDB result.
            var omdbResult = "Title: " + "Release Year: " + "IMDB Rating: " + "Rotten Tomatoes Ratin: " +
                "Country of Production: " + "Language: " + "Plot: " + "Actors: "
        };
    });

    // If statement for user input.
    if (userCommand === 'my-tweets') {
        // Call Twitter function
    } else if (userCommand === 'spotify-this-song') {
        // Call Spotify function
    } else if (userCommand === 'movie-this') {
        // Call Movie functionn
    } else if (userCommand === 'do-what-it-says') {
        // Run 'spotify-this-song' for "I Want it That Way"
    } else {
        console.log("Commannd not found!")
    };
};