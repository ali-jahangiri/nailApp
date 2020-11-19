import React from "react";

const SearchResultItem = ({ el, tag }) => {
  if (!el.length)
    return (
      <div className="result__empty">
        <p>{tag}</p>
      </div>
    );
  return (
    <div className="result__box">
      <p className="result__tag">{tag}</p>
      {el.map((el, index) => (
        <div key={index}>
          <p>{el.desc}</p>
          <div
            className="result__color"
            style={{ backgroundColor: el.color }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultItem;
