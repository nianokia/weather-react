import React, { useState } from "react";
import CurrentConditions from "./CurrentConditions";
import Forecast from "./Forecast";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "7fbc4204c23b04814101fc2bf335b695";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      timezone: response.data.timezone,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function cityLength() {
    if (weatherData.name.length <= 10) {
      return <h1>{weatherData.name}</h1>;
    } else {
      return <h1 className="cityLength">{weatherData.name}</h1>;
    }
  }

  function form() {
    return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              className="search-box form-control"
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-search form-control w-100"
              type="submit"
              value="→"
            />
          </div>
        </div>
      </form>
    );
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {form()}
        <div className="heading">
          {cityLength()}
          <div className="headingBody">
            <FormattedDate timezone={weatherData.timezone} />
            <p className="text-capitalize">{weatherData.description}</p>
          </div>
        </div>
        <CurrentConditions
          temperature={Math.round(weatherData.temperature)}
          wind={weatherData.wind}
          humidity={weatherData.humidity}
          icon={weatherData.icon}
          iconUrl={weatherData.iconUrl}
          description={weatherData.description}
        />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <div>Loading...</div>;
  }
}
