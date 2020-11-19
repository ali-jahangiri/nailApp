import { createSelector } from "reselect";

const task = (state) => state.onProgressTask;

export default createSelector(task, (task) => task);
