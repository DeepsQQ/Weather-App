import { createSlice } from "@reduxjs/toolkit";

const degreesModeSlice = createSlice({
  name: "degreesMode",
  initialState: {
    mode: "C",
  },
  reducers: {
    setDegreesMode(state, action) {
      state.mode = action.payload.mode;
    },
  },
});

export const { setDegreesMode } = degreesModeSlice.actions;
export default degreesModeSlice.reducer;
