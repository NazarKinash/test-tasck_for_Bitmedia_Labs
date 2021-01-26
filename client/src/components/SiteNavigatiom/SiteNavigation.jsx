import React from "react";
import { Link } from "react-router-dom";

const SiteNavigation = ({ location }) => {
  return (
    <div className="navigation">
      <div className="container">
        {!!location.length &&
          location.map((el, i) => (
            <Link
              className={i + 1 !== location.length ? "navigation--link" : "navigation--link navigation--link__active"}
              to={el.to}
              key={el.title + i}
            >
              {i + 1 !== location.length ? `${el.title} > ` : `${el.title}`}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SiteNavigation;
