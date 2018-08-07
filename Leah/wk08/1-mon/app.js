console.log("hello");
let hexColor = "#000"

const changeColor = () => {
    hexColor = $(".hex-color").val() || "#000"
    $(".color-indicator").css('background-color', hexColor);
};

const addPixels = () => {
    for (let i = 0; i < 100; i++) {
        $("main").append("<div class='pixel'>&nbsp</div>")
    };
};

const makePosterDivs = (res) => {
    for (let i = 0; i < 5; i++) {
        let url = res.Search[i].Poster;
        $("footer").append(`<div class='poster-div' style="background-image:url(${url});" 
        data-poster-url="${url}">&nbsp</div>`);
    };
};

const callOMDB = () => {
    $.ajax({
        url: "http://www.omdbapi.com/",
        data:{
            apikey: "2f6435d9",
            s: "beatles"
        }
      }).done(makePosterDivs);
};

$("footer").on("click",()=>{
    url = $(event.target).data("poster-url");
    $("body").css('background-image',`url(${url})`)
})

$(".color-picker").on("submit",()=>{
    event.preventDefault();
    changeColor();
})

$("main").on("mouseover",()=>{
    $(event.target).css('background-color', hexColor);
})

addPixels();
callOMDB();
