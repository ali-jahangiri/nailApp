const DELETE_TASK_SKIPPED = "DELETE_TASK_SKIPPED";
const SET_TO_SKIPPED = "SET_TO_SKIPPED";
const RE_ORDER_SKIPPED_TASK = "RE_ORDER_SKIPPED_TASK";

const DELETE_TASK = "DELETE_TASK";
export const deleteSkippedTaskAction = (payload) => ({
  type: DELETE_TASK_SKIPPED,
  payload,
});
export const setToSkippedAction = (payload) => ({
  type: SET_TO_SKIPPED,
  payload,
});
export const reOrderedSkippedTaskAction = (payload) => ({
  type: RE_ORDER_SKIPPED_TASK,
  payload,
});

const skippedReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TO_SKIPPED:
      return [...state, action.payload];
    case DELETE_TASK_SKIPPED:
      return state.filter((el) => el.id !== action.payload);
    case RE_ORDER_SKIPPED_TASK:
      return action.payload;
    case DELETE_TASK:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default skippedReducer;
