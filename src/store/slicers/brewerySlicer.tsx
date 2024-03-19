import Storage from "@/utils/storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Brewery, BreweryState } from "types/interfaces";
import { fetchBreweries } from "../breweryCalls";

const storage = new Storage();

const initialState: BreweryState = {
  data: [],
  results: [],
  favourites: {},
  searchTerm: "",
  changedBreweries: [],
  isLoading: false,
  isDataFetched: false,
  fetchMode: "api",
};

const brewerySlice = createSlice({
  name: "brewery",
  initialState,
  reducers: {
    searchBrewery(state, action: PayloadAction<{ searchValue?: string }>) {
      const searchTerm =
        action.payload.searchValue || action.payload.searchValue === ""
          ? (state.searchTerm = action.payload.searchValue.toLowerCase())
          : state.searchTerm;
      if (searchTerm) {
        state.results = state.data.filter((brewery: Brewery) =>
          brewery.name.toLowerCase().includes(searchTerm)
        );
      } else if (searchTerm === "") {
        state.results = state.data;
      } else {
        state.results = [];
      }
    },
    addToFavourites(state, action: PayloadAction<{ brewery: Brewery }>) {
      const brewery = action.payload.brewery;

      state.favourites[brewery.name] = brewery;
      storage.set(brewery.name, JSON.stringify(brewery));

      state.data = state.data.filter((item) => item.name !== brewery.name);
    },

    removeFromFavourites(state, action: PayloadAction<{ key: string }>) {
      const breweryName = action.payload.key,
        brewery = state.favourites[breweryName];

      state.data.push(brewery);
      state.results.push(brewery);

      storage.remove(breweryName);

      delete state.favourites[breweryName];
    },

    setBreweriesFromContract(
      state,
      action: PayloadAction<{ breweries: Brewery[] }>
    ) {
      const breweries = action.payload.breweries;
      if (breweries) {
        state.data = breweries;
        state.results = breweries;
      } else {
        console.error("Setting breweries from contrcat was not possible!");
      }
    },

    setFetchMode(state, action: PayloadAction<{ mode: boolean }>) {
      state.fetchMode = action.payload.mode ? "contract" : "api";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBreweries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBreweries.fulfilled, (state, action) => {
      state.isLoading = false;

      const storageData = storage.replaceData(
        action.payload,
        state.favourites,
        state.changedBreweries
      );

      state.data = storageData;
      state.results = storageData;

      state.isDataFetched = true;
    });
    builder.addCase(fetchBreweries.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  searchBrewery,
  addToFavourites,
  removeFromFavourites,
  setBreweriesFromContract,
  setFetchMode,
} = brewerySlice.actions;
export default brewerySlice.reducer;
