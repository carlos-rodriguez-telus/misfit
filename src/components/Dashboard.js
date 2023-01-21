import { useContext } from "react";

import Movements from "./Movements";
import Transfer from "./Transfer";

import UserContext from "../providers/UserContext";

function Dashboard() {
  const [userID, updateUserId] = useContext(UserContext);

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
              <h5 className="card-title">Movements</h5>
              This is some text within a card body.
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Expenses</h5>
              This is some text within a card body.
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
