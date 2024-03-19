import { createSlice } from "@reduxjs/toolkit";
import { Brewery, RandomBreweryState } from "types/interfaces";
import { getRandomBrewery } from "../breweryCalls";

const initialState: RandomBreweryState = {
  randomBrewery: {} as Brewery,
  error: false,
};

const randomBrewerySlice = createSlice({
  name: "randomBrewery",
  initialState,
  reducers: {
    removeRandomBrewery(state) {
      state.randomBrewery = initialState.randomBrewery;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomBrewery.pending, (state) => {
      state.error = false;
    });
    builder.addCase(getRandomBrewery.fulfilled, (state, action) => {
      state.randomBrewery = action.payload;
      state.error = false;
    });
    builder.addCase(getRandomBrewery.rejected, (state) => {
      state.error = true;
    });
  },
});

export const { removeRandomBrewery } = randomBrewerySlice.actions;
export default randomBrewerySlice.reducer;
