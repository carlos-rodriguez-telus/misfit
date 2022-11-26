import { Formik, Field, Form } from "formik";

function Login() {
  function makeLogin(values) {
    alert(JSON.stringify(values));
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="form-wrapper">
            <h2>Welcome!</h2>
            <Formik
              initialValues={{ user: "", password: "" }}
              onSubmit={makeLogin}
            >
              <Form>
                <div className="form-group">
                  <label>Email:</label>
                  <Field
                    id="user"
                    name="user"
                    className="form-control"
                    type="text"
                  />
                </div>
                <br />
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
                    Enter
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <div className="row text-center">
      <a href="#" class="link-info">Don't have an account? Register here</a>
      </div>
    </>
  );
}

export default Login;
