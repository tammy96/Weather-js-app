
const API_KEY = "64f60853740a1ee3ba20d0fb595c97d5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search-icon")
const searched =document.querySelector(".search")
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


  document.querySelector(".weather").style.display = "block"
  document.querySelector(".weather-error").style.display = "none"
    console.log(data);
      }).catch((err) => {

        document.querySelector(".weather-error").style.display = "block"
        document.querySelector(".weather").style.display = "none" 
      console.log((err), "THIS IS AN ERROR MESSAGE!!!!!!")
      });

} 



searched.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    getWeather(searchBox.value)
      searchBox.value = ""
  }
});

  searchBtn.addEventListener("click",  function(){
    getWeather(searchBox.value)
    searchBox.value = ""
  })
  