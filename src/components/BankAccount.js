import { Formik, Field, Form } from "formik";
import { useContext, useState, useEffect, useRef } from "react";

import UserContext from "../providers/UserContext";

import { toast } from "react-toastify";

import axios from "axios";
import routes from "../constants/routes";

function BankAccount(props) {
  const [userID, updateUserId] = useContext(UserContext);
  const [userAccounts, setUserAccounts] = useState([]);
  const [salva, setSalva] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    axios
      .get(routes.ACCOUNT + `/${userID}`)
      .then((response) => {
        setUserAccounts(response.data.message);
      })
      .catch((error) => {
        toast.error("Error while getting user accounts");
      });
  }, [salva]);

  function addAcount(values) {
    axios.post(routes.ACCOUNT, { values }).then((response) => {
      if (response.data.status == "OK") {
        toast.success(response.data.message);
        Promise.resolve().then(() => setSalva(salva + 1));
      } else {
        toast.error(response.data.error);
      }
    });
  }

  function deleteAccount() {
    let accountID = ref.current.values.account_number;
    let action = window.confirm(
      `Are you sure to delete account ${ref.current.values.account_number}?`
    );

    if (action) {
      axios
        .delete(routes.ACCOUNT + `/${userID}/${accountID}`)
        .then((response) => {
          if (response.data.status == "OK") {
            toast.success("Account Deleted");
            Promise.resolve().then(() => setSalva(salva - 1));
          } else {
            toast.error(response.data.error);
          }
        });
    } else {
      toast.error("Action canceled");
    }
  }

  return (
    <div className="form-wrapper">
      <img
        src="./account.png"
        alt="wallet_icon"
        style={{ width: "48px", height: "48px", marginRight: "10px" }}
      />
      <h2>Bank Account Management</h2>
      <Formik
        innerRef={ref}
        initialValues={{
          account_user_id: userID,
          bank_name: "",
          account_number: 0,
          balance: 0,
          currency: "QTZ",
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
            <label>
              Account Number:{" "}
              <span style={{ fontSize: "18px", color: "red" }}>*</span>
            </label>
            <Field
              id="account_number"
              name="account_number"
              className="form-control"
              type="number"
            />
          </div>
          <div className="form-group">
            <label> Balance:</label>
            <Field
              id="balance"
              name="balance"
              className="form-control"
              type="number"
            />
          </div>
          <div className="form-group">
            <label> Currency:</label>
            <Field
              id="currency"
              name="currency"
              className="form-control"
              as="select"
            >
              <option key="QTZ" value="QTZ">
                {" "}
                QTZ{" "}
              </option>
              <option key="USD" value="USD">
                {" "}
                USD{" "}
              </option>
              <option key="EUR" value="EUR">
                {" "}
                EUR{" "}
              </option>
            </Field>
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
              className="btn btn-success"
              style={{ marginRight: "5px" }}
              type="reset"
            >
              Clear Fields
            </button>
            <button
              className="btn btn-danger"
              style={{ marginRight: "5px" }}
              type="button"
              onClick={() => {
                deleteAccount(props);
              }}
            >
              Delete Account
            </button>
          </div>
        </Form>
      </Formik>
      {/* Account Table */}
      <div style={{ marginTop: "20px" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Account#</th>
              <th scope="col">Bank</th>
              <th scope="col">Balance</th>
              <th scope="col">Currency</th>
            </tr>
          </thead>
          <tbody>
            {userAccounts.map((item) => {
              return (
                <tr key={item.account_number}>
                  <th scope="row">{item.account_number}</th>
                  <td>{item.bank_name}</td>
                  <td>{item.balance}</td>
                  <td>{item.currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <span style={{ fontSize: "18px", color: "red" }}>*</span>{" "}
      <small>
        To remove account please type number and click on "Delete Account"
      </small>
      {/* Account Table End */}
    </div>
  );
}

export default BankAccount;
