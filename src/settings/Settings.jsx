import React, { useContext, useState, useEffect } from "react";
import { Stylesheet } from "../shared/style/Stylesheet";
import { Authentication } from "../auth/Authentication";
import { withRouter } from "react-router-dom";
import LogOutSkeleton from "./LogoutSkeleton";

const Settings = (props) => {
  const { updateUser } = useContext(Authentication);
  const { loggedOut, logOut } = useContext(Authentication);
  const [avatar, setAvatar] = useState("");
  const [admin, setAdmin] = useState("admin");
  const [bio, setBio] = useState("bio");
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
  const [token, setToken] = useState("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user: {
        bio,
        email,
        token: token.token,
        username: admin,
        image: avatar,
        password,
      },
    };
    console.log(data);
    updateUser(data);
  };

  const auth = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    auth && setEmail(auth.email);
    auth && setBio(auth.bio);
    auth && setAdmin(auth.username);
    auth && setAvatar(auth.image);
    auth && setToken(auth.token);
  }, []);

  return loggedOut === true ? (
    <>
      <div className="row">
        <div className="col-md-10 mx-auto mt-5 mb-5  p-4">
          <div className="alert alert-light mb-3" role="alert">
            You are currently logged out
          </div>
          <LogOutSkeleton />
        </div>
      </div>
      );
      {setTimeout(() => {
        props.history.push("/#");
      }, 3000)}
    </>
  ) : (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5 mb-5  p-4">
        <h1 className="mb-3" style={Stylesheet.settings_header}>
          Your Settings
        </h1>
        <div className="">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-4 p-2"
              placeholder={avatar}
              onChange={(e) => setAvatar(e.target.value && e.target.value)}
              style={Stylesheet.text_input}
            />
            <input
              type="text"
              className="form-control mb-4"
              placeholder={admin}
              onChange={(e) => setAdmin(e.target.value && e.target.value)}
              style={Stylesheet.text_input}
            />
            <textarea
              type="text"
              className="form-control mb-4"
              placeholder={bio}
              onChange={(e) => setBio(e.target.value && e.target.value)}
              style={Stylesheet.settings_bio}
            />
            <textarea
              type="email"
              className="form-control mb-4"
              placeholder="must be different from the existing email"
              onChange={(e) => setEmail(e.target.value && e.target.value)}
              style={Stylesheet.text_input}
              required
            />
            <input
              type="text"
              className="form-control mb-4"
              name="form-control"
              placeholder={password}
              onChange={(e) => setPassword(e.target.value && e.target.value)}
              style={Stylesheet.text_input}
              required
            />
            <div className=" d-flex justify-content-end align-items-center mb-5">
              <button className="btn" style={Stylesheet.custom_button}>
                Update Settings
              </button>
            </div>
          </form>
        </div>
        <div
          className=" d-flex align-items-center pt-4"
          style={Stylesheet.settings_border}
        >
          <button
            className="btn"
            style={Stylesheet.logout_button}
            onClick={() => logOut()}
          >
            Or click here to logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Settings);
