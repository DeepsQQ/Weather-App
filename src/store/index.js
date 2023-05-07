import { configureStore } from "@reduxjs/toolkit";

import degreesModeReducer from "./degreesModeSlice";
import autoCompleteReducer from "./autoCompleteSlice";
import weatherDataReducer from "./weatherDataSlice";

export default configureStore({
  reducer: {
    degreesMode: degreesModeReducer,
    autoComplete: autoCompleteReducer,
    weatherData: weatherDataReducer,
  },
});
