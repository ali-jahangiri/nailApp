import React, { useState } from "react";
import { connect } from "react-redux";

import selecteCategory from "../store/selectore/selectCategory";
import selectUserName from "../store/selectore/selectUserName";

import { editeNameAction } from "../store/Reducers/setupReducer";
import SettingCategory from "../components/SettingCategory";

const SettingPage = ({ editeNameAction, userName, category, history }) => {
  const [nameValue, setNameValue] = useState(userName);
  const [toggle, setToggle] = useState(false);
  console.log(category);
  const userNameChangre = () => {
    setToggle(!toggle);
    if (toggle && nameValue.length > 2) {
      editeNameAction(nameValue.trim());
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 m-auto">
          <div className="setting__container">
            <div className="setting__gohome">
              <div onClick={() => history.push("/")}>
                <i className="fas fa-angle-left"></i>
                <p>Home</p>
              </div>
            </div>
            <div className="setting__username">
              <span>Your name is </span>
              <span className="setting__username--text">{userName} </span>
              <span>
                and you can chnage it form
                <span
                  style={{ textDecoration: toggle && "underline" }}
                  className="setting__username--submit"
                  onClick={userNameChangre}
                >
                  {toggle ? "save" : "Here"}
                </span>
              </span>
            </div>
            <div
              className={`setting__input--box ${
                toggle && "setting__input--box--active"
              }`}
              style={{ display: toggle && "block" }}
            >
              <input
                maxLength="15"
                value={nameValue}
                onChange={({ target: { value } }) => setNameValue(value)}
                placeholder="Enter your name"
              />
              <span
                onClick={() => {
                  setNameValue("");
                  setToggle(false);
                }}
              >
                never mind
              </span>
            </div>
            <SettingCategory category={category} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userName: selectUserName(state),
  category: selecteCategory(state),
});

export default connect(mapStateToProps, { editeNameAction })(SettingPage);
