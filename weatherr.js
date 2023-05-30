
const API_KEY = "64f60853740a1ee3ba20d0fb595c97d5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
const humidIcon = document.querySelector(".humidity-icon")
const windIcon = document.querySelector(".wind-icon")


//created a function and fetched the weather data from api 
function getWeather(city) {
      fetch(
      apiUrl + city +`&appid=${API_KEY}&units=metric`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // console.log(data);
      
    document.querySelector(".city").innerHTML = data.name; 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main === "Clouds"){
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

    console.log(data);
      }).catch((err) => {

        document.querySelector(".city").innerHTML = "Oops error" 
        document.querySelector(".temp").innerHTML = "Oops error";
        document.querySelector(".humidity").innerHTML = "error";
        document.querySelector(".wind").innerHTML = "Error";
        weatherIcon.remove()
        humidIcon.remove()
        windIcon.remove()

    
      console.log((err), "THIS IS AN ERROR MESSAGE!!!!!!")
      });

} 



  searchBtn.addEventListener("click",  function(){
    getWeather(searchBox.value)
  })
  