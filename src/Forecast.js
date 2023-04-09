import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">
          <div className="cardBody border fiveDayForecast">
            <h5 className="cardTitle">Thu</h5>
            <p className="forecastIcon">☁</p>
            <p className="cardText">65 °F</p>
          </div>
        </div>
        <div className="col-2">
          <div className="cardBody border fiveDayForecast">
            <h5 className="cardTitle">Fri</h5>
            <p className="forecastIcon">🌦</p>
            <p className="cardText">48 °F</p>
          </div>
        </div>
        <div className="col-2">
          <div className="cardBody border fiveDayForecast">
            <h5 className="cardTitle">Sat</h5>
            <p className="forecastIcon">☀</p>
            <p className="cardText">48 °F</p>
          </div>
        </div>
        <div className="col-2">
          <div className="cardBody border fiveDayForecast">
            <h5 className="cardTitle">Sun</h5>
            <p className="forecastIcon">☁</p>
            <p className="cardText">58 °F</p>
          </div>
        </div>
        <div className="col-2">
          <div className="cardBody border fiveDayForecast">
            <h5 className="cardTitle">Mon</h5>
            <p className="forecastIcon">☁</p>
            <p className="cardText">68 °F</p>
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
