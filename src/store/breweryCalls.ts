import { API_URL } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBreweries = createAsyncThunk("fetchBreweries", async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getRandomBrewery = createAsyncThunk(
  "getRandomBrewery",
  async () => {
    try {
      const response = await axios.get(`${API_URL}/random`);
      return response.data[0];
    } catch (error) {
      throw error;
    }
  }
);
