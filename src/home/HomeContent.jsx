import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Feeds from "./YourFeeds";
import GlobalFeed from "./GlobalFeeds";
import PopularTags from "./PopularTags";
import { Authentication } from "../auth/Authentication";

const HomeContent = (props) => {
  const { user } = useContext(Authentication);
  return (
    <div className="row">
      <div className="col-md-11 m-auto">
        <div className="container-fluid mt-5 mb-5">
          <div className="row">
            <div className="col-md-9 p-4">
              <nav>
                <div className="nav" id="nav-tab" role="tablist">
                  <a
                    className=""
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#your_feed"
                    role="tab"
                    aria-controls="your_feed"
                    aria-selected="true"
                    style={style.nav}
                    onClick={() => {
                      !user && props.history.push("/login");
                    }}
                  >
                    Your Feed
                  </a>

                  <a
                    className="ml-4 active"
                    id="global_feed-tab"
                    data-toggle="tab"
                    href="#global_feed"
                    role="tab"
                    aria-controls="global_feed"
                    aria-selected="false"
                    style={style.nav}
                  >
                    Global Feed
                  </a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <Feeds />
                <GlobalFeed />
              </div>
            </div>
            <div className="col-md-3 p-4">
              <PopularTags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(HomeContent);

const style = {
  nav: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "21px",
    color: "#A8A5A5",
  },
};
