function renderWeather(weather){
  var resultsContainer = document.querySelector("#weather-results");
}

function fetchWeather(query){
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Trento&appid=72487190681344a4247015c8d5606641";

  fetch(url)
    .then((response) => response.json());
    .then((data) => console.log(data));
}

fetchWeather("London");
