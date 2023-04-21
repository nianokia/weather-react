import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row fiveDayForecast">
          <ForecastDay data={forecast[0]} />
          <ForecastDay data={forecast[1]} />
          <ForecastDay data={forecast[2]} />
          <ForecastDay data={forecast[3]} />
          <ForecastDay data={forecast[4]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "203fa770242fcd2b9555d832a88ea567";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
