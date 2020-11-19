import { combineReducers } from "redux";

import confige from "./Reducers/setupReducer";
import task from "./Reducers/onProgressReducer";
import skipeddTask from "./Reducers/skippedReducer";
import doneTask from "./Reducers/doneReducer";

//global action
const DELETE_TASK = "DELETE_TASK";

export const deleteTaskAction = (payload) => ({ type: DELETE_TASK, payload });

export default combineReducers({
  confige,
  onProgressTask: task,
  skipeddTask,
  doneTask,
});
