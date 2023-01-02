import { Formik, Field, Form } from "formik";
import { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import routes from "../constants/routes";

import { UserContext } from "../index";

function BankAccount(props) {

  const value = useContext(UserContext);

  function addAcount(values) {
    alert("usuario: " + value);
    axios.post(routes.ACCOUNT, { values }).then((response) => {
      if (response.data.status == "OK") {
        console.log(response.data.message);
        toast.success(response.data.message);
      } else {
        console.error(response.data.message);
        toast.error(response.data.message);
      }
    });
  }

  return (
    <div className="form-wrapper">
      <h2>Add bank account</h2>
      <Formik
        initialValues={{
          account_user_id: "1",
          bank_name: "",
          account_number: 0,
          balance: 0,
        }}
        onSubmit={addAcount}
      >
        <Form>
          <div className="form-group">
            <label>Bank Name:</label>
            <Field
              id="bank_name"
              name="bank_name"
              className="form-control"
              type="text"
            />
          </div>
          <div className="form-group">
            <label>Account Number:</label>
            <Field
              id="account_number"
              name="account_number"
              className="form-control"
              type="number"
            />
          </div>
          <div className="form-group">
            <label>Initial Balance:</label>
            <Field
              id="balance"
              name="balance"
              className="form-control"
              type="number"
            />
          </div>
          <div className="form-group">
            <br />
            <button
              className="btn btn-primary"
              style={{ marginRight: "5px" }}
              type="submit"
            >
              Add
            </button>
            <button
              className="btn btn-danger"
              style={{ marginRight: "5px" }}
              type="submit"
            >
              Delete Account
            </button>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default BankAccount;
