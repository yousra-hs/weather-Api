   
var input = document.getElementById("inputCity");
var button = document.getElementById("button") ;











async function apiCall(city){
var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=50a7aa80fa492fa92e874d23ad061374`);
var data = await res.json();


document.querySelector("#city").innerHTML = data.name;
document.querySelector("#temp").innerHTML = data.main.temp;
document.querySelector("#humidity").innerHTML = data.main.humidity;
document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";
}
document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    var city = document.querySelector('#inputCity').value;
    apiCall(city);
})