import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTaskAction } from "../store/rootReducer";
const BacksideOfTaskBox = ({
  toggle,
  setToggle,
  dontEdite,
  history,
  id,
  deleteTaskAction,
}) => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        display: toggle && "flex",
      }}
      className="task__edite--container"
    >
      <div className="task__edite--back" onClick={() => setToggle(!toggle)}>
        <span>Back</span>
      </div>
      <div
        onClick={() => history.push(`/edite/${id}`)}
        style={{ display: dontEdite && "none" }}
      >
        <p>Edite</p>
        <i className="fas fa-edit"></i>
      </div>
      <div onClick={() => setShow(true)}>
        <p>Delete</p>
        <i className="fas fa-trash"></i>
      </div>
      {show && (
        <div className="task__delete">
          <i className="fas fa-trash"></i>
          <div>
            <button onClick={() => deleteTaskAction(id)}>Delete it</button>
            <button onClick={() => setShow(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(null, { deleteTaskAction })(
  withRouter(BacksideOfTaskBox)
);
