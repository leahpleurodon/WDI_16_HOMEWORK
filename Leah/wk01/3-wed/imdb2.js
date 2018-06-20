console.log("---Mini IMDB ---");
//get the elements from page
var titleTextBox = document.getElementById("movieTitle")
var durationTextBox = document.getElementById("movieDuration")
var starsTextBox = document.getElementById("movieStars")

//my array of movies
var movieArray = [
  {
    title: "Help!" ,
    duration: 92,
    stars: ["Ringo Starr","Paul McCartney","John Lennon","George Harrison"]
  }
];

//function to show all movies

var printMovies = function() {
  var currentMovie //initialising variable for use in the function
  for (i=0; i < movieArray.length; i ++){
    currentMovie = movieArray[i]
    console.log(currentMovie.title + " lasts for " + currentMovie.duration + " minutes. Stars: " + currentMovie.stars.toString());
  }
};

var addMovie = function(newTitle, newDuration, newStars){
  var newMovie = {
    title: newTitle,
    duration: newDuration,
    stars: newStars.split(',')
  };
  movieArray.push(newMovie)
}

document.getElementById("submit").addEventListener("click", function(){
    addMovie(titleTextBox.value, durationTextBox.value, starsTextBox.value);},
    false
);

document.getElementById("viewMovies").addEventListener("click", printMovies);
