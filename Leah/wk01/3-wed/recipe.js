console.log("---Recipe---");
var favouriteRecipe = {
  name: "Mole",
  serves: 2,
  ingredients: ["cinnamon", "cumin" ,"cocoa"]
};

console.log("My Favourite Recipe");
console.log(favouriteRecipe.name);
console.log("Serves: " + favouriteRecipe.serves);
console.log("Ingredients");
for(var i = 0; i < favouriteRecipe.ingredients.length; i++){
  console.log(" - " + favouriteRecipe.ingredients[i]);
};
