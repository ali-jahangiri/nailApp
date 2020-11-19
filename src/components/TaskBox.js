import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import colorFunc from "../utils/colorFunc";
import getTime from "../utils/getTime";
import BacksideOfTaskBox from "./BaskSideOfTaskBox";

const TaskBox = ({
  desc,
  category,
  time,
  id,
  index,
  color,
  idCurrent,
  dontEdite,
  isEdited,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`task__container  ${
            idCurrent === id && `column__grab--shadow`
          }`}
        >
          <BacksideOfTaskBox
            id={id}
            toggle={toggle}
            setToggle={setToggle}
            dontEdite={dontEdite}
          />
          <div className="task__header">
            <div className="task__category">
              <p
                style={{
                  backgroundColor: color && colorFunc(color, 90),
                  color: color && colorFunc(color, -30),
                }}
              >
                {category}
              </p>
              <div onClick={() => setToggle(!toggle)} className="task__3dot">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="task__desc">
            <p>{desc}</p>
          </div>
          <div className="task__footer">
            <div className="task__time">
              <p>{getTime(time)}</p>
            </div>
            {isEdited && <i className="fas fa-pen"></i>}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskBox;
