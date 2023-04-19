import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahr");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahr(event) {
    event.preventDefault();
    setUnit("fahr");
  }

  function calculateCelsius() {
    return Math.round(((props.fahr - 32) * 5) / 9);
  }

  if (unit === "fahr") {
    return (
      <span className="WeatherTemp">
        <span className="temperature">{props.fahr}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemp">
        <span className="temperature">{calculateCelsius()}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahr}>
            °F
          </a>
        </span>
      </span>
    );
  }
}
