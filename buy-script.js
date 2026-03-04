const cityRates = {

Pune:{
Baner:10700,
Wakad:8400,
Aundh:11800,
Kharadi:10700
},

Mumbai:{
BandraWest:80000,
AndheriWest:45000,
BorivaliWest:24000
},

Delhi:{
Saket:22000,
Dwarka:9000
}

};

const citySelect = document.getElementById("citySelect");
const localitySelect = document.getElementById("localitySelect");

function loadCities(){

citySelect.innerHTML="";

Object.keys(cityRates).forEach(city=>{

let option=document.createElement("option");

option.value=city;
option.text=city;

citySelect.appendChild(option);

});

loadLocalities();
}

function loadLocalities(){

localitySelect.innerHTML="";

let city=citySelect.value;

Object.keys(cityRates[city]).forEach(loc=>{

let option=document.createElement("option");

option.value=loc;
option.text=loc;

localitySelect.appendChild(option);

});

}

citySelect.addEventListener("change",loadLocalities);

function predictPrice(){

let city=citySelect.value;
let locality=localitySelect.value;
let area=document.getElementById("carpetArea").value;

let rate=cityRates[city][locality];

let price=rate*area;

price=Math.round(price);

document.getElementById("priceResult").innerText=

"Estimated Price: ₹"+price.toLocaleString();

}

loadCities();