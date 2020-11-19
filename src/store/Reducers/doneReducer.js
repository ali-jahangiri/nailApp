const SET_TO_DONE = "SET_TO_DONE";
const RE_ORDER_TASK_DONE = "RE_ORDER_TASK_DONE";
const DELETE_TASK_DONE = "DELETE_TASK_DONE";

const DELETE_TASK = "DELETE_TASK";

export const setToDoneAction = (payload) => ({ type: SET_TO_DONE, payload });
export const reOrderedDoneTaskAction = (payload) => ({
  type: RE_ORDER_TASK_DONE,
  payload,
});
export const deleteTaskDoneAction = (payload) => ({
  type: DELETE_TASK_DONE,
  payload,
});

const doneReducer = (state = [], action) => {
  switch (action.type) {
    case SET_TO_DONE:
      return [...state, action.payload];
    case RE_ORDER_TASK_DONE:
      return action.payload;
    case DELETE_TASK_DONE:
      return state.filter((el) => el.id !== action.payload);
    case DELETE_TASK:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default doneReducer;
