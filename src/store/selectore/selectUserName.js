import { createSelector } from "reselect";

const userName = (state) => state.confige.userName;

export default createSelector(userName, (userName) => userName);
