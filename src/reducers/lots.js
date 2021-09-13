import { createSlice } from "@reduxjs/toolkit";

import { API } from "../api/mock-api";

export const lotSlice = createSlice({
  name: "lots",
  initialState: {
    lots: API.getLots(),
  },
  reducers: {
    favorite: (state, action) => {
      // Bad design, see homes.js
      state.lots.at(action.payload.id - 1).favorited = !state.lots.at(
        action.payload.id - 1
      ).favorited;
    },
  },
});

// Action creators are generated for each case reducer function
export const { favorite } = lotSlice.actions;

export default lotSlice.reducer;
