console.log("hello");
let hexColor = "#000"

$(".color-picker").on("submit",()=>{
    event.preventDefault();
    hexColor = $(".hex-color").val() || "#000"
    $(".color-indicator").css('background-color', hexColor);
})