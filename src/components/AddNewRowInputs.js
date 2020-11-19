import React from "react";

const AddNewRowInput = ({ handler, enable }) => {
  return (
    <div className="config__newrowadder" onClick={enable() ? handler : null}>
      <button>Add</button>
      <i className="fas fa-plus"></i>
    </div>
  );
};

export default AddNewRowInput;
