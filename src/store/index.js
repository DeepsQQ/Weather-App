import { configureStore } from "@reduxjs/toolkit";

import degreesModeReducer from "./degreesModeSlice";
import autoCompleteReducer from "./autoCompleteSlice";

export default configureStore({
  reducer: {
    degreesMode: degreesModeReducer,
    autoComplete: autoCompleteReducer,
  },
});
