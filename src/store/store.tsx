import { configureStore } from "@reduxjs/toolkit";
import breweryReducer from "./slicers/brewerySlicer";
import randomBreweryReducer from "./slicers/randomBrewerySlicer";

export const store = configureStore({
  reducer: {
    breweries: breweryReducer,
    randomBrewery: randomBreweryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
