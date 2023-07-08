import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authenticate, isAuthenticated, signin } from "../api/userApi";

const Sign = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(email, password).then((data) => {
      if (error) {
        setError(data.err);
      } else {
        setSuccess(true);
        authenticate(data);
      }
    });
  };
  const showerror = () => {
    if (error) {
      return <div class="alert alert-danger">{error}</div>;
    }
  };
  const redirect = () => {
    if (success) {
      if (isAuthenticated().user.role === 0) {
        navigate("/");
      } else {
        navigate("/admin/dashboard");
      }
    }
  };

  return (
    <>
      {showerror()}
      {redirect()}
      <div className="parent-container d-flex align-items-center justify-content-center vh-100">
        <div className="container p-7">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-4">
              <img
                src="https://knowledgemission.kerala.gov.in/img/official-login.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-4">
              <h1>Welcome Back</h1>
              <br />

              <form >
                <div className="mb-3">
                  <label for="inputEmail" class="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    name="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                  <label for="inputPassword" class="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    name="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    name="remember"
                    value="remember"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>

                <font color="red"></font>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Signin
                </button>
                <br />
                <center><Link to="/forgetpassword">Forget Password?</Link></center>
                <br />
                <center><Link to="/register">Creat an account?</Link></center>
              </form>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Sign;
