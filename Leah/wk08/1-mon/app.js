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


$(".color-picker").on("submit",()=>{
    event.preventDefault();
    changeColor();
})

$("main").on("click",()=>{
    $(event.target).css('background-color', hexColor);
})

addPixels();