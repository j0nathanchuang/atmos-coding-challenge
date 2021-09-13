import { createSlice } from "@reduxjs/toolkit";

import { API } from "../api/mock-api";

export const homeSlice = createSlice({
  name: "homes",
  initialState: {
    homes: API.getHomePlans(),
  },
  reducers: {
    favorite: (state, action) => { 
      // Bad design, trying to use this map method but not working
      // state.homes.map((home) => { return home.homePlanId === action.payload.id ? home.favorite = !home.favorite : home });
      state.homes.at(action.payload.id - 1).favorited = !state.homes.at(
        action.payload.id - 1
      ).favorited;
    },
  },
});

// Action creators are generated for each case reducer function
export const { favorite } = homeSlice.actions;

export default homeSlice.reducer;
