import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weatherData/fetchWeather",
  async (value) => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          key: process.env.REACT_APP_API_KEY,
          q: value,
          days: 3,
          aqi: "no",
          alerts: "no",
          lang: "en",
        },
      }
    );

    return response.data;
  }
);

const autoCompleteSlice = createSlice({
  name: "weatherData",

  initialState: {
    location: null,
    currentWeather: null,
    forecast: null,
    error: null,
  },

  extraReducers: {
    [fetchWeather.fulfilled]: (state, action) => {
      state.location = action.payload.location;
      state.currentWeather = action.payload.current;
      state.forecast = action.payload.forecast.forecastday;
      state.error = null;
    },
    [fetchWeather.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default autoCompleteSlice.reducer;
