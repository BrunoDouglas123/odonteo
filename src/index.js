import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

export const ReactStrictMode = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const rootElement = document.getElementById("root");

ReactDOM.render(ReactStrictMode, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
