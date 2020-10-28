import React, { useContext, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Stylesheet } from "../../shared/style/Stylesheet";
import { Authentication } from "../Authentication";

const SignUp = () => {
  const { register, regStatusCode } = useContext(Authentication);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const createUser = (e) => {
    e.preventDefault();

    const data = {
      user: {
        email,
        password,
        username,
      },
    };
    register(data);
    setEmail("");
    setPassword("");
    setUsername("");
  };
  return regStatusCode === 200 ? (
    <Redirect to="/login" />
  ) : (
    <>
      <div className="d-flex align-items-center flex-column mt-5">
        <h1 style={Stylesheet.settings_header}>Sign up</h1>
        <NavLink to="/login" style={Stylesheet.link_text}>
          Have an account?
        </NavLink>
      </div>
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto p-4">
          <form onSubmit={createUser}>
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={Stylesheet.text_input}
            />

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
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
