import React from "react";
import { Stylesheet } from "../shared/style/Stylesheet";
import Favorite from "./Favorite";
import MyPost from "./MyPost";
import { withRouter } from "react-router-dom";

const AuthorContent = (props) => {
  return (
    <div className="row">
      <div className="col-md-11 m-auto">
        <div className="container-fluid mt-5 mb-5">
          <nav>
            <div className="nav" id="nav-tab" role="tablist">
              <a
                className=""
                id="mypost-tab"
                data-toggle="tab"
                href="#mypost_feed"
                role="tab"
                aria-controls="mypost_feed"
                aria-selected="true"
                style={Stylesheet.tab_nav}
              >
                My Posts
              </a>
              <a
                className="ml-4 active text-capitalize"
                id="favorite_feed-tab"
                data-toggle="tab"
                href="#favorite_feed"
                role="tab"
                aria-controls="favorite_feed"
                aria-selected="false"
                style={Stylesheet.tab_nav}
              >
                {props.match.params.username}'s Posts
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <MyPost />
            <Favorite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AuthorContent);
