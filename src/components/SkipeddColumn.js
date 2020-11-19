import React from "react";

import { Droppable } from "react-beautiful-dnd";
// import TaskBox from "./TaskBox";

const SkippedColumn = () => {
  return (
    <div className="col-md-3">
      <Droppable droppableId="skipped">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="column__container"
          >
            <div className="column__title">
              <p>Skipeed</p>
            </div>
            <div className="column__box"></div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default SkippedColumn;
