import React from "react";
import { NavLink } from "react-router-dom";

const loc = ["mainPage", "usersListPage"];

const SiteNavigation = () => {
  return (
    <div className="navigation">
      <div className="container">
        {!!loc.length &&
          loc.map((el, i) => (
            <NavLink className="navigation--link" activeClassName="navigation--link__active" to="/" key={el + i}>
              {`${el} >`}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default SiteNavigation;
