import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"

import { ToastContainer } from "react-toastify";

import Login from "./Login";
import Menu from "./Menu";
import Register from "./Register";
import BankAccount from "./BankAccount";
import Movements from "./Movements";
import History from "./History";
import Transfer from "./Transfer";
import Dashboard from "./Dashboard";

import UserContext from "../providers/UserContext";

function App(){

    const [userID, setUserID] = useState("default");

    function updateUserId(value){
        setUserID(value);
    }

    return(
        <>
        <UserContext.Provider value={[userID, updateUserId]}>
            <Menu/>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/accounts" element={<BankAccount/>} />
                <Route path="/transactions" element={<Movements/>} />
                <Route path="/history" element={<History/>} />
                <Route path="/transfers" element={<Transfer/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </UserContext.Provider>
        <ToastContainer />
        </>
    );
}

export default App;