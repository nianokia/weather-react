import React, { useState } from "react";
import CurrentConditions from "./CurrentConditions";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
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
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="search-box form-control"
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-warning btn-search form-control w-100"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>

        <div className="heading">
          <h1>{weatherData.name}</h1>
          <p>
            <FormattedDate date={weatherData.date} />
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
