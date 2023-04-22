import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const colorMapping = {
    "01d": "#f95959",
    "01n": "#233142",
    "02d": "#f95959",
    "02n": "#f95959",
    "03d": "#f95959",
    "03n": "#f95959",
    "04d": "#455d7a",
    "04n": "#455d7a",
    "09d": "#233142",
    "09n": "#233142",
    "10d": "#233142",
    "10n": "#233142",
    "11d": "#233142",
    "11n": "#233142",
    "13d": "#455d7a",
    "13n": "#455d7a",
    "50d": "#455d7a",
    "50n": "#455d7a",
  };

  return (
    <span>
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color={colorMapping[props.code]}
        size={props.size}
        animate={true}
      />
    </span>
  );
}
