import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";

import DashBordProgress from "../DashbordProgress";
//selectore
import selecteDoneTask from "../../store/selectore/selecteDoneTask";
import selecteSkippedTask from "../../store/selectore/selecteSkippedTask";
import selecteOnProgressTask from "../../store/selectore/selecteOnProgressTask";

import { reOrderedOnProgressTaskAction } from "../../store/Reducers/onProgressReducer";
import {
  deleteTaskDoneAction,
  reOrderedDoneTaskAction,
} from "../../store/Reducers/doneReducer";
import { reOrderedSkippedTaskAction } from "../../store/Reducers/skippedReducer";

import { deleteOnProgressTaskAction } from "../../store/Reducers/onProgressReducer";
import { setToSkippedAction } from "../../store/Reducers/skippedReducer";
import { setToDoneAction } from "../../store/Reducers/doneReducer";

import DragColumn from "./DragColumn";

const DragContextProvider = ({
  onProgressTask,
  skipeddTask,
  doneTask,
  reOrderedOnProgressTaskAction,
  reOrderedDoneTaskAction,
  reOrderedSkippedTaskAction,
  setToDoneAction,
  setToSkippedAction,
  deleteOnProgressTaskAction,
  deleteTaskDoneAction,
}) => {
  const [curentBox, setCurentBox] = useState(null);
  const dragEndHandler = ({ source, destination }) => {
    setCurentBox(null);
    if (!destination) return;
    const placeholder = { onProgressTask, skipeddTask, doneTask };
    if (
      destination.droppableId === source.droppableId &&
      destination.index !== source.index
    ) {
      const newOrader = Array.from(placeholder[source.droppableId]);
      const newItem = newOrader.splice(source.index, 1);
      newOrader.splice(destination.index, 0, ...newItem);
      switch (destination.droppableId) {
        case "onProgressTask":
          return reOrderedOnProgressTaskAction(newOrader);
        case "skipeddTask":
          return reOrderedSkippedTaskAction(newOrader);
        case "doneTask":
          return reOrderedDoneTaskAction(newOrader);
        default:
          return;
      }
    }
    if (
      destination.droppableId === "doneTask" &&
      source.droppableId === "onProgressTask"
    ) {
      const item = placeholder[source.droppableId][source.index];
      deleteOnProgressTaskAction(item.id);
      setToDoneAction(item);
    }
    if (
      destination.droppableId === "skipeddTask" &&
      (source.droppableId === "doneTask" ||
        source.droppableId === "onProgressTask")
    ) {
      const item = placeholder[source.droppableId][source.index];
      if (source.droppableId === "onProgressTask")
        deleteOnProgressTaskAction(item.id);
      else deleteTaskDoneAction(item.id);
      setToSkippedAction(item);
    }
  };

  const dragStart = (arg) => {
    setCurentBox(arg.draggableId);
  };

  return (
    <div className="column__start">
      <div className="row">
        <DragDropContext onDragStart={dragStart} onDragEnd={dragEndHandler}>
          <DragColumn
            current={curentBox}
            placeholder="On Progress"
            task={onProgressTask}
            title={"onProgressTask"}
          />
          <DragColumn
            dontEdite={true}
            placeholder="Done"
            task={doneTask}
            title={"doneTask"}
            current={curentBox}
          />
          <DragColumn
            dontEdite={true}
            current={curentBox}
            placeholder="Skipped"
            task={skipeddTask}
            title={"skipeddTask"}
          />
        </DragDropContext>
        <DashBordProgress />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  onProgressTask: selecteOnProgressTask(state),
  skipeddTask: selecteSkippedTask(state),
  doneTask: selecteDoneTask(state),
});
export default connect(mapStateToProps, {
  reOrderedOnProgressTaskAction,
  reOrderedDoneTaskAction,
  reOrderedSkippedTaskAction,
  setToDoneAction,
  setToSkippedAction,
  deleteOnProgressTaskAction,
  deleteTaskDoneAction,
})(DragContextProvider);
