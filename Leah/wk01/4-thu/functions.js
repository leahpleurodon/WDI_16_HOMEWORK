// 1. Build your own concatenation
// Write a function named combineWords that:
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse'
console.log("---Concatenation---");
function combineWords(word1, word2) {
	return word1 + " " + word2;
}
var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'

// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.
console.log("---Age calculation---");
var thisYear = (new Date()).getFullYear();
var calculateAge = function(birthYear, currentYear){
  age = currentYear - birthYear;
  return "You are either " + (age - 1 ) + " or " + age;
};
console.log(calculateAge(1991, thisYear));
console.log(calculateAge(1962, thisYear));
console.log(calculateAge(1958, thisYear));

//  3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.
console.log("---Lengths calculation---");
var strings = ["one", "two", "three", "four","nineteen","twenty", "twenty-one"];
var lengths = function(stringArray){
  var lengthsArray = [];
  for (i=0; i < stringArray.length; i++){
    lengthsArray.push(stringArray[i].length);
  };
  return lengthsArray;
};
console.log(lengths(strings));

// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.
console.log("---Transmogrifier---");

var transmogrifier = function (num1, num2, num3){
  return Math.pow((num1 * num2),num3);
};
console.log(transmogrifier(2,2,2));

// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'
console.log("---Word Reverse---");
var wordReverse = function (sentence){
  var sentenceArray = sentence.split(" ");
  return sentenceArray.reverse().slice(0, sentenceArray.length).join(' ');
};

console.log(wordReverse("we are good friends"));
