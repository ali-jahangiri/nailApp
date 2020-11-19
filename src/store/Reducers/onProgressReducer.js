const ADD_PROGRESS_TASK = "ADD_PROGRESS_TASK";
const DELETE_PROGRESS_TASK = "DELETE_PROGRESS_TASK";
const RE_ORDER_PROGRESS_TASK = "RE_ORDER_PROGRESS_TASK";
const MODIFY_PROGRESS_TASK = "MODIFY_PROGRESS_TASK";

const DELETE_TASK = "DELETE_TASK";

export const addOnProgressTaskAction = (payload) => ({
  type: ADD_PROGRESS_TASK,
  payload,
});
export const deleteOnProgressTaskAction = (payload) => ({
  type: DELETE_PROGRESS_TASK,
  payload,
});
export const reOrderedOnProgressTaskAction = (payload) => ({
  type: RE_ORDER_PROGRESS_TASK,
  payload,
});

export const modifyProgressAction = (payload) => ({
  type: MODIFY_PROGRESS_TASK,
  payload,
});

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PROGRESS_TASK:
      return [{ ...action.payload }, ...state];
    case RE_ORDER_PROGRESS_TASK:
      return action.payload;
    case MODIFY_PROGRESS_TASK:
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, ...action.payload.data } : el
      );
    case DELETE_PROGRESS_TASK:
      return state.filter((el) => el.id !== action.payload);
    case DELETE_TASK:
      return state.filter((el) => el.id !== action.payload);
    default:
      return state;
  }
};

export default taskReducer;
