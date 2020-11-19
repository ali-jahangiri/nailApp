import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import InputPallet from "../components/InputPallet";
import NewColorCategory from "./settingNewCategoryColor";

import { newCategoryAction } from "../store/Reducers/setupReducer";

const SettingCategory = ({ category, newCategoryAction }) => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  const [toggle, setToggle] = useState(false);
  const [colorEmpty, setColorEmpty] = useState(false);
  const colorHandler = (number, colorPicked) => {
    setColor(colorPicked);
    setColorEmpty(false);
  };
  const newCategoryHandler = () => {
    if (color && value.length > 1) {
      newCategoryAction({ category: value, color: color.trim() });
      setValue("");
      setColor("");
      setToggle(false);
      setColorEmpty(true);
    }
  };
  const cancelHandler = () => {
    setValue("");
    setColor("");
    setToggle(false);
    setColorEmpty(false);
  };
  return (
    <div className="setting__category">
      <p className="setting__category--intro">and your chosen category is</p>
      <div className="setting__category--box">
        <div>
          {!category.length ? (
            <div className="setting__category__empty">
              {"your category list is empty :("}
            </div>
          ) : null}
          {category.map((el, index) => (
            <NewColorCategory key={index} el={el} index={index} />
          ))}
          {category.length < 5 ? (
            <Fragment>
              <div className="setting__category--adder">
                <span>also you can</span>
                <div onClick={() => setToggle(!toggle)}>
                  <p>add new one</p>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
              <div style={{ display: toggle ? "block" : "none" }}>
                <InputPallet
                  colorGetEmpty={colorEmpty}
                  value={value}
                  array={[1]}
                  inputHandler={setValue}
                  colorHandler={colorHandler}
                />
                <div className="setting__category__new--submit">
                  <button
                    onClick={newCategoryHandler}
                    className={`${
                      value && color
                        ? "setting__category__new--submit--active"
                        : ""
                    }`}
                    disabled={!value}
                  >
                    submit
                  </button>
                  <button onClick={cancelHandler}>cancel</button>
                </div>
              </div>
            </Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { newCategoryAction })(SettingCategory);
