import { createSlice } from "@reduxjs/toolkit";

import { API } from "../api/mock-api";

export const comboSlice = createSlice({
  name: "combinations",
  initialState: {
    combinations: API.getCombinations(),
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = comboSlice.actions;

export default comboSlice.reducer;
