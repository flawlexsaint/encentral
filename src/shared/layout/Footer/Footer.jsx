import React from "react";
import { Stylesheet } from "../../style/Stylesheet";

const Footer = () => {
  return (
    <>
      <div className="row fixed-bottom">
        <div className="col-12" style={Stylesheet.footer}>
          <div className="coontainer-fluid">
            <div className="d-flex align-items-center">
              <h1 className="mr-4 ml-4 mt-2" style={Stylesheet.footer.logo}>
                eBlog
              </h1>
              <p className="m-0 mt-2" style={Stylesheet.footer.text}>
                © 2020. UI Design by Encentral Solutions | Powered by [Me].
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
