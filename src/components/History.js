import { useState, useEffect, useContext } from "react";
import axios from "axios";
import routes from "../constants/routes";

import UserContext from "../providers/UserContext";

function History() {
  const [userID, updateUserId] = useContext(UserContext);
  const [accounts, setAccounts] = useState([]);
  const [filter, setFilter] = useState("date");
  const [value, setValue] = useState(new Date().toISOString().slice(0, 10));
  const [movements, setMovements] = useState([]);

  const availableFilters = [
    <option key="date" value="date">
      Date
    </option>,
    <option key="category" value="category">
      Category
    </option>,
    <option key="account" value="account">
      Bank Account
    </option>,
  ];

  const incomeCategories = [
    <option key="C0" value="0">
      ----- Income -----
    </option>,
    <option key="C1" value="1">
      Cheque
    </option>,
    <option key="C2" value="2">
      Transfer
    </option>,
    <option key="C3" value="3">
      Cash
    </option>
  ];

  const expenseCategories = [
    <option key="C4" value="0">
      ----- Expense -----
    </option>,
    <option key="C5" value="4">
      Food
    </option>,
    <option key="C6" value="5">
      Wear
    </option>,
    <option key="C7" value="6">
      Shoes
    </option>,
    <option key="C8" value="7">
      House
    </option>,
    <option key="C9" value="8">
      Car
    </option>
  ];

  const cat = {};
  cat["1"]="Cheque";
  cat["2"]="Transfer";
  cat["3"]="Cash";
  cat["4"]="Food";
  cat["5"]="Wear";
  cat["6"]="Shoes";
  cat["7"]="House";
  cat["8"]="Car";

  useEffect(() => {
    axios.get(routes.ACCOUNT + "/" + 1).then((response) => {
      let array = [...response.data.message];
      array.unshift({
        bank_name: "",
        account_number: "Select Account -",
        account_id: "",
      });
      setAccounts(
        array.map((item) => {
          return (
            <option
              key={item.bank_name + item.account_number}
              value={item.account_id}
            >
              {item.bank_name + " - " + item.account_number}
            </option>
          );
        })
      );
    });
  }, []);

  function setCategory(event) {
    let filterCategory = event.target.value;
    setFilter(filterCategory);
    if (filterCategory === "date") {
      setValue(new Date().toISOString().slice(0, 10));
    } else {
      setValue(0);
    }
  }

  function setFilterValue(event) {
    setValue(event.target.value);
  }

  function callApi() {
    axios.get(routes.FILTER + `/${userID}/${filter}/${value}`).then((response) => {
      setMovements([...response.data.message]);
    });
  }

  return (
    <div>
      {/* Filter START */}
      <div className="form-wrapper">
      <img src="./history.png" alt="wallet_icon" style={{width:"48px", height:"48px", marginRight:"10px"}}/>
        <h2>Transaction History</h2>
        <div className="form-group">
          <label>Filter Type:</label>
          <select className="form-control" onClick={setCategory}>
            {availableFilters}
          </select>
        </div>
        <form style={{ marginTop: "10px" }}>
          <div className="form-group">
            {filter == "date" && (
              <>
                <label>Select Date:</label> <br />
                <input
                  className="form-control"
                  type={"date"}
                  onChange={setFilterValue}
                  defaultValue={new Date().toISOString().slice(0, 10)}
                />
              </>
            )}

            {filter == "category" && (
              <>
                <label>Select Category:</label> <br />
                <select className="form-control" onClick={setFilterValue}>
                  {expenseCategories}
                  {incomeCategories}
                </select>
              </>
            )}

            {filter == "account" && (
              <>
                <label>Select Account:</label> <br />
                <select className="form-control" onClick={setFilterValue}>
                  {accounts}
                </select>
              </>
            )}
          </div>
        </form>
        <div className="form-group">
          <br />
          <button className="btn btn-info" onClick={callApi}>
            Search transaction 
          </button>
        </div>
      </div>
      {/* Filter END */}
      {/* Table START */}
      <div style={{ marginTop: "20px" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Ref#</th>
              <th scope="col">Date</th>
              <th scope="col">Bank</th>
              <th scope="col">Type</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {movements.map((item) => {
              return (
                <tr key={item.transaction_id}>
                  <th scope="row">{item.transaction_id}</th>
                  <td>{item.date}</td>
                  <td>{item.Account.bank_name}</td>
                  <td>{item.transaction_type==0?"Income":"Expense"}</td>
                  <td>{cat[item.category]}</td>
                  <td>{item.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Table END */}
    </div>
  );
}

export default History;
