import { useState } from "react";
import CurrentConditions from "./CurrentConditions.jsx";
import Forecast from "./Forecast.jsx";
import FormattedDate from "./FormattedDate.jsx";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = import.meta.env.VITE_WEATHER_APIKEY;
    
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      timezone: response.data.time,
      coordinates: response.data.coordinates,
    });
    console.log(`weatherData: ${JSON.stringify(weatherData.coordinates)}`);
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
