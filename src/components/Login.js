import { useState } from "react";

function Login() {

  const [user,setUser] = useState("");
  const [password,setPassword] = useState("");

  function inputUser(event){
    setUser(event.target.value);
  }

  function inputPassword(event){
    setPassword(event.target.value);
  }

  function makeLogin() {
    alert("user: " + user + " password: " + password);
  }

  return (
    <>
      <div className="row">
        <div className="col ">
          <div className="row text-center">
            <h2>Welcome to Misfit!</h2>
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
        <a href="#" className="link-info">
          Don't have an account? Register here
        </a>
      </div>
    </>
  );
}

export default Login;
