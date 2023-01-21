import axios from "axios";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import routes from "../constants/routes";
import {Link, useNavigate} from "react-router-dom"

import UserContext from "../providers/UserContext";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [userID, updateUserId] = useContext(UserContext);

  function inputUser(event){
    setUser(event.target.value);
  }

  function inputPassword(event){
    setPassword(event.target.value);
  }

  function makeLogin() {
    axios.post(routes.LOGIN, {"email":user, "password":password})
    .then((response)=>{
      if(response.data.message==="INVALID LOGIN"){
        toast.error("Invalid Credentials!");
      }else{
        //TODO set a valid user
        updateUserId(response.data.userData.user_id);
        navigate("/dashboard");
      }
    })
    .catch((error)=>{
      console.log(error);
      toast.error("Something went wrong, try again.");
    });
  }

  return (
    <>
      <div className="row">
        <div className="col ">
          <div className="row text-center">
            <h2>
              <span><img src="./misfit.png" alt="wallet_icon" style={{
                width:"128px", height:"128px", marginRight:"10px"
                }}/></span>
              Welcome to Misfit!
            </h2>
          </div>
          <div className="form-wrapper">
            <div className="form-group">
              <label>Email:</label>
              <input
                id="user"
                name="user"
                className="form-control"
                type="text"
                onChange={inputUser}
              />
            </div>
            <br />
            <div className="form-group">
              <label>Password:</label>
              <input
                id="password"
                name="password"
                className="form-control"
                type="password"
                onChange={inputPassword}
              />
            </div>
            <div className="form-group">
              <br />
              <button className="btn btn-primary" onClick={makeLogin}>
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center" style={{ marginTop: "50px" }}>
        <Link to = "/register" className="link-info">
          Don't have an account? Register here
        </Link>
      </div>
    </>
  );
}

export default Login;
