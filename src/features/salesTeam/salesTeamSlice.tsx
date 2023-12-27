/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getApiUrl from "../../getApiUrl";

const apiUrl = getApiUrl()
const SALESTeam_URLS = `${apiUrl}/getsalesteam/`;


interface SalesTeam {
  id: number;
  name: number;
  product: number;
  timestamp: string;
}

interface SalesTeamState {
    salesTeam: SalesTeam[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

interface FetchSalesTeamResponse {
  data: SalesTeam[];
}

const initialState: SalesTeamState = {
    salesTeam: [],
    status: "idle",
    error: null,
};

export const fetchSalesTeam = createAsyncThunk<SalesTeam[], void, {}>(
    "salesTeam/fetchSalesTeam",
    async () => {
      const response = await axios.get<SalesTeam[]>(SALESTeam_URLS);
      return response.data; // Corrected the return statement
    }
  );
  

const salesTeamSlice = createSlice({
  name: "salesTeam",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSalesTeam.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSalesTeam.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.salesTeam = action.payload;
      })
      .addCase(fetchSalesTeam.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch salesTeam";
      });
  },
});

export const selectAllSalesTeam = (state: { salesTeam: SalesTeamState }) =>
  state.salesTeam.salesTeam;
export const getSalesTeamStatus = (state: { salesTeam: SalesTeamState }) =>
  state.salesTeam.status;
export const getDebtorsError = (state: { salesTeam: SalesTeamState }) =>
  state.salesTeam.error;

export default salesTeamSlice.reducer;
