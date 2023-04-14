import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Weather defaultCity="Atlanta" />
      </div>
      <footer>
        This app was coded by{" "}
        <a
          href="https://niawright.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Nia Wright
        </a>{" "}
        is open-sourced on{" "}
        <a
          href="https://github.com/nianokia/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        .
      </footer>
    </div>
  );
}
