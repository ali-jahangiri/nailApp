import React, { useState } from "react";
import { connect } from "react-redux";
import ColorCategory from "./ColorCategory";

import { deleteCategotyAction } from "../store/Reducers/setupReducer";
import { editCategoryAction } from "../store/Reducers/setupReducer";

const colors = ["#ee6055", "#a7c957", "#8ecae6", "#ffff3f", "#ff7900bd"];

const NewColorCategory = ({
  el,
  index,
  deleteCategotyAction,
  editCategoryAction,
}) => {
  const available = colors.filter((color) => color !== el.color);
  const [showMore, setShowMore] = useState(false);
  const sendToStore = (useless, wasColor) => {
    setShowMore(false);
    editCategoryAction({ category: el.category, color: wasColor });
  };
  return (
    <div
      style={{
        borderColor: showMore && "rgba(165, 165, 165, 0.486)",
        boxShadow: showMore && "rgb(226 226 226 / 36%) 0px -1px 20px 0px",
      }}
      className="setting__category--item"
      key={index}
    >
      <div className="ssflex">
        <i
          onClick={() => deleteCategotyAction(el.category)}
          className="fa fa-times"
          aria-hidden="true"
        ></i>
        <div className="ssc__text">{el.category}</div>
        <div
          onClick={() => setShowMore(!showMore)}
          className="pallet__container"
        >
          <div
            style={{ backgroundColor: el.color }}
            className="config__colorpicker"
          ></div>
          <div className="setting__category--helper">change</div>
        </div>
      </div>
      <div
        style={{ display: showMore && "block" }}
        className="setting__categoty--toggle"
      >
        <div className="setting__category__changecolor--controler">
          <p>Selecte New color : </p>
          <p onClick={() => setShowMore(false)}>Cancel</p>
        </div>
        <div className="setting__available--color">
          <ColorCategory handler={sendToStore} allColor={available} />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteCategotyAction, editCategoryAction })(
  NewColorCategory
);
