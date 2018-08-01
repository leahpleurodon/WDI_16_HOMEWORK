
const resultsDiv = document.querySelector(".results");
const queryBtn = document.querySelector(".query-btn");
const queryInput = document.querySelector(".query-input");
const pgnationDiv = document.querySelector(".pagination");


const onSuccess = (res) => {
    resultsDiv.innerHTML = "";
    if(res.Response === "False"){
        resultsDiv.innerHTML = "<div class='no-result'>No Reuslts found... you peanut...</div>"
    };
    res.Search.forEach(movie => {
        createMovieCard(movie);
    });
    if(res.totalResults > 10){
        createPagination(res.totalResults);
    };
};

const callApi = (url) =>{
    $.ajax({
        method: 'GET',
        url: url,
        dataType: 'json',
      }).done(onSuccess);
}

const createMovieCard = (movie) =>{
    let movieCard = document.createElement("div");
    movieCard.className = "movie-card"

    let titleSection = document.createElement("header");
    titleSection.innerHTML = "<h2>" + movie.Title + "</h2>"


    let posterDiv = document.createElement("div");
    posterDiv.className = "poster"
    posterDiv.style.backgroundImage = "url(" + movie.Poster + ")";
    posterDiv.innerHTML="&nbsp;"

    movieCard.appendChild(titleSection)
    movieCard.appendChild(posterDiv)
    resultsDiv.appendChild(movieCard);
    movieCard.addEventListener("click",()=>{
        window.open("https://www.imdb.com/title/" + movie.imdbID)
    })
}

const createPageBtn = (pge) =>{
    var pgButton = document.createElement("button");
    pgButton.className = "page";
    pgButton.innerText = pge;
    pgButton.addEventListener("click", ()=>{
        console.log(apiCall);
        var apiCall ='http://www.omdbapi.com/?apikey=2f6435d9&s=' + queryInput.value + "&page=" + pge;
        callApi(apiCall);
    });
    pgnationDiv.appendChild(pgButton);
};
const createPagination = (numResults) =>{
    pgnationDiv.innerHTML = "";
    let numPages = Math.floor(numResults/10)
    if(numResults % 10 >0){ numPages = numPages + 1};
    for (let i = 1; i <= numPages; i++) {
        createPageBtn(i)
    };
};


queryBtn.addEventListener("click", ()=>{
    var apiCall = 'http://www.omdbapi.com/?apikey=2f6435d9&s=' + queryInput.value;
    callApi(apiCall);
});


