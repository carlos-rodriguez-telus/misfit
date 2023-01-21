import { useContext } from "react";
import UserContext from "../providers/UserContext";


function Transfer() {

  const [userID, updateUserId] = useContext(UserContext);

  return (
    <div className="row">
      <img src="./exchange.png" alt="wallet_icon" style={{width:"70px", height:"48px", marginRight:"10px"}}/>
      <h2>Money Transfer</h2>
      {/* Left */}
      <div className="col">
        <form className="form-wrapper">
            {/* Account Select */}
          <div className="form-group">
            <label>Select Account <span className="badge bg-danger">Origin</span></label>
            <select className="form-control" style={{marginTop:"5px"}}>
              <option value="1">BAC</option>
              <option value="2">Banrural</option>
            </select>
          </div>
          {/* Amount */}
          <div className="form-group" style={{ marginTop: "7px" }}>
            <label>Amount to transfer</label>
            <input className="form-control" type="number" />
          </div>          
          <br/>
          <button className="btn btn-info">Transfer Money</button>
        </form>
      </div>
      {/* Right */}
      <div className="col">
        <form className="form-wrapper">
            {/* Target Account */}
          <div className="form-group">
          <label>Select Account <span className="badge bg-success">Target</span></label>
            <select className="form-control" style={{marginTop:"5px"}}>
              <option value="1">BAC</option>
              <option value="2">Banrural</option>
            </select>
          </div>
          <div className="form-group" style={{ marginTop: "7px" }}>
            <label>Select Currency</label>
            <select className="form-control">
              <option value="1">USD -$-</option>
              <option value="2">QTZ -Q-</option>
              <option value="3">EUR -€-</option>
            </select>
          </div>                    
        </form>
      </div>
    </div>
  );
}

export default Transfer;
