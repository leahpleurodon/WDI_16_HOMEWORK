$( document ).ready(function() {
    // const $('div.results') = document.querySelector(".results");
    // const queryBtn = document.querySelector(".query-btn");
    // const queryInput = document.querySelector(".query-input");
    const pgnationDiv = document.querySelector(".pagination");


    const onSuccess = (res) => {
        $('div.results').innerHTML = "";
        if(res.Response === "False"){
            $('div.results').innerHTML = "<div class='no-result'>No Reuslts found... you peanut...</div>"
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
        $(`
            <div class="movie-card ${movie.imdbID}">
                <header>
                    <h2>${movie.Title}</h2>
                </header>
                <div class="poster" style="background-image:url('${movie.Poster}');"> </div>
            </div>
        `).appendTo('section.results');

        $(`div.${movie.imdbID}`).on("click",()=>{
            window.open("https://www.imdb.com/title/" + movie.imdbID)
        })
    }

    const createPageBtn = (pge) =>{
        var pgButton = document.createElement("button");
        pgButton.className = "page";
        pgButton.innerText = pge;
        pgButton.addEventListener("click", ()=>{
            console.log(apiCall);
            var apiCall ='http://www.omdbapi.com/?apikey=2f6435d9&s=' + $('input.query-input').val() + "&page=" + pge;
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


    $('button.query-btn').on("click", ()=>{
        pgnationDiv.innerHTML = "";
        var apiCall = 'http://www.omdbapi.com/?apikey=2f6435d9&s=' + $('input.query-input').val();
        callApi(apiCall);
    });
});

