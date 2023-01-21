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
                {userID != "default" && (
      <div className="row" style={{ marginBottom: "25px" }}>
        <div className="col">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
              <span className="navbar-brand" to="/">
                <img src="./wallet.png" alt="wallet_icon" style={{width:"48px", height:"48px", marginRight:"10px"}}/>
                Misfit
              </span>
              <div className="navbar-nav">
                  <>
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    <Link className="nav-link" to="/accounts">Bank Accounts</Link>
                    <Link className="nav-link" to="/transactions">Transactions</Link>
                    <Link className="nav-link" to="/transfers">Transfers</Link>
                    <Link className="nav-link" to="/history">History</Link>
                    <button className="btn btn-danger" onClick={closeSession}>Exit
                    <span>
                      <img src="./exit.png" alt="wallet_icon" style={{width:"16px", height:"px", marginLeft:"5px"}}/>
                    </span>
                    </button>
                  </>
              </div>
            </div>
          </nav>
        </div>
      </div>
                )}
    </>
  );
}

export default Menu;
