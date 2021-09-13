import { configureStore } from "@reduxjs/toolkit";
import homesReducer from "../reducers/homes";
import lotsReducers from "../reducers/lots";
import combinationReducers from "../reducers/combinations";

export default configureStore({
  reducer: {
    homes: homesReducer,
    lots: lotsReducers,
    combinations: combinationReducers,
  },
});
