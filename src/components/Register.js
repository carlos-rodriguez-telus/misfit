import { Formik, Field, Form } from "formik";
import axios from 'axios';
import routes from "../constants/routes"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register(){

    function makeLogin(values){
      axios.post(routes.USER, {values})
      .then(
        (response)=>{
          if(response.data.status=="OK"){
            console.log(response.data.message);
            toast.success(response.data.message);
          }else{
            console.error(response.data.message);
            toast.error(response.data.message);
          }
        }
      );
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
        <ToastContainer /> 
        </div>
    );
}

export default Register;