import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  function maxTemp() {
    let max = Math.round(props.data.temperature.maximum);
    return `${max}°`;
  }

  function minTemp() {
    let min = Math.round(props.data.temperature.minimum);
    return `${min}°`;
  }

  return (
    <div className="ForecastDay">
      <div className="ForecastDayName">{day()}</div>
      <div className="d-none d-md-block">
        <WeatherIcon code={props.data.condition.icon} size={60} />
      </div>
      <div className="d-lg-none d-md-none d-sm-block">
        <WeatherIcon code={props.data.condition.icon} size={45} />
      </div>
      <div className="forecastTemperatures">
        <span className="forecastTemperatureMax">{maxTemp()}</span>
        <span className="forecastTemperatureMin">{minTemp()}</span>
      </div>
    </div>
  );
}