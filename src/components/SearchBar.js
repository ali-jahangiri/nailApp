import React, { useState } from "react";
import { connect } from "react-redux";

import selecteAllTask from "../store/selectore/selecteAllTaskForSearchResult";
import SearchResultItem from "./SearchResultItem";

const SearchBar = ({ allTask }) => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="search__container col-md-4">
      <form>
        <div className="search__box">
          <i className="fas fa-search"></i>
          <input
            value={value}
            onChange={({ target: { value } }) => {
              setValue(value);
              setShow(true);
            }}
            placeholder="search everything.."
          />
        </div>
        <div
          style={{ display: !show && "none" }}
          className="search__result__container"
        >
          {allTask.map(({ tag, tasks }, index) => (
            <SearchResultItem
              tag={tag}
              key={index}
              el={tasks.filter(({ desc }) => desc.includes(value))}
            />
          ))}
        </div>
        <span
          style={{ display: !show && "none" }}
          onClick={() => setShow(!show)}
          className="search__close"
        >
          close
        </span>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  allTask: selecteAllTask(state),
});

export default connect(mapStateToProps)(SearchBar);
