import { Formik, Field, Form } from "formik";

function BankAccount(){
    function addAcount(values){
        alert(JSON.stringify(values));
    }

    return (
        <div className="form-wrapper">
          <h2>Add bank account</h2>
          <Formik
            initialValues={{ bankName: "", accountNumber: 0, initialBalance:0 }}
            onSubmit={addAcount}
          >
            <Form>
              <div className="form-group">
                <label>Bank Name:</label>
                <Field
                  id="bankName"
                  name="bankName"
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Account Number:</label>
                <Field
                  id="accountNumber"
                  name="accountNumber"
                  className="form-control"
                  type="number"
                />
              </div>
              <div className="form-group">
                <label>Initial Balance:</label>
                <Field
                  id="initialBalance"
                  name="initialBalance"
                  className="form-control"
                  type="number"
                />
              </div>
              <div className="form-group">
                <br />
                <button className="btn btn-primary" style={{marginRight:"5px"}} type="submit">Add</button>
                <button className="btn btn-danger" style={{marginRight:"5px"}} type="submit">Delete Account</button>
              </div>
            </Form>
          </Formik>
        </div>
    );
}

export default BankAccount;