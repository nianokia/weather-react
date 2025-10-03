import { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay.jsx";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    console.log(`response.data.daily or list: ${JSON.stringify(response.data.daily)}`)
    setLoaded(true);
  }

  function load() {
    let apiKey = "9733a0bfob8d3b90ab42ae5a571ftfa4";
    
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row fiveDayForecast d-none d-md-flex">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key="index">
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="row sixDayForecast d-lg-none d-md-none d-sm-flex">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key="index">
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
