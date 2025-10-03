import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "RAIN",
    "thunderstorm-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };

  const colorMapping = {
    "clear-sky-day": "#f95959",
    "clear-sky-night": "#233142",
    "few-clouds-day": "#f95959",
    "few-clouds-night": "#233142",
    "scattered-clouds-day": "#f95959",
    "scattered-clouds-night": "#233142",
    "broken-clouds-day": "#8897aa",
    "broken-clouds-night": "#233142",
    "shower-rain-day": "#455d7a",
    "shower-rain-night": "#233142",
    "rain-day": "#8897aa",
    "rain-night": "#233142",
    "thunderstorm-day": "#455d7a",
    "thunderstorm-night": "#233142",
    "snow-day": "#455d7a",
    "snow-night": "#233142",
    "mist-day": "#455d7a",
    "mist-night": "#233142",
  };

  return (
    <span className="WeatherIcon">
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color={colorMapping[props.code]}
        size={props.size}
        animate={true}
      />
    </span>
  );
}
