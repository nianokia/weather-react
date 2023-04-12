import React, { useState } from "react";
import CurrentConditions from "./CurrentConditions";
import Forecast from "./Forecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: "Thursday",
      time: "4:00 pm",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="heading">
          <h1>{weatherData.name}</h1>
          <p>
            {weatherData.date}, {weatherData.time}
          </p>
          <p className="text-capitalize">{weatherData.description}</p>
        </div>
        <CurrentConditions
          temperature={Math.round(weatherData.temperature)}
          wind={weatherData.wind}
          humidity={weatherData.humidity}
        />
        <Forecast />
      </div>
    );
  } else {
    const apiKey = "7fbc4204c23b04814101fc2bf335b695";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return <div>Loading...</div>;
  }
}
