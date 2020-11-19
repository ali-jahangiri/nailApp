import React, { useState } from "react";
import MM from "./Modal/Modal";

const AddBox = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="addbox__container">
      <div onClick={() => setOpen(true)} className="addbox-content">
        <p>Add New Task</p>
        <i className="fas fa-plus"></i>
      </div>
      <MM open={open} close={close} />
    </div>
  );
};
export default AddBox;
