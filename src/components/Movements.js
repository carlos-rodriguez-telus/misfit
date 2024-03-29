import { Formik, Field, Form } from "formik";
import { useState, useEffect, useContext } from "react";

import UserContext from "../providers/UserContext";

import routes from "../constants/routes";

import axios from "axios";
import { toast } from "react-toastify";

function Movements() {
  const [userID, updateUserId] = useContext(UserContext);

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios.get(routes.ACCOUNT + "/" + userID).then((response) => {
      let array = [...response.data.message];
      array.unshift({
        bank_name: "- - Select Account",
        account_number: "",
        account_id: "",
        currency: "",
      });
      setAccounts(
        array.map((item) => {
          return (
            <option
              key={item.bank_name + item.account_number}
              value={item.account_id}
            >
              {item.bank_name + " - " + item.account_number + " - " + item.currency}
            </option>
          );
        })
      );
    });
  }, []);

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
    </option>,
  ];

  function addTransaction(values) {
    let data = { ...values };

    if (data.account_id == "0") {
      toast.error("Please select a valid account!");
      return;
    }

    if (data.category == "0") {
      toast.error("Please select a valid category!");
      return;
    }

    if (data.category >= 1 && data.category <= 3) {
      data["transaction_type"] = 0; //Income
    } else {
      data["transaction_type"] = 1; //Expense
    }

    axios
      .post(routes.TRANSACTION, { data })
      .then((response) => {
        if (response.data.status == "OK") {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.error);
        }
      })
      .catch((error) => {
        toast.error("Something went wrong, please check transaction information");
      });
  }

  const initialValues = {
    transaction_user_id: userID,
    account_id: 0,
    category: 0,
    amount: 0,
    date: new Date().toISOString().slice(0, 10),
  };

  return (
    <div className="form-wrapper">
      <img src="./pay.png" alt="wallet_icon" style={{width:"48px", height:"48px", marginRight:"10px"}}/>
      <h2>Add Expense/Income Transaction</h2>
      <Formik initialValues={initialValues} onSubmit={addTransaction}>
        <Form>
          <div className="form-group">
            <label>Bank Account:</label>
            <Field
              id="account_id"
              name="account_id"
              className="form-control"
              as="select"
            >
              {accounts}
            </Field>
          </div>
          <div className="form-group">
            <label>Category:</label>
            <Field
              id="category"
              name="category"
              className="form-control"
              as="select"
            >
              {expenseCategories}
              {incomeCategories}
            </Field>
          </div>
          <div className="form-group">
            <label>Amount</label>
            <Field
              id="amount"
              name="amount"
              className="form-control"
              type="number"
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <Field id="date" name="date" className="form-control" type="date" />
          </div>
          <div className="form-group">
            <br />
            <button className="btn btn-success" type="submit">
              Add transaction
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Movements;
