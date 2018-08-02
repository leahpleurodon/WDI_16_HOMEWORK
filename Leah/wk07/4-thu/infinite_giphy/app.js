var resultOffset = 0;

const onSuccess = (res) => {

    res.data.forEach(gif => {
        console.log(gif.images.downsized.url);
        $("section.results").append( "<img src='" + gif.images.fixed_height_downsampled
        .url + "' class='gif'>"  );
    });

    resultOffset += 10;
    $(window).scroll(function () {
        if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
            callGiphy();
        }
    });
};

const callGiphy = ()=>{
    event.preventDefault();
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?api_key=IaIaCtPJgX9o8jUbGmLWTZ9CMzuGXxHH&limit=10&q=" + $("input.q")[0].value + "&offset=" + resultOffset
      }).done(onSuccess);
}

$("form.search").on("submit",()=>{
    $("section.results").html("")
    $("body").append("<H1 class='scroll-h'>Scroll for moar!</H1>")
    callGiphy()
});

