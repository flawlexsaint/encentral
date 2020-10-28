import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Store } from "../store/store";

import Smiley from "../article/article/smiley.svg";
import Dark_Heart from "../article/article/dark-heart.svg";
import FeedSkeleton from "./FeedSkeleton";
import { Authentication } from "../auth/Authentication";
import Pagination from "../shared/pagination/Pagination";

const Global_feed = () => {
  const { user } = useContext(Authentication);
  const { loading, Articles, favoriteArticle } = useContext(Store);

  const items = Articles.map((item) => {
    const data = {
      article: {
        favorited: true,
      },
    };
    return (
      <div key={item.slug}>
        <div
          className="d-flex align-items-center justify-content-between mt-2 pt-3"
          style={style.border}
        >
          <div className="d-flex align-items-center">
            <img src={Smiley} alt="" />
            <div className="ml-3 d-flex flex-column">
              {user && (
                <a href={"/user/" + item.author.username}>
                  <p
                    key={item.slug}
                    className="m-0 article_text_color"
                    style={style.admin_text}
                  >
                    {item.author.username}
                  </p>
                </a>
              )}

              <p className="m-0" style={style.date_text}>
                {new Date(item.createdAt).toDateString()}
              </p>
            </div>
          </div>
          <div
            className="d-flex align-items-center article_text_color_border ml-4 p-2"
            style={style.favorite.border}
            onClick={() => favoriteArticle(item.slug, data)}
          >
            <img src={Dark_Heart} alt="" />
            <div className="ml-2">
              <p className="m-0 article_text_color" style={style.favorite}>
                {item.favoritesCount}
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-lg-8">
            <a href={"/articles/" + item.slug}>
              <h1 className="text-capitalize" style={style.feed_header}>
                {item.title}
              </h1>
              <p style={style.feed_header.content}>{item.description}</p>
            </a>
          </div>
          <div className="col-lg-4 d-flex align-items-end justify-content-end">
            <div className="d-flex align-items-end justify-content-end">
              {item.tagList.map((tags) => {
                return (
                  <button
                    key={Math.random()}
                    className="btn ml-2"
                    style={style.tag_button}
                  >
                    {tags}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className="tab-pane fade active show"
      id="global_feed"
      role="tabpanel"
      aria-labelledby="global_feed-tab"
    >
      {loading ? (
        <>
          <FeedSkeleton />
          <FeedSkeleton />
        </>
      ) : (
        <>
          {items}
          <Pagination />
        </>
      )}
    </div>
  );
};

export default Global_feed;

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
    fontSize: "22px",
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
