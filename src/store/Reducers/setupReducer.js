const SETUP_NAME = "SETUP_NAME";
const EDITE_NAME = "EDITE_NAME";
const SET_CATEGORY = "SETUP_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGOTY";
const EDITE_CATEGORY = "EDITE_CATEGORY";
const ADD_CATEGORY = "ADD_CATEGORY";

export const setUpName = (payload) => ({
  type: SETUP_NAME,
  payload,
});
export const newCategoryAction = (payload) => ({ type: ADD_CATEGORY, payload });
export const deleteCategotyAction = (payload) => ({
  type: DELETE_CATEGORY,
  payload,
});
export const editeNameAction = (payload) => ({ type: EDITE_NAME, payload });
export const setUpCategoryAction = (payload) => ({
  type: SET_CATEGORY,
  payload,
});
export const editCategoryAction = (payload) => ({
  type: EDITE_CATEGORY,
  payload,
});
const INIT = {
  category: [],
  userName: "",
};

const categotyReducer = (state = INIT, action) => {
  switch (action.type) {
    case SETUP_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: [...state.category, ...Object.values(action.payload)],
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        category: state.category.filter((el) => el.category !== action.payload),
      };
    case EDITE_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case EDITE_CATEGORY:
      return {
        ...state,
        category: state.category.map((el) => {
          return el.category === action.payload.category
            ? { ...el, color: action.payload.color }
            : el;
        }),
      };
    case ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, action.payload],
      };
    default:
      return state;
  }
};

export default categotyReducer;
