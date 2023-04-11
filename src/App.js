import Weather from "./Weather";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function App() {
  let appData = {
    city: "Atlanta",
    date: "Thursday",
    time: "4:00",
    ampm: "pm",
    description: "Mostly Cloudy",
  };
  return (
    <div className="App">
      <div className="appContainer">
        <Search />
        <div className="heading">
          <h1>{appData.city}</h1>
          <p>
            {appData.date} {appData.time}
            {appData.ampm}
          </p>
          <p>{appData.description}</p>
        </div>
        <Weather />
      </div>
      <footer>
        This app is open-sourced on{" "}
        <a href="https://github.com/nianokia/weather-react">Github</a>.
      </footer>
    </div>
  );
}
