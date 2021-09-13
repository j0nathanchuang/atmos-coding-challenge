import { configureStore } from "@reduxjs/toolkit";
import homesReducer from "../reducers/homes";
import lotsReducers from "../reducers/lots";

export default configureStore({
  reducer: {
    homes: homesReducer,
    lots: lotsReducers,
  },
});
