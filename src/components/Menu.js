import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import UserContext from "../providers/UserContext";

function Menu() {
  const navigate = useNavigate();

  const [userID, updateUserId] = useContext(UserContext);

  function closeSession(){
    let exit = window.confirm("Do you want to close session?");
    if(exit){
      updateUserId("default");
      navigate("/");
    }
  }

  return (
    <>
      <div className="row" style={{ marginBottom: "25px" }}>
        <div className="col">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Misfit
              </Link>
              <div className="navbar-nav">
                {userID != "default" && (
                  <>
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    <Link className="nav-link" to="/accounts">Bank Accounts</Link>
                    <Link className="nav-link" to="/transactions">Transactions</Link>
                    <Link className="nav-link" to="/transfers">Transfers</Link>
                    <Link className="nav-link" to="/history">History</Link>
                    <button className="btn btn-danger" onClick={closeSession}>Exit</button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Menu;
