import { createSelector } from "reselect";

const categorySelectore = (state) => state.confige.category;

export default createSelector(
  categorySelectore,
  (categorySelectore) => categorySelectore
);
