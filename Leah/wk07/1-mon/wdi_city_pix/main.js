const cities = [
    {name: "NYC", class: "nyc"},
    {name: "SF", class: "sf"},
    {name: "LA", class: "la"},
    {name: "SYD", class: "sydney"},
    {name: "ATX", class: "austin"}
];

const citySelect = document.getElementById("city-type");

cities.forEach(city => {
    let option = document.createElement("option");
    option.text = city.name;
    option.value = city.name;
    citySelect.appendChild(option);
});

citySelect.addEventListener("change", ()=>{
    let cityClass = "";
    cities.forEach(city => {
        if(city.name === event.target.value){
            cityClass = city.class
        }
    });
    document.body.className = cityClass;
});

