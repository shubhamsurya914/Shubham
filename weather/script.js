'use strict'

const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const temperature = document.querySelector('.temp');
const city = document.querySelector('.city');
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const weather = document.querySelector('.weather');
const error = document.querySelector('.error');


const apiKey = "4ca6e7dc0e6383f883f42caa669d0391";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(place){
    const response = await fetch(apiUrl + place + `&appid=${apiKey}`);

    if(response.status === 404){
        error.style.display = "block";
        weather.style.display = "none";
    } else {

        let data = await response.json();
    city.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    wind.innerHTML = data.wind.speed + "km/hr";
    humidity.innerHTML =data.main.humidity + "%";
    weather.style.display = "block";
    error.style.display = "none"

    console.log(data)



    if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
       weatherIcon.src = "images/clear.png" 
    }
    else if(data.weather[0].main === "Rain"){
       weatherIcon.src = "images/rain.png" 
    }
    else if(data.weather[0].main === "Drizzle"){
       weatherIcon.src = "images/drizzle.png" 
    }
    else if(data.weather[0].main === "Mist"){
       weatherIcon.src = "images/mist.png" 
    }
    }
    

   
}


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
