import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./App.css";
// import { BrowserRouter } from "react-router-dom";

render(
  // <BrowserRouter>
  // </BrowserRouter>
  <App />,
  document.querySelector("#root")
);
