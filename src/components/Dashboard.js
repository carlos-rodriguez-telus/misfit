import { useContext } from "react";

import Graph from "./Graph";
import Movements from "./Movements";
import Transfer from "./Transfer";

import UserContext from "../providers/UserContext";

function Dashboard() {
  const [userID, updateUserId] = useContext(UserContext);

  let resume = [
    {x: "Food", y: 10, color:1},
    {x: "Wear", y: 23, color:2},
    {x: "Car", y: 63, color:3},
    {x: "Shoes", y: 58, color:4},
    {x: "House", y: 78, color:5}
  ];

  //CSS
  let separator = {
    marginTop: "25px",
    borderTop: "#fc9423 solid 1px",
    paddingTop: "15px",
  };

  return (
    <div className="form-wrapper">
      <h2>Your Finances!</h2>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Expenses by Category</h5>
                <Graph data={resume}/>
              </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">This Month Income</h5>
              <h2><font color="#31de5f">+ $.1000</font></h2>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">This Month Expenses</h5>
              <h2><font color="#e82a60">- $.1000</font></h2>
            </div>
          </div>
        </div>        
      </div>

      <div className="row" style={separator}>
        <Movements />
      </div>

      <div className="row" style={separator}>
        <Transfer />
      </div>
    </div>
  );
}

export default Dashboard;
