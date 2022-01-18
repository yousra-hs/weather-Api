var input = document.getElementById('input'); 
var btn = document.getElementById("button");

btn.addEventListener('click',function verif(){
    if(input.value ==""){
        input.nextElementSibling.innerHTML = "Field Required";
    }
    var city = document.querySelector('#input').value;
    apiCall(city);
});

async function apiCall (weather){
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=50a7aa80fa492fa92e874d23ad061374`);
    var data = await res.json();

document.querySelector("#city").innerHTML = data.name;
document.querySelector("#temp").innerHTML = data.main.temp;
document.querySelector("#humidity").innerHTML = data.main.humidity;
document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
 
} 
