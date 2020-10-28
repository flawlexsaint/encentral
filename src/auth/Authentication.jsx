import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { Store } from "../store/store";

export const Authentication = createContext();

const AuthenticationContext = (props) => {
  const { render, setRender } = useContext(Store);
  const user = JSON.parse(localStorage.getItem("user"));
  const [loginStatusCode, setLoginStatusCode] = useState();
  const [regStatusCode, setRegStatusCode] = useState();
  const [loggedOut, setLoggedOut] = useState(false);
  const [navAuth, setNavAuth] = useState(user);
  const [navTrigger, setNavTrigger] = useState(false);

  useEffect(() => {
    setNavAuth(JSON.parse(localStorage.getItem("user")));
  }, [navTrigger]);

  const login = (data) => {
    axios
      .post("/users/login/", data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setLoginStatusCode(res.status);
        setNavTrigger(!navTrigger);
        setRender(!render)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const register = (data) => {
    axios
      .post("/users", data)
      .then((res) => {
        setRegStatusCode(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
    setRender(!render)
  };

  const logOut = () => {
    localStorage.removeItem("user");
    setLoggedOut(true);
    setNavTrigger(!navTrigger);
    setRender(!render);
  };

  const updateUser = (data) => {
    axios
      .put("user", data, {
        headers: {
          authorization: user.token,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setRender(!render);
  };

  return (
    <Authentication.Provider
      value={{
        user,
        login,
        loginStatusCode,
        register,
        regStatusCode,
        loggedOut,
        logOut,
        navAuth,
        updateUser,
      }}
    >
      {props.children}
    </Authentication.Provider>
  );
};

export default AuthenticationContext;
