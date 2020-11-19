import { createSelector } from "reselect";

const onProgressTaskSelectore = (state) => state.onProgressTask;

export default createSelector(
  onProgressTaskSelectore,
  (onProgressTaskSelectore) => onProgressTaskSelectore
);
