import React, { useContext } from "react";
import { Stylesheet } from "../shared/style/Stylesheet";

import Smiley from "../article/article/smiley.svg";
import Dark_Heart from "../article/article/dark-heart.svg";
import { Store } from "../store/store";
import { Authentication } from "../auth/Authentication";

const MyPost = () => {
  const { articles } = useContext(Store);
  const { user } = useContext(Authentication);

  const userArticle = articles.map((article) => {
    return (
      article.author.username === user.username && (
        <div key={Math.random()}>
          <div
            className="d-flex align-items-center justify-content-between mt-2 pt-3"
            style={Stylesheet.settings_border}
          >
            <div className="d-flex align-items-center">
              <img src={Smiley} alt="" />
              <div className="ml-3 d-flex flex-column">
                <p
                  className="m-0 article_text_color"
                  style={Stylesheet.admin_text}
                >
                  {article.author.username}
                </p>
                <p className="m-0" style={Stylesheet.date_text}>
                  {new Date(article.createdAt).toDateString()}
                </p>
              </div>
            </div>
            <div
              className="d-flex align-items-center article_text_color_border ml-4 p-2"
              style={Stylesheet.favorite.border}
            >
              <img src={Dark_Heart} alt="" />
              <div className="ml-2">
                <p
                  className="m-0 article_text_color"
                  style={Stylesheet.favorite}
                >
                  {article.favoritesCount}
                </p>
              </div>
            </div>
          </div>
          <div className="row  mt-4 mb-5">
            <div className="col-md-8">
              <h1 className="text-capitalize" style={Stylesheet.feed_header}>
                {article.title}
              </h1>
              <p style={Stylesheet.feed_header.content}>{article.description}</p>
            </div>
            <div className="col-md-4 d-flex align-items-end justify-content-end">
              <div className="d-flex align-items-end justify-content-end">
                {article &&
                  article.tagList.map((tag) => {
                    return (
                      <button
                        key={Math.random()}
                        className="btn ml-2"
                        style={Stylesheet.tag_button}
                      >
                        {tag}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )
    );
  });

  return (
    <>
      <div
        className="tab-pane fade"
        id="mypost_feed"
        role="tabpanel"
        aria-labelledby="mypost_feed"
      >
        {userArticle}
      </div>
    </>
  );
};

export default MyPost;
