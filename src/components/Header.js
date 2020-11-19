import React from "react";
import SearchBar from "./SearchBar";
import Setting from "./Setting";

const Header = () => (
  <div className="header__container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="header__logo">
            <span className="header__logo--text">
              Nail<div className="header__logo--dot"></div>
            </span>
          </div>
        </div>
        <SearchBar />
        <Setting />
      </div>
    </div>
  </div>
);

export default Header;
