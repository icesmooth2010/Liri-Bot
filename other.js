require("dotenv").config();

var Twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require('request');
var movieTitle = process.argv[3];
var songTitle = process. argv[3]
if (process.argv[2] === "movie-this"){
    console.log("movies are awesome")
    request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
    console.log('this is ' + movieTitle + 'awesome')
    console.log(JSON.parse (body))
    console.log("Title of movie: " + JSON.parse(body).Title + "\nReleased Date: " + JSON.parse(body).Released)
    //finish adding the imdb information//
});
}


var spotify = new Spotify(keys.spotify);
function spotifySong(song){
    spotify.search({ type: 'track', query: song}, function(error, data){
      if(!error){
        for(var i = 0; i < data.tracks.items.length; i++){
          var songData = data.tracks.items[i];
          //artist
          console.log("Artist: " + songData.artists[0].name);
          //song name
          console.log("Song: " + songData.name);
          //spotify preview link
          console.log("Preview URL: " + songData.preview_url);
          //album name
          console.log("Album: " + songData.album.name);
          console.log("-----------------------");
          
          //adds text to log.txt
          fs.appendFile('log.txt', songData.artists[0].name);
          fs.appendFile('log.txt', songData.name);
          fs.appendFile('log.txt', songData.preview_url);
          fs.appendFile('log.txt', songData.album.name);
          fs.appendFile('log.txt', "-----------------------");
        }
      } else{
        console.log('Error occurred.');
      }
    });
  }

if (process.argv[2] === "spotify-this-song"){
    console.log("I love Music")
    request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy", function(error, response, body) {
    console.log('this is ' + movieTitle + 'awesome')
    console.log(JSON.parse (body))
    console.log("Title of movie: " + JSON.parse(body).Title + "\nReleased Date: " + JSON.parse(body).Released);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body) +"\ntomatoRating:");
console.log("Country: " + body.Country);
      console.log("Language: " + body.Language);
      console.log("Plot: " + body.Plot);
      console.log("Actors: " + body.Actors);
      console.log("Rotten Tomatoes URL: " + body.tomatoURL);

      //adds text to log.txt
      fs.appendFile('log.txt', "Title: " + body.Title);
      fs.appendFile('log.txt', "Release Year: " + body.Year);
      fs.appendFile('log.txt', "IMdB Rating: " + body.imdbRating);
      fs.appendFile('log.txt', "Country: " + body.Country);
      fs.appendFile('log.txt', "Language: " + body.Language);
      fs.appendFile('log.txt', "Plot: " + body.Plot);
      fs.appendFile('log.txt', "Actors: " + body.Actors);
      fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + body.tomatoRating);
      fs.appendFile('log.txt', "Rotten Tomatoes URL: " + body.tomatoURL);

    } else{
      console.log('Error occurred.')
    
if(movie === "Mr. Nobody"){
      console.log("-----------------------");
      console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      console.log("It's on Netflix!");

      //adds text to log.txt
      fs.appendFile('log.txt', "-----------------------");
      fs.appendFile('log.txt', "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
      fs.appendFile('log.txt', "It's on Netflix!");
    }
  });

  function doThing(){
    fs.readFile('random.txt', "utf8", function(error, data){
      var txt = data.split(',');
  
      spotifySong(txt[1]);
    });
  }
  //switch case
switch(command){
    case "my-tweets":
      showTweets();
    break;
  
    case "spotify-this-song":
      if(x){
        spotifySong(x);
      } else{
        spotifySong("Fluorescent Adolescent");
      }
    break;
  
    case "movie-this":
      if(x){
        omdbData(x)
      } else{
        omdbData("Mr. Nobody")
      }
    break;
  
    case "do-what-it-says":
      doThing();
    break;
  
    default:
      console.log("{Please enter a command: my-tweets, spotify-this-song, movie-this, do-what-it-says}");
    break;
  }
  
//var client = new Twitter(keys.twitter);
function showTweets(){
    //Display last 20 Tweets
    var screenName = {screen_name: 'icesmooth2010'};
    client.get('statuses/user_timeline', screenName, function(error, tweets, response){
      if(!error){
        for(var i = 0; i<tweets.length; i++){
          var date = tweets[i].created_at;
          console.log("@icesmooth2010: " + tweets[i].text + " Created At: " + date.substring(0, 19));
          console.log("-----------------------");
          
          //adds text to log.txt file
          fs.appendFile('log.txt', "@icesmooth2010: " + tweets[i].text + " Created At: " + date.substring(0, 19));
          fs.appendFile('log.txt', "-----------------------");
        }
      }else{
        console.log('Error occurred');
      }
    });
