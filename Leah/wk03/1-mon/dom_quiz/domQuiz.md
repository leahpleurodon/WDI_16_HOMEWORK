given the markup in index.html:

(1.) Write the correct javascript to select the second h1 element:

```
document.querySelectorAll("h1")[1]

```

(2.) How would you change the contents of the h1 element to be 'Friend'?

```
document.querySelectorAll("h1")[1].textContent = "Friend"
```

(3.) How would you add an event listener to the button element inside the div with class box, so that when it is clicked the background colour of the div with class box changes to red?

``` document.querySelector(".box").getElementsByTagName("button")[0].addEventListener("click", ()=>{
    document.querySelector(".box").style.backgroundColor = "red"});
```

(4.) Store the contents of the input box element with id 'fav-color' into a variable called 'favColor'.

```
let favColor = document.getElementById("fav-color").value
```

(5.) Write the necessary code to figure out the number children elements in the shopping-list ul.

```
document.getElementsByClassName("shopping-list")[0].children.length
```

(6.) Write the neccessary code so when the button is clicked a new list item with a random number between 1 and 45 is appended to the unordered list with the class 'lucky-numbers' 

```
let drawNum = ()=>{
    let randLuckyNo = Math.floor((Math.random()*45) +1);

    let luckyNosList = document.getElementsByClassName("lucky-numbers")[0]

    let newLi = document.createElement("li");
    newLi.textContent = randLuckyNo;

    luckyNosList.appendChild(newLi);
};

document.getElementsByClassName("draw-btn")[0].addEventListener("click", drawNum);

```

