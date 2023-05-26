function renderWeather(weather){

    if(weather.cod == "404"){
        document.getElementById("city").innerHTML = "city not found";

        document.getElementById("temp").innerHTML = "";

        document.getElementById("minmax").innerHTML = "";

        document.getElementById("clouds").innerHTML = "";

        document.getElementById("humidity").innerHTML = "";

        document.getElementById("wind").innerHTML = "";
    }else{

        document.getElementById("city").innerHTML = weather.name;

        var temp = weather.main.temp;
        document.getElementById("temp").innerHTML = "Temperature: " + temp;
        if(temp < 10){
            document.getElementById("temp").style.color = 'blue';
        }else if(temp >= 10 && temp < 20){
            document.getElementById("temp").style.color = 'yellow';
        }else if(temp >= 20 && temp < 30){
            document.getElementById("temp").style.color = 'orange';
        }else if(temp >= 30){
            document.getElementById("temp").style.color = 'red';
        }
        

        document.getElementById("minmax").innerHTML = "Minimum: " + weather.main.temp_min + " Maximum: " + weather.main.temp_max;

        document.getElementById("clouds").innerHTML = weather.weather[0].main;

        document.getElementById("humidity").innerHTML = "humidity" + weather.main.humidity + "%";

        document.getElementById("wind").innerHTML = "wind" + weather.wind.speed + "m/s";
    }
    
  }
  
  function fetchWeather(query){
    var city = document.getElementById('location').value;
    console.log(city == null);
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=72487190681344a4247015c8d5606641";
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => renderWeather(data));
  }
  
  fetchWeather();