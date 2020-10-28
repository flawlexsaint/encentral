import React from "react";
import { NavLink } from "react-router-dom";
import { Stylesheet } from "../../../style/Stylesheet";

import NewPost from "../navbar/icon.svg";
import Settings from "../navbar/settings.svg";
import Logo from "../navbar/eBlog.svg";

const AuthenticatedNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={Stylesheet.navbar}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src={Logo} alt="" className="navbar-brand" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <span className="mr-auto"></span>
          <ul className="navbar-nav">
            <li className="nav-item active ml-3">
              <a href="/" className="nav-link">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ml-3">
              <a href="/editor" className="nav-link">
                <img src={NewPost} alt="" className="mr-1" />
                New Article
              </a>
            </li>
            <li className="nav-item ml-3">
              <a href="/settings" className="nav-link">
                <img src={Settings} alt="" className="mr-1" />
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AuthenticatedNav;
