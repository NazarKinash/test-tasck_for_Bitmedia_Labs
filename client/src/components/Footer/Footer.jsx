import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer--wrapper">
          <Link className="footer--logo" to="/">
            AppCo
          </Link>
          <p className="footer--text">All rights reserved by ThemeTags</p>
          <p className="footer--text">Copyrights © 2019. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
