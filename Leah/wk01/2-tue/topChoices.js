var topBands = ["Beatles","Nirvana","Monkees","The Offspring","Earth Wind and Fire", "K.C and the Sunshine Band",
"Rolling Stones","The Doors","OK GO", "Jet", "BabyMetal","System of a Down","Panterra","Spice Girls",
"BabyMetal","System of a Down","Panterra","Spice Girls",
"BabyMetal","System of a Down","Panterra","Spice Girls", "BabyMetal","System of a Down","Panterra","Spice Girls"];

for (var i = 0; i< topBands.length; i++){
  if (i < 20 && i > 2){
    console.log("My " + (i + 1) + "th choice is " + topBands[i]);
  } else if(i === 0){
    console.log("My 1st choice is " + topBands[i]);
  } else if (i === 1){
    console.log("My 2nd choice is " + topBands[i]);
  } else if(i === 2){
    console.log("My 3rd choice is " + topBands[i]);
  } else if(i % 10 === 0){
    console.log("My " + (i + 1) + "st choice is " + topBands[i]);
  } else if(i % 10 === 1){
    console.log("My " + (i + 1) + "nd choice is " + topBands[i]);
  } else if(i % 10 === 2){
    console.log("My " + (i + 1) + "rd choice is " + topBands[i]);
  } else {
    console.log("My " + (i + 1) + "th choice is " + topBands[i]);
  }
};
