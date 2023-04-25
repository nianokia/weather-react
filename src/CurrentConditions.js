import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

import "./CurrentConditions.css";

export default function CurrentConditions(props) {
  return (
    <div className="CurrentConditions row">
      <div className="col-6 currentContainer">
        <span className="d-none d-md-inline-flex">
          <WeatherIcon code={props.icon} size={85} />
        </span>
        <div className="d-lg-none d-md-none d-sm-block">
          <WeatherIcon code={props.icon} size={72} />
        </div>
        <WeatherTemp fahr={props.temperature} />
      </div>
      <div className="col-6">
        <div className="Conditions">
          <ul>
            <li>Wind: {Math.round(props.wind)} mph</li>
            <li>Humidity: {props.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
