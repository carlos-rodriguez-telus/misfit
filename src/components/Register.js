import { Formik, Field, Form } from "formik";

function Register(){
    function makeLogin(values){
        alert(JSON.stringify(values));
    }

    return (
        <div className="form-wrapper">
          <h2>Registration Form</h2>
          <Formik
            initialValues={{ name: "", lastname: "", address:"", phone:"", email:"", password:"" }}
            onSubmit={makeLogin}
          >
            <Form>
              <div className="form-group">
                <label>Name:</label>
                <Field
                  id="name"
                  name="name"
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Lastname:</label>
                <Field
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <Field
                  id="address"
                  name="address"
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <Field
                  id="phone"
                  name="phone"
                  className="form-control"
                  type="number"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <Field
                  id="email"
                  name="email"
                  className="form-control"
                  type="email"
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <Field
                  id="password"
                  name="password"
                  className="form-control"
                  type="password"
                />
              </div>
              <div className="form-group">
                <br />
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </Form>
          </Formik>
        </div>
    );
}

export default Register;