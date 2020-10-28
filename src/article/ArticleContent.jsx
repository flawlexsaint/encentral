import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Authentication } from "../auth/Authentication";

import { Store } from "../store/store";
import FeedSkeleton from "../home/FeedSkeleton";

import Heart from "./article/heart.svg";
import Smiley_Header from "./article/smiley.svg";

const ArticleContent = (props) => {
  const { user } = useContext(Authentication);
  const { deleteArticle, deleted } = useContext(Store);
  const slug = props.match.params.slug;
  const [article, setArticle] = useState("");
  const [username, setUsername] = useState("");
  const [createAt, setCreatedAt] = useState("");
  const [favoriteCount, setFavoriteCount] = useState("");

  useEffect(() => {
    axios
      .get("/articles/" + slug)
      .then((res) => {
        setCreatedAt(res.data.article.createdAt);
        setArticle(res.data.article);
        setUsername(res.data.article.author.username);
        setFavoriteCount(res.data.article.favoritesCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return deleted === 200 ? (
    <>
      <div className="row">
        <div className="col-md-10 mx-auto p-4 mt-4">
          <FeedSkeleton />
        </div>
      </div>
      {setTimeout(() => {
        props.history.push("/");
      }, 2000)}
    </>
  ) : (
    <>
      <div className="row" style={style.article_headers.bg}>
        <div className="col-md-11 m-auto">
          <div className="container-fluid mt-5 mb-5">
            <div className="">
              <h1 style={style.article_headers.title}>{article.title}</h1>
              <div className="d-flex align-items-center mt-4">
                <div className="d-flex align-items-center">
                  <img src={Smiley_Header} alt="" />
                  <div className="ml-3 d-flex flex-column">
                    <p className="m-0" style={style.article_headers.admin_text}>
                      {username}
                    </p>
                    <p className="m-0" style={style.article_headers.date_text}>
                      {new Date(createAt).toDateString()}
                    </p>
                  </div>
                </div>
                <button
                  className="d-flex align-items-center ml-4 p-2 btn"
                  style={style.favorite.border}
                >
                  <img src={Heart} alt="" />
                  <div className="ml-2">
                    <p className="m-0" style={style.favorite}>
                      Favorite Article ({favoriteCount})
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="container-fluid">
            <p className="mt-5 mb-5" style={style.article.text}>
              {article.body}
            </p>
            <div className="d-flex align-items-center justify-content-between">
              <div className="">
                {article.tagList &&
                  article.tagList.map((tag) => {
                    return (
                      <button
                        className="btn mr-2"
                        style={style.button}
                        key={article.slug}
                      >
                        {tag}
                      </button>
                    );
                  })}
              </div>
              {user === null ? (
                <></>
              ) : (
                <>
                  <div className="d-flex align-items-center">
                    {user.username === username && (
                      <>
                        <button
                          onClick={() => deleteArticle(slug)}
                          className="btn ml-3"
                          style={style.button.delete}
                        >
                          delete
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(ArticleContent);

const style = {
  article_headers: {
    bg: {
      background: "#907CFF",
    },

    title: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 300,
      textTransform: "capitalize",
      fontSize: "30px",
      lineHeight: "28px",
      color: "#FFFFFF",
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

  article: {
    text: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#000000",
    },

    border: {
      borderTop: "1px solid #D1D1D1",
    },

    admin: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "23px",
      color: "#FFFFFF",
    },

    date: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#D1D1D1",
    },
  },

  button: {
    border: "1px solid #907CFF",
    boxSizing: "border-box",
    borderRadius: "10px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    color: "#000000",

    delete: {
      border: "1px solid #907CFF",
      boxSizing: "border-box",
      borderRadius: "10px",
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "14px",
      background: "red",
      color: "#ffffff",
      padding: ".7rem 1rem",
      textTransform: "uppercase",
    },
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
};
