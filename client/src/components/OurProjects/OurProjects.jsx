import React from "react";
import { Link } from "react-router-dom";

const OurProjects = () => {
  return (
    <>
      <div className="our-projects">
        <div className="container">
          <h2 className="our-projects--title">
            Why <span className="text-with-bolb-weight">small business owners love</span> AppCo?
          </h2>
          <p className="our-projects--subtitle">
            Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
          </p>
          <div className="projects--item-list">
            <div className="projects--item">
              <div className="projects--item__img cleanDesign"></div>
              <h4 className="projects--item__title">Clean Design</h4>
              <p className="projects--item__subtitle">Increase sales by showing true dynamics of your website.</p>
            </div>
            <div className="projects--item">
              <div className="projects--item__img secureData"></div>
              <h4 className="projects--item__title">Secure Data</h4>
              <p className="projects--item__subtitle">Build your online store’s trust using Social Proof & Urgency.</p>
            </div>
            <div className="projects--item">
              <div className="projects--item__img retinaRedy"></div>
              <h4 className="projects--item__title">Retina Ready</h4>
              <p className="projects--item__subtitle">
                Realize importance of social proof in customer’s purchase decision.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sudscribe-section">
        <div className="container">
          <div className="footerWrapper">
            <div className="inputContainer">
              <input className="sudscribe-input" placeholder="Enter your email" type="text" name="" id="" />
              <button className="sudscribe-btn">Subscribe</button>
            </div>
            <div className="footer-main-page">
              <Link className="footer--logo" to="/">
                AppCo
              </Link>
              <p className="footer--text">All rights reserved by ThemeTags</p>
              <p className="footer--text">Copyrights © 2019. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProjects;
