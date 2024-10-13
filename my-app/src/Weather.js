import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleWeather(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53f3bc1f5d348c44be3e3754c7185573`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleWeather}>
        <input type="text" placeholder="type a city" onChange={updateCity} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {" "}
        {form}
        <ul>
          <li> Temperature: {weather.temperature}</li>
          <li> Description: {weather.description}</li>
          <li> Humidity: {weather.humidity}</li>
          <li> Wind: {weather.wind}</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div> {form}</div>;
  }
}
