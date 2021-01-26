import React, { useEffect, useState } from "react";

const Plaginator = ({ pages: { numberOfPage, page }, setPages }) => {
  const [pagesList, setPagesList] = useState([]);

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= numberOfPage; i += 1) {
      pages.push(i);
    }
    setPagesList(pages);
  }, [numberOfPage]);

  const clickHandler = (e) => {
    setPages({ numberOfPage, page: Number(e.target.textContent) });
  };

  const prevHandler = () => {
    page > 1 && setPages({ numberOfPage, page: page - 1 });
  };

  const nextHandler = () => {
    page < numberOfPage && setPages({ numberOfPage, page: page + 1 });
  };

  const renderPlaginatorItems = (el) => {
    const activeClass = "plaginator--item plaginator--item__active";
    let className = `plaginator--item__no-visible`;

    if (page === 1 || page === 2) {
      if (el <= 5) {
        className = "plaginator--item";
      }
    }
    if (page === numberOfPage || page === numberOfPage - 1) {
      if (el > numberOfPage - 5) {
        className = "plaginator--item";
      }
    }
    if (page - 2 <= el && el <= page + 2) {
      className = "plaginator--item";
      if (el === page) {
        className = activeClass;
      }
    }
    return (
      <p key={`${el}`} onClick={clickHandler} className={className}>
        {el}
      </p>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="plaginator-wrapper">
          <div className={page > 1 ? "prev arrov-acdive" : "prev"} onClick={prevHandler}>
            <svg width="17" height="28" viewBox="0 0 17 28" fill="none">
              <path d="M15 2L3 14L15 26" stroke="#F1F1F1" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <div className="plaginator--item-list">
            {pagesList && !!pagesList.length && pagesList.map((el, i) => renderPlaginatorItems(el))}
          </div>
          <div className={page < numberOfPage ? "next arrov-acdive" : "next"} onClick={nextHandler}>
            <svg width="17" height="28" viewBox="0 0 17 28" fill="none">
              <path d="M2 2L14 14L2 26" stroke="#F1F1F1" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plaginator;
