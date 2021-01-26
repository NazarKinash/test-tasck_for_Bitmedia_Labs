import React from "react";
import { Link } from "react-router-dom";

const Statistics = ({ usersList }) => {
  return (
    <div>
      <div className="container">
        <h2 className="component--title">Users statistics</h2>
        <div className="statistics--table">
          <div className="table--row table--row__header">
            <p className="column--item__header">id</p>
            <p className="column--item__header">First name</p>
            <p className="column--item__header">Last name</p>
            <p className="column--item__header">Email</p>
            <p className="column--item__header">Genger</p>
            <p className="column--item__header">IP adderes</p>
            <p className="column--item__header">Total clicks</p>
            <p className="column--item__header">Total page views</p>
          </div>
          <div className="table--body">
            {usersList &&
              !!usersList.length &&
              usersList.map((el, i) => (
                <Link to={`/users/${el.id}`} key={`${el.id}`} className="table--row ">
                  <p className="column--item">{el.id}</p>
                  <p className="column--item">{el.first_name}</p>
                  <p className="column--item">{el.last_name}</p>
                  <p className="column--item">{el.email}</p>
                  <p className="column--item">{el.gender}</p>
                  <p className="column--item">{el.ip_address}</p>
                  <p className="column--item">{el.total_clicks}</p>
                  <p className="column--item">{el.total_page_views}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
