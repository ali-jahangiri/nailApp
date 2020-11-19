import React from "react";

import { Droppable } from "react-beautiful-dnd";
import TaskBox from "../TaskBox";

const DragColumn = ({ title, task, placeholder, current, dontEdite }) => {
  return (
    <div className="col-md-4 col-xl-3 col-lg-3 mt-sm-3 mt-xl-0 mt-md-0">
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="column__container"
          >
            <div className="column__title">
              <p>{placeholder}</p>
            </div>
            <div className="column__box">
              {!task.length && <div className="column__empty">Empty Task</div>}
              {task.map((el, index) => (
                <TaskBox
                  dontEdite={dontEdite}
                  idCurrent={current}
                  index={index}
                  {...el}
                  key={el.id}
                />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DragColumn;
