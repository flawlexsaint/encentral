import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { Skeleton } from "@material-ui/lab";
import { Store } from "../store/store";
import { Link } from "react-router-dom";

const PopularTags = () => {
  const { tags } = useContext(Store);

  return (
    <div className="container-fluid p-4" style={style.popular_tags}>
      <h1 className="mb-3" style={style.popular_tags.header}>
        Popular Tags
      </h1>
      {tags.length === 0 ? (
        <>
          <div className="d-flex align-items-center">
            <button className="btn m-0 p-0" style={style.skeleton_button}>
              <Skeleton width="100%" height="50px">
                <Typography>Lorem ipsum</Typography>
              </Skeleton>
            </button>
            <button className="btn m-0 p-0" style={style.skeleton_button}>
              <Skeleton width="100%" height="50px">
                <Typography>Lorem ipsum</Typography>
              </Skeleton>
            </button>
            <div className="ml-3"></div>
          </div>
        </>
      ) : (
        tags.map((tag) => {
          return (
            <Link to={`/#tag_feed`}
              key={Math.random()}
              className="btn m-1"
              style={style.popular_tags.button}
            >
              {tag}
            </Link>
          );
        })
      )}
    </div>
  );
};

export default PopularTags;

const style = {
  popular_tags: {
    background: "#F4F2FE",

    header: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "24px",
      lineHeight: "28px",
      color: "#000000",
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
    },
  },
  skeleton_button: {
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
