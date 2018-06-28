

var moneyTree = function(size,backGround){
    var string = "";
    var maxString = " ".repeat(size);
    for (var i = 1; i < maxString.length; i +=2){
        string = "$".repeat(i);
        console.log(String(maxString + string).slice(
            (i/2)));
    };
};