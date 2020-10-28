import React, { useContext, useState } from "react";
import { Stylesheet } from "../../src/shared/style/Stylesheet";
import { Redirect, withRouter } from "react-router-dom";
import { Store } from "../store/store";
import FeedSkeleton from "../home/FeedSkeleton";

const NewPost = () => {
  const { createPost, created, render, setRender } = useContext(Store);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const createArticle = (e) => {
    e.preventDefault();
    const data = {
      article: {
        title: title,
        body: body,
        description: description,
        tagList: tags,
      },
    };
    createPost(data);
    setTitle("");
    setTags("");
    setBody("");
    setDescription("");
  };

  return created === 200 ? (
    <>
      <div className="row">
        <div className="col-md-10 mx-auto p-4 mt-4">
          <FeedSkeleton />
        </div>
      </div>
      {setTimeout(() => {
        setRender(!render);
      }, 200)}
      <Redirect to="/" />
    </>
  ) : (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5 mb-5  p-4">
        <form onSubmit={createArticle}>
          <input
            type="text"
            className="form-control mb-4"
            name=""
            id=""
            placeholder="Article Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={Stylesheet.text_input}
          />
          <input
            type="text"
            className="form-control mb-4"
            name=""
            id=""
            placeholder="What’s this article about?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={Stylesheet.text_input}
            maxLength="100"
          />
          <textarea
            name=""
            className="form-control mb-4"
            id=""
            cols="30"
            rows="10"
            placeholder="Write your article (in markdown)"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={Stylesheet.text_area}
          ></textarea>
          <input
            type="text"
            className="form-control mb-4"
            name="form-control"
            id=""
            placeholder="Enter tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            style={Stylesheet.text_input}
          />
          <div className=" d-flex justify-content-end align-items-center">
            <button className="btn" style={Stylesheet.custom_button}>
              Publish Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(NewPost);
