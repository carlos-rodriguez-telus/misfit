import { Formik, Field, Form } from "formik";
import { useContext, useRef } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import routes from "../constants/routes";

import { UserContext } from "../index";

function BankAccount(props) {

  const ref = useRef(null);

  const value = useContext(UserContext);

  function addAcount(values) {
    alert("usuario: " + value);
    axios.post(routes.ACCOUNT, { values }).then((response) => {
      if (response.data.status == "OK") {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }
    });
  }

  function deleteAccount(){
    console.log(ref.current.values);

    let userID = ref.current.values.account_user_id;
    let accountID = ref.current.values.account_number;
    let action = window.confirm(`Are you sure to delete account ${ref.current.values.account_number}?`);
    
    if(action){
      axios.delete(routes.ACCOUNT+`/${userID}/${accountID}`)
      .then((response)=>{
        if(response.data.status=="OK"){
          toast.success("Account Deleted");
        }else{
          toast.error(response.data.error);
        }
      });
    }else{
      toast.error("Action canceled");
    }
  }

  return (
    <div className="form-wrapper">
      <h2>Add bank account</h2>
      <Formik
        innerRef={ref}
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
            <label> Balance:</label>
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
              onClick={()=>{deleteAccount(props)}}
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
