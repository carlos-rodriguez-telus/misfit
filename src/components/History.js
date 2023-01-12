import { useState, useEffect } from "react";
import axios from "axios";
import routes from "../constants/routes";

function History() {

  const [accounts, setAccounts] = useState([]);

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


  const [filter, setFilter] = useState("date");
  const [value, setValue] = useState("");

  const availableFilters = [
    <option key="date" value="date">Date</option>,
    <option key="category" value="category">Category</option>,
    <option key="account" value="account">Bank Account</option>,
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
    </option>,
  ];

  const expenseCategories = [
    <option key="C0" value="0">
      ----- Expense -----
    </option>,
    <option key="C4" value="4">
      Food
    </option>,
    <option key="C5" value="5">
      Wear
    </option>,
    <option key="C6" value="6">
      Shoes
    </option>,
    <option key="C7" value="7">
      House
    </option>,
    <option key="C8" value="8">
      Car
    </option>,
  ];

  function setCategory(event){
    setFilter(event.target.value);
  }

  function setFilterValue(event){
    setValue(event.target.value);
  }

  function callApi(){
    alert(routes.FILTER+`/1/${filter}/${value}`);    
    axios.get(routes.FILTER+`/1/${filter}/${value}`)
    .then((response)=>{
      console.log(response);
    });
  }

  return (
    <div>
      {/* Filter START */}
      <div className="form-wrapper">
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
                <input className="form-control" type={"date"} onChange={setFilterValue} />
              </>
            )}

            {filter == "category" && (
              <>
                <label>Select Category:</label> <br/>
                <select className="form-control" onClick={setFilterValue}>
                  {expenseCategories}
                  {incomeCategories}
                </select>
              </>
            )}

            {filter == "account" &&
              <>
                <label>Select Account:</label> <br/>
                <select className="form-control" onClick={setFilterValue}>
                  {accounts}
                </select>
              </>
            }

          </div>
        </form>
        <div className="form-group">
            <br />
            <button className="btn btn-info" onClick={callApi}>Search</button>
          </div>
      </div>
      {/* Filter END */}
      {/* Table START */}
      <div style={{ marginTop: "20px" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Bank</th>
              <th scope="col">Type</th>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>2022/11/06</td>
              <td>BAC</td>
              <td>expense</td>
              <td>house</td>
              <td>100</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>2022/11/08</td>
              <td>BR</td>
              <td>income</td>
              <td>cash</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Table END */}
    </div>
  );
}

export default History;
