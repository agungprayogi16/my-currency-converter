/** @format */

// src/main.jsx atau src/main.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
