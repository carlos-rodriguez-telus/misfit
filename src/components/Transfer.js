import { useContext, useState, useEffect } from "react";
import UserContext from "../providers/UserContext";

import { toast } from "react-toastify";

import axios from "axios";
import routes from "../constants/routes";

import exchange from "../constants/exchange";

function Transfer() {
  const [originCurrency, setOriginCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");

  const [userID, updateUserId] = useContext(UserContext);
  const [userAccounts, setUserAccounts] = useState([]);
  const [origin, setOrigin] = useState(0);
  const [target, setTarget] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    axios
      .get(routes.ACCOUNT + `/${userID}`)
      .then((response) => {
        setUserAccounts(response.data.message);
      })
      .catch((error) => {
        toast.error("Error while getting user accounts");
      });
  }, []);

  function inOrigin(event) {
    let info = String(event.target.value);
    setOrigin(info.split("-")[0]);
    setOriginCurrency(info.split("-")[1]);
  }

  function inTarget(event) {
    let info = String(event.target.value);
    setTarget(info.split("-")[0]);
    setTargetCurrency(info.split("-")[1]);
  }

  function inAmount(event) {
    setAmount(event.target.value);
  }

  async function makeTransfer() {
    let data = {
      transaction_user_id: userID,
      account_id: origin,
      category: 2,
      transaction_type: 1,
      amount: amount,
      date: new Date().toISOString().slice(0, 10),
    };

    await axios
      .post(routes.TRANSACTION, { data })
      .then((response) => {
        if (response.data.status == "OK") {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.error);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong, please check transfer information");
      });

    let factor = exchange[originCurrency][targetCurrency];
    data = {
      transaction_user_id: userID,
      account_id: target,
      category: 2,
      transaction_type: 0,
      amount: amount * factor,
      date: new Date().toISOString().slice(0, 10),
    };

    await axios
      .post(routes.TRANSACTION, { data })
      .then((response) => {
        if (response.data.status == "OK") {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.error);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong, please check transfer information");
      });
  }

  return (
    <>
      <div className="row">
        <img
          src="./exchange.png"
          alt="wallet_icon"
          style={{ width: "70px", height: "48px", marginRight: "10px" }}
        />
        <h2>Money Transfer</h2>
        {/* Left */}
        <div className="col">
          <form className="form-wrapper">
            {/* Account Select */}
            <div className="form-group">
              <label>
                Select Account <span className="badge bg-danger">Origin</span>
              </label>
              <select
                className="form-control"
                style={{ marginTop: "5px" }}
                onChange={inOrigin}
              >
                {userAccounts.map((item) => {
                  return (
                    <option
                      key={item.account_number}
                      value={item.account_id + "-" + item.currency}
                    >
                      {item.bank_name} - {item.account_number} - {item.currency}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* Amount */}
            <div className="form-group" style={{ marginTop: "7px" }}>
              <label>Amount to transfer</label>
              <input
                className="form-control"
                type="number"
                onChange={inAmount}
              />
            </div>
            <br />
          </form>
        </div>
        {/* Right */}
        <div className="col">
          <form className="form-wrapper">
            {/* Target Account */}
            <div className="form-group">
              <label>
                Select Account <span className="badge bg-success">Target</span>
              </label>
              <select
                className="form-control"
                style={{ marginTop: "5px" }}
                onChange={inTarget}
              >
                {userAccounts.map((item) => {
                  return (
                    <option
                      key={item.account_number}
                      value={item.account_id + "-" + item.currency}
                    >
                      {item.bank_name} - {item.account_number} - {item.currency}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-info"
            onClick={makeTransfer}
          >
            Transfer Money
          </button>
        </div>
      </div>
    </>
  );
}

export default Transfer;
