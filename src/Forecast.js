import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row fiveDayForecast">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <WeatherIcon code="02d" size={35} />
          <div className="forecastTemperatures">
            <span className="forecastTemperatureMax">79°</span>
            <span className="forecastTemperatureMin">57°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
