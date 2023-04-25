import React from "react";

export default function WeatherTemp(props) {
  return (
    <span className="WeatherTemp">
      <span className="temperature">{props.fahr}</span>
      <span className="unit">°F</span>
    </span>
  );
}
