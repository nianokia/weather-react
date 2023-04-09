import React from "react";
import CurrentConditions from "./CurrentConditions";

export default function Weather() {
  return (
    <div className="Weather">
      <CurrentConditions temperature={19} wind={10} humidity={80} />
    </div>
  );
}
