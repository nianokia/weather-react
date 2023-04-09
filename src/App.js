import Weather from "./Weather";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  let appData = {
    city: "Atlanta",
    date: "Thursday",
    time: "4:00",
    ampm: "pm",
    description: "Mostly Cloudy",
  };
  return (
    <div className="App">
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
  );
}

export default App;
