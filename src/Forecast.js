import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="card-body border fiveDayForecast">
            <h5 className="card-title">Thu</h5>
            <p className="forecastIcon">☁</p>
            <p className="card-text">65 °F</p>
          </div>
        </div>
        <div className="col-2">
          <div className="card-body border fiveDayForecast">
            <h5 className="card-title">Fri</h5>
            <p className="forecastIcon">🌦</p>
            <p className="card-text">48 °F</p>
          </div>
        </div>
        <div className="col-2">
          <div className="card-body border fiveDayForecast">
            <h5 className="card-title">Sat</h5>
            <p className="forecastIcon">☀</p>
            <p className="card-text">48 °F</p>
          </div>
        </div>
        <div className="col-2">
          <div className="card-body border fiveDayForecast">
            <h5 className="card-title">Sun</h5>
            <p className="forecastIcon">☁</p>
            <p className="card-text">58 °F</p>
          </div>
        </div>
        <div className="col-2">
          <div className="card-body border fiveDayForecast">
            <h5 className="card-title">Mon</h5>
            <p className="forecastIcon">☁</p>
            <p className="card-text">68 °F</p>
          </div>
        </div>
        <div className="col-2">
          <div className="cardBody border fiveDayForecast">
            <h5 className="cardTitle">Tue</h5>
            <p className="forecastIcon">🌦</p>
            <p className="cardText">65 °F</p>
          </div>
        </div>
      </div>
    </div>
  );
}
