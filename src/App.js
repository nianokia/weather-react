import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import Clouds from "./video/clouds.mp4";

export default function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={Clouds} type="video/mp4" />
        </video>
        <div className="appContainerContent">
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
          and is open-sourced on{" "}
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
    </div>
  );
}
