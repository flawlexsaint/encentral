import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

export const Store = createContext();

const StoreProvider = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
  );

  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [deleted, setDeleted] = useState(100);
  const [created, setCreated] = useState(100);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPerPage] = useState(4);
  const [yourFeeds, setYourFeed] = useState([]);

  const indexOfLastPost = currentPage * numberPerPage;
  const indexOfFirstPost = indexOfLastPost - numberPerPage;
  const Articles = articles.slice(indexOfFirstPost, indexOfLastPost);
  const Feeds = yourFeeds.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const res = await axios.get("/articles");
      setArticles(res.data.articles);
      setLoading(false);
    };

    fetchArticles();
  }, [render]);

  useEffect(() => {
    token &&
      axios
        .get("/articles/feed", {
          headers: {
            authorization: token.token,
          },
        })
        .then((res) => {
          setYourFeed(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [render]);

  useEffect(() => {
    axios
      .get("tags")
      .then((res) => {
        setTags(res.data.tags);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createPost = (data) => {
    user
      ? axios
          .post("articles", data, {
            headers: {
              authorization: token.token,
            },
          })
          .then((res) => {
            setCreated(res.status);
            setRender(!render);
          })
          .catch((err) => {
            console.log(err);
          })
      : props.history.push("/login");
  };

  const deleteArticle = (slug) => {
    axios
      .delete("/articles/" + slug, {
        headers: {
          authorization: user.token,
        },
      })
      .then((res) => {
        setDeleted(res.status);
        setRender(!render);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const favoriteArticle = (slug, data) => {
    user
      ? axios
          .post(`/articles/${slug}/favorite`, data, {
            headers: {
              authorization: user.token,
            },
          })
          .then((res) => {
            setRender(!render);
          })
          .catch((err) => {
            console.log(err);
          })
      : props.history.push("/login");
  };

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <Store.Provider
      value={{
        articles,
        setArticles,
        tags,
        deleteArticle,
        deleted,
        createPost,
        created,
        loading,
        Articles,
        numberPerPage,
        paginate,
        yourFeeds,
        Feeds,
        favoriteArticle,
        render,
        setRender,
      }}
    >
      {props.children}
    </Store.Provider>
  );
};

export default withRouter(StoreProvider);
