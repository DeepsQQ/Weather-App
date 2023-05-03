import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchResults = createAsyncThunk(
  "autoComplete/fetchResults",
  async (value) => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/search.json",
      {
        params: {
          key: process.env.REACT_APP_API_KEY,
          q: value.trim(),
        },
      }
    );

    response.data = response.data.filter((filter, index, self) => {
      const isDuplicate =
        index !== self.findIndex((find) => find.id === filter.id);
      const isIncludes =
        filter.name.toLowerCase().includes(value.toLowerCase()) ||
        filter.country.toLowerCase().includes(value.toLowerCase());

      return !isDuplicate && isIncludes;
    });

    return response.data;
  }
);

const autoCompleteSlice = createSlice({
  name: "autoComplete",

  initialState: {
    results: [],
    error: null,
  },

  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },

  extraReducers: {
    [fetchResults.fulfilled]: (state, action) => {
      state.results = action.payload;
      state.error = null;
    },
    [fetchResults.rejected]: (state, action) => {
      state.error = action.error;
      state.results = [];
    },
  },
});

export const { setResults } = autoCompleteSlice.actions;
export default autoCompleteSlice.reducer;
