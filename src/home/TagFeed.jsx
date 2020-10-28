import React, { useState, useContext } from "react";
import { Store } from "../store/store";

import Smiley from "../article/article/smiley.svg";
import Dark_Heart from "../article/article/dark-heart.svg";

const TagFeed = () => {
  const { articles } = useContext(Store);
  const [auth, setAuth] = useState(true);
  const items = articles.map((item) => {
    return (
      <div key={item.slug}>
        <div
          className="d-flex align-items-center justify-content-between mt-2 pt-3"
          style={style.border}
        >
          <div className="d-flex align-items-center">
            <img src={Smiley} alt="" />
            <div className="ml-3 d-flex flex-column">
              {/* {item.author.map((author) => {
                return (
                  <p
                    key={item.slug}
                    className="m-0 article_text_color"
                    style={style.admin_text}
                  >
                    {author.username}
                  </p>
                );
              })} */}

              <p className="m-0" style={style.date_text}>
                April 1, 2020
              </p>
            </div>
          </div>
          <div
            className="d-flex align-items-center article_text_color_border ml-4 p-2"
            style={style.favorite.border}
          >
            <img src={Dark_Heart} alt="" />
            <div className="ml-2">
              <p className="m-0 article_text_color" style={style.favorite}>
                {item.favoritesCount}
              </p>
            </div>
          </div>
        </div>
        <div className="row  mt-5 mb-5">
          <div className="col-md-8">
            <h1 style={style.feed_header}>{item.title}</h1>
            <p style={style.feed_header.content}>{item.body}</p>
          </div>
          <div className="col-md-4 d-flex align-items-end justify-content-end">
            <div className="d-flex align-items-end justify-content-end">
              <button className="btn" style={style.tag_button}>
                Virus
              </button>
              <button className="btn ml-2" style={style.tag_button}>
                COVID 19
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div
      className="tab-pane fade active"
      id="tag_feed"
      role="tabpanel"
      aria-labelledby="tag_feed-tab"
    >
      {auth ? (
        items
      ) : (
        <div className="d-flex align-items-center justify-content-center mt-5">
          <h1 style={style.feed_header}>Login required</h1>
        </div>
      )}
    </div>
  );
};

export default TagFeed;

const style = {
  border: {
    borderTop: "1px solid #D1D1D1",
  },

  admin_text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    lineHeight: "23px",
    color: "#FFFFFF",
  },

  date_text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#D1D1D1",
  },

  favorite: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#FFFFFF",

    border: {
      border: "1px solid #FFFFFF",
      boxSizing: "border-box",
      borderRadius: "5px",
    },
  },

  feed_header: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "21px",
    color: " #000000",

    content: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "16px",
      color: "#A8A5A5",
    },
  },

  tag_button: {
    border: "1px solid #907CFF",
    boxSizing: "border-box",
    borderRadius: "10px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#000000",
  },
};
