import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MovieContextData } from "./context/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieContextData>
    <App />
  </MovieContextData>
);
