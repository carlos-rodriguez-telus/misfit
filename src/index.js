import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Menu from "./components/Menu";
import Register from "./components/Register";
import BankAccount from "./components/BankAccount";
import Movements from "./components/Movements";
import History from "./components/History";
import Transfer from "./components/Transfer";
import Dashboard from "./components/Dashboard";

export const UserContext = createContext("1");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      className="container"
      style={{ display: "block", width: "60%", margin: "0 auto" }}
    >
      <Register />
      <UserContext.Provider value="15">
        <BankAccount />
      </UserContext.Provider>
    </div>
  </React.StrictMode>
);
