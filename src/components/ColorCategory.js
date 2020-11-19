import React, { useState } from "react";

const ColorCategory = ({ handler, kk, allColor, shuoldGetEmpty }) => {
  const [picked, setPicked] = useState(0);
  const clickHandler = (kk, el) => {
    handler(kk, el);
    setPicked(el);
    if (shuoldGetEmpty) {
      setPicked(0);
    }
  };
  return (
    <div className="input--pallet__container">
      {allColor.map((el, index) => (
        <div
          style={{ borderColor: picked === el && "#707070c4" }}
          onClick={() => clickHandler(kk, el)}
          className="pallet__container"
          key={index}
        >
          <div
            className="config__colorpicker"
            style={{ backgroundColor: el }}
          ></div>
        </div>
      ))}
    </div>
  );
};
export default ColorCategory;
