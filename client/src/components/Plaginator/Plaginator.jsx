import React from "react";

import arrov from "../../images/leftArrov.svg";

const Plaginator = () => {
  const pages = [1, 2, 3, 4, 5];
  console.log(arrov);
  return (
    <div>
      <div className="container">
        <div className="plaginator-wrapper">
          <div className="prev">
            <svg width="17" height="28" viewBox="0 0 17 28" fill="none">
              <path d="M15 2L3 14L15 26" stroke="#255d8b" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <div className="plaginator--item-list">
            {pages &&
              !!pages.length &&
              pages.map((el, i) => (
                <p key={`${el}` + i} className="plaginator--item">
                  {el}
                </p>
              ))}
          </div>
          <div className="next">
            <svg width="17" height="28" viewBox="0 0 17 28" fill="none">
              <path d="M2 2L14 14L2 26" stroke="#3A80BA" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plaginator;
