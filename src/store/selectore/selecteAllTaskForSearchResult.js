import { createSelector } from "reselect";

const doneTaskSelectore = (state) => state.doneTask;
const skippedTaskSelectore = (state) => state.skipeddTask;
const onProgressTaskSelectore = (state) => state.onProgressTask;

export default createSelector(
  [doneTaskSelectore, skippedTaskSelectore, onProgressTaskSelectore],
  (doneTaskSelectore, skippedTaskSelectore, onProgressTaskSelectore) => [
    { tag: "on Progress", tasks: onProgressTaskSelectore },
    { tag: "done", tasks: doneTaskSelectore },
    { tag: "skipped", tasks: skippedTaskSelectore },
  ]
);
