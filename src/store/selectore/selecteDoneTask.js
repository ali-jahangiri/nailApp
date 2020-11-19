import { createSelector } from "reselect";

const doneTaskSelectore = (state) => state.doneTask;

export default createSelector(
  doneTaskSelectore,
  (doneTaskSelectore) => doneTaskSelectore
);
