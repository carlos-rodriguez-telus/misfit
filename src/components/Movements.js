import { Formik, Field, Form } from "formik";
import { useRef } from "react";

function Movements(){

    const ref = useRef(null);

    const availableAccounts = [                    
        <option value="banrural">Banrural</option>,
        <option value="bac">Bac</option>
    ];

    const incomeCategories = [
        <option value="">----- Income -----</option>,
    ];

    const expenseCategories = [
        <option value="">----- Expenses -----</option>,
    ];

    function addTransaction(values){
        alert(JSON.stringify(values));
    }

    const initialValues = { bankAccount:"", category:[], transaction: "expense", amount: 0 }

    return (
        <div className="form-wrapper">
          <h2>Add Expense/Income</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={addTransaction}
            innerRef={ref}
          >
            <Form>
            <div className="form-group">
                <label>Bank Account:</label>
                <Field
                  id="bankAccount"
                  name="bankAccount"
                  className="form-control"
                  as="select"
                >
                    {availableAccounts}
                </Field>
              </div>
              <div className="form-group">
                <label>Transaction Type:</label>
                <Field
                  id="transaction"
                  name="transaction"
                  className="form-control"
                  as="select"
                >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
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
                <br />
                <button className="btn btn-success" type="submit">Add movement</button>
              </div>
            </Form>
          </Formik>
        </div>
    );
}

export default Movements;