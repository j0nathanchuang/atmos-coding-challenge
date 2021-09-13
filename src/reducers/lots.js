import { createSlice } from "@reduxjs/toolkit";

import { API } from "../api/mock-api";

export const lotSlice = createSlice({
  name: "lots",
  initialState: {
    lots: API.getLots(),
  },
  reducers: {
    favorite: (state, action) => {
      state.lots.at(action.payload.index).favorited = !state.lots.at(
        action.payload.index
      ).favorited;
    },
  },
});

// Action creators are generated for each case reducer function
export const { favorite } = lotSlice.actions;

export default lotSlice.reducer;
