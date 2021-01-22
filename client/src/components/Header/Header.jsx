import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header--logo">
          AppCo
        </Link>
      </div>
    </header>
  );
};

export default Header;
