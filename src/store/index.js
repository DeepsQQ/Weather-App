import { configureStore } from "@reduxjs/toolkit";

import degreesModeReducer from "./degreesModeSlice";

export default configureStore({
  reducer: {
    degreesMode: degreesModeReducer,
  },
});
