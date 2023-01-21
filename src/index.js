import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import '../node_modules/react-vis/dist/style.css';

import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      className="container"
      style={{ display: "block", width: "70%", margin: "0 auto" }}
    >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
