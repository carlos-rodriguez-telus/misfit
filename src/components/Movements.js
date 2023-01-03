import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";

import routes from "../constants/routes";

import axios from "axios";

function Movements() {
  const userID = "1";

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios.get(routes.ACCOUNT + "/" + userID).then((response) => {
      console.log(response.data.message);
      let array = [...response.data.message];
      setAccounts(
        array.map((item) => {
          console.log(item);
          return (
            <option
              key={item.bank_name + item.account_number}
              value={item.account_number}
            >
              {item.bank_name + " - " + item.account_number}
            </option>
          );
        })
      );
    });
  }, []);

  const incomeCategories = [
    <option value="0">----- Income -----</option>,
    <option value="1">Cheque</option>,
    <option value="2">Transfer</option>,
    <option value="3">Cash</option>,
  ];

  const expenseCategories = [
    <option value="0">----- Expense -----</option>,
    <option value="4">Food</option>,
    <option value="5">Wear</option>,
    <option value="6">Shoes</option>,
    <option value="7">House</option>,
    <option value="8">Car</option>,
  ];

  function addTransaction(values) {
    alert(JSON.stringify(values));
  }

  const initialValues = {
    user_id: 1,
    account_id: 0,
    category: 0,
    amount: 0,
    date: new Date(),
  };

  return (
    <div className="form-wrapper">
      <h2>Add Expense/Income</h2>
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
              Add movement
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Movements;
