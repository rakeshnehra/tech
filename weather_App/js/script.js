// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bb2c786db5msha844b8139dbc275p19b3e4jsn96d3a744a8a6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWether =(city)=>{
    cityName.innerHTML = city
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    // wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
    console.log(response);
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()  //page relode nai 
    getWether(city.value)
})
// getWether("delhi")

