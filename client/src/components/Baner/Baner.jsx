import React from "react";
import { Link } from "react-router-dom";
import mobileImg from "../../images/mobile.svg";

const Baner = () => {
  return (
    <div className="baher">
      <div className="container">
        <div className="baner--container">
          <div className="text-wrapper">
            <h1 className="baner--main-text">
              <span className="text-with-bolb-weight">Brainstorming</span> for desired perfect Usability
            </h1>
            <p className="baner--text">
              Our design projects are fresh and simple and will benefit your business greatly. Learn more about our
              work!
            </p>
            <Link to="users" className="baner--btn">
              Views Stats
            </Link>
          </div>
          <img src={mobileImg} alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default Baner;
