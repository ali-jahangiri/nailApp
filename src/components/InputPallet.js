import React from "react";

import ColorCategory from "./ColorCategory";
import Input from "./Input";
const colors = ["#ee6055", "#a7c957", "#8ecae6", "#ffff3f", "#ff7900bd"];

const InpusPallet = ({
  array,
  inputHandler,
  colorHandler,
  value,
  colorGetEmpty,
}) => {
  return array.map((el, index) => (
    <div className="config__input--pallet" key={index}>
      <Input
        value={value}
        maxLength={12}
        placeholder="Enter your Category"
        handler={(e) => inputHandler(e, index)}
      />
      <ColorCategory
        shuoldGetEmpty={colorGetEmpty}
        allColor={colors}
        kk={index}
        handler={colorHandler}
      />
    </div>
  ));
};

export default InpusPallet;
