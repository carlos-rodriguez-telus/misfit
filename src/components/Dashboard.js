import { useContext, useEffect, useState } from "react";

import axios from "axios";

import Graph from "./Graph";
import Movements from "./Movements";
import Transfer from "./Transfer";
import routes from "../constants/routes";

import UserContext from "../providers/UserContext";

function Dashboard() {
  //CSS
  let separator = {
    marginTop: "25px",
    borderTop: "#fc9423 solid 1px",
    paddingTop: "15px",
  };

  const cat = {};
  cat["4"]="Food";
  cat["5"]="Wear";
  cat["6"]="Shoes";
  cat["7"]="House";
  cat["8"]="Car";

  const [userID, updateUserId] = useContext(UserContext);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [barsData, setBarsData] = useState([
    { x: "Food",  y:0},
    { x: "Wear",  y:0},
    { x: "Car",   y:0},
    { x: "Shoes", y:0},
    { x: "House", y:0}
  ]);

  useEffect(()=>{
    getResume();
  },[]);

  async function getResume(){
    let moneyIn = await axios.get(routes.DASHBOARD+`/data/${userID}/${0}`);
    let dataIn = [...moneyIn.data.message];
    let total = 0;
    dataIn.forEach((item)=>{
      let month = new Date(item.date).getMonth() + 1;
      let currentMonth = new Date().getMonth() + 1;
      if(currentMonth == month) total += item.amount;
    });
    await setIncome(total);

    let moneyOut = await axios.get(routes.DASHBOARD+`/data/${userID}/${1}`);
    let dataOut = [...moneyOut.data.message];
    let total2 = 0;
    dataOut.forEach((item)=>{
      let month = new Date(item.date).getMonth() + 1;
      let currentMonth = new Date().getMonth() + 1;
      if(currentMonth == month) total2 += item.amount;
    });
    await setOutcome(total2);

    let graphData = await axios.get(routes.DASHBOARD+`/graph/${userID}`);
    let plainData = graphData.data.message;
    let temp = [];
    plainData.forEach((item)=>{
      temp.push({x:cat[item.category], y:item.total});
    });
    if(temp.length>0) await setBarsData(temp);
  }

  return (
    <div className="form-wrapper">
      <h2>Your Finances!</h2>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Expenses by Category</h5>
              <Graph data={barsData} />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">This Month Income</h5>
              <h3>
                <font color="#31de5f">+ $.{income}</font>
              </h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">This Month Expenses</h5>
              <h3>
                <font color="#e82a60">- $.{outcome}</font>
              </h3>
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
