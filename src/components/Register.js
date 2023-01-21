import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom"
import axios from "axios";
import routes from "../constants/routes";

import { toast } from "react-toastify";

function Register() {

  function makeLogin(values) {
    axios.post(routes.USER, { values }).then((response) => {
      if (response.data.status == "OK") {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }
    });
  }

  return (
    <div className="form-wrapper">
      <img src="./user.png" alt="wallet_icon" style={{width:"48px", height:"48px", marginRight:"10px"}}/>
      <h2>Registration Form</h2>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          address: "",
          phone: "",
          email: "",
          password: "",
        }}
        onSubmit={makeLogin}
      >
        <Form>
          <div className="form-group">
            <label>Name:</label>
            <Field id="name" name="name" className="form-control" type="text" />
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
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
            <button
              className="btn btn-success"
              style={{ marginLeft: "5px" }}
              type="reset"
            >
              Clear Fields
            </button>
          </div>
        </Form>
      </Formik>      
      <div className="row text-center" style={{ marginTop: "50px" }}>
        <Link to = "/" className="link-info">
          Have an account? Login here
        </Link>
      </div>
    </div>
    
  );
}

export default Register;
