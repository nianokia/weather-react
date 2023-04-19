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
    "01d": "goldenrod",
    "01n": "black",
    "02d": "darkgoldenrod",
    "02n": "#344354",
    "03d": "darkgoldenrod",
    "03n": "#344354",
    "04d": "cornflowerblue",
    "04n": "#416199",
    "09d": "blue",
    "09n": "blue",
    "10d": "blue",
    "10n": "blue",
    "11d": "darkblue",
    "11n": "darkblue",
    "13d": "lightblue",
    "13n": "lightblue",
    "50d": "lightgrey",
    "50n": "lightgrey",
  };

  return (
    <span>
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color={colorMapping[props.code]}
        size={65}
        animate={true}
      />
    </span>
  );
}
