// q1
document.querySelectorAll("h1")[1]

//q2
document.querySelectorAll("h1")[1].textContent = "Friend"


// q3
document.querySelector(".box").style.backgroundColor = "red";

//q4
let favColor = document.getElementById("fav-color").value

//q5
document.getElementsByClassName("shopping-list")[0].children.length

//q6

let drawNum = ()=>{
    let randLuckyNo = Math.floor((Math.random()*45) +1);

    let luckyNosList = document.getElementsByClassName("lucky-numbers")[0]

    let newLi = document.createElement("li");
    newLi.textContent = randLuckyNo;

    luckyNosList.appendChild(newLi);
};

document.getElementsByClassName("draw-btn")[0].addEventListener("click", drawNum);
