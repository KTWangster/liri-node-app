# liri-node-app
A backend language interpretation and recognition interface that uses NPM's from Spotify, OMDB, and Twitter APIs to return data following user commands.

## What Each Command Should Do:

```node liri.js my-tweets```

**Displays last 20 tweets.**

```node liri.js spotify-this-song '<song name here>'```

**Displays the following information about the selected song:**
* Artist(s)
* Song Name
* A preview link of the song from Spotify
* Album

*If no song is selected, the program will automatically output data for "The Sign" by Ace of Base.*

```node liri.js movie-this '<movie name here>'```

**Displays the following information about the selected movie:**
* Title of the movie
* Release Year
* IMDB Rating
* Rotten Tomatoes Rating
* Production Country
* Language
* Plot
* Actors

*If no movie is selected, the program will automatically output data for the movie 'Mr. Nobody'.*

```node liri.js do-what-it-says```

**Follows text in random.txt and runs spotify-this-song for "I Want it That Way".**
