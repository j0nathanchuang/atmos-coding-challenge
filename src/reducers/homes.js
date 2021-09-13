import { createSlice } from "@reduxjs/toolkit";

import { API } from "../api/mock-api";

export const homeSlice = createSlice({
  name: "homes",
  initialState: {
    homes: API.getHomePlans(),
  },
  reducers: {
    favorite: (state, action) => { 
      state.homes.at(action.payload.index).favorited = !state.homes.at(
        action.payload.index
      ).favorited;
    },
  },
});

// Action creators are generated for each case reducer function
export const { favorite } = homeSlice.actions;

export default homeSlice.reducer;
