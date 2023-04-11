import React from "react";
import CurrentConditions from "./CurrentConditions";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather() {
  let appData = {
    city: "Atlanta",
    date: "Thursday",
    time: "4:00",
    ampm: "pm",
    description: "Mostly Cloudy",
  };
  return (
    <div className="Weather">
      <div className="heading">
        <h1>{appData.city}</h1>
        <p>
          {appData.date} {appData.time}
          {appData.ampm}
        </p>
        <p>{appData.description}</p>
      </div>
      <CurrentConditions temperature={19} wind={10} humidity={80} />
      <Forecast />
    </div>
  );
}
