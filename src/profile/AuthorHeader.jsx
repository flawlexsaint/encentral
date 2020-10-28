import React from "react";
import { Stylesheet } from "../shared/style/Stylesheet";

import Smiley from "./author/smiley.svg";

const AuthorHeader = () => {
  return (
    <div className="row">
      <div className="col-12" style={Stylesheet.homepage_bg}>
        <div className="container-fluid mt-5 mb-5">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <img src={Smiley} alt="" />
            <p className="mt-3" style={Stylesheet.author_header}>
              abcNews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorHeader;
