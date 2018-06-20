var currentYear = (new Date()).getFullYear();

var birthYear = Number(prompt("What year were they born in?"));

var age = currentYear - birthYear;

console.log("They are either " + (age) + " or " + (age - 1));
