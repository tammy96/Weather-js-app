
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

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        console.log("yeah cloudy");
        break;
        case "Clear":
          weatherIcon.src = "images/clear.png"
          console.log("clearer than clear yeahh")
          break;
        case "Rain":
          weatherIcon.src = "images/rain.png"
          console.log("rainy as hell")
          break;
        case "Drizzle":
          weatherIcon.src = "images/drizzle.png"
          console.log("drizzlery")
          break;
        case "Mist":
          weatherIcon.src = "images/mist.png"
          console.log("mistycal")
          break;
      default:
        break;
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
  