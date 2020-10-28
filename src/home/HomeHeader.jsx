import React from "react";

const Header = () => {
  return (
    <div className="row">
      <div className="col-12" style={style.homepage.bg}>
        <div className="container-fluid mt-5 mb-5">
          <div className="d-flex flex-column align-items-center justify-content-center ">
            <h1 style={style.homepage.header}>eBlog</h1>
            <p style={style.homepage.text}>
              A frontend developer challenge blog.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

const style = {
  homepage: {
    bg: {
      background: "#907CFF",
    },

    header: {
      fontFamily: "Futura",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 48,
      lineHeight: "64px",
      color: "#FFFFFF",
      textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
    },

    text: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 300,
      textAlign: "center",
      fontSize: "24px",
      lineHeight: "28px",
      color: "#FFFFFF",
    },
  },
};
