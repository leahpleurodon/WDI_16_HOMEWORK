console.log("---Mini IMDB ---");
var favouriteMovie = {
  title: "Help!" ,
  duration: 92,
  stars: ["Ringo Starr","Paul McCartney","John Lennon","George Harrison"]
};

var printOutMovie = function(movie) {
  return movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars.toString()
};

console.log(printOutMovie(favouriteMovie));
