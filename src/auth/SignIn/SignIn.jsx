import React, { useState, useContext } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Stylesheet } from "../../shared/style/Stylesheet";
import { Store } from "../../store/store";
import { Authentication } from "../Authentication";
import SignInSkeleton from "./SignInSkeleton";

const SignIn = (props) => {
  const { login, loginStatusCode } = useContext(Authentication);
  const { render, setRender } = useContext(Store);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    user: {
      email: email,
      password: password,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
    setRender(!render);
    setEmail("");
    setPassword("");
  };

  return loginStatusCode === 200 ? (
    <>
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto p-4 mt-5 mb-3">
          <div className="alert alert-light mb-4" role="alert" height="30px">
            You are currently logged in
          </div>
          <SignInSkeleton />
        </div>
      </div>
      {setTimeout(() => {
        props.history.push("/");
      }, 2000)}
    </>
  ) : (
    <>
      <div className="d-flex align-items-center flex-column mt-5">
        <h1 style={Stylesheet.settings_header}>Sign in</h1>
        <NavLink to="/register" style={Stylesheet.link_text}>
          Need an account?
        </NavLink>
      </div>
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto p-4">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control mb-4"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={Stylesheet.text_input}
            />

            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={Stylesheet.text_input}
            />
            <div className=" d-flex justify-content-end mt-4 align-items-center mb-5">
              <button
                className="btn pl-4 pr-4"
                style={Stylesheet.custom_button}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(SignIn);
