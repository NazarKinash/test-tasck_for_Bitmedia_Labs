import React from "react";

const usersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const Statistics = () => {
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
            {usersArr &&
              !!usersArr.length &&
              usersArr.map((el, i) => (
                <div className="table--row " key={"id" + i}>
                  <p className="column--item">id</p>
                  <p className="column--item">First name</p>
                  <p className="column--item">Last name</p>
                  <p className="column--item">Email</p>
                  <p className="column--item">Genger</p>
                  <p className="column--item">IP adderes</p>
                  <p className="column--item">Total clicks</p>
                  <p className="column--item">Total page views</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
