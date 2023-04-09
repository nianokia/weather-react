import React from "react";
import CurrentConditions from "./CurrentConditions";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Weather">
      <CurrentConditions temperature={19} wind={10} humidity={80} />
      <Forecast />
    </div>
  );
}
