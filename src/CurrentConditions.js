import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./CurrentConditions.css";

export default function CurrentConditions(props) {
  return (
    <div className="CurrentConditions row">
      <div className="col-6 currentContainer">
        <p className="currentIcon">☀</p>
        <span className="temperature">{props.temperature}</span>
        <span className="units">
          <a href="/">°C</a> | <a href="/">°F</a>
        </span>
      </div>
      <div className="col-6">
        <div className="Conditions">
          <ul>
            <li>Wind: {props.wind} mph</li>
            <li>Humidity: {props.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
