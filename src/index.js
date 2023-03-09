import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import logo from "./assets/logo.png";
import { Canvas } from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ height: "100%" }}>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <div className="alert">
          <p className="alert-text">⚠️ Scroll down to get your gift...</p>
        </div>
      </header>

      <Canvas>
        <App />
      </Canvas>
      <footer>
        
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
