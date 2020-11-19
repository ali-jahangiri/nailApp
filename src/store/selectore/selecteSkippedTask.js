import { createSelector } from "reselect";

const skippedTaskSelectore = (state) => state.skipeddTask;

export default createSelector(
  skippedTaskSelectore,
  (skippedTaskSelectore) => skippedTaskSelectore
);
