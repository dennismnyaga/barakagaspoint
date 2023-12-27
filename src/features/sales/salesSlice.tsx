/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getApiUrl from "../../getApiUrl";

const apiUrl = getApiUrl()
const SALES_URLS = `${apiUrl}/sales/`;


interface Sales {
  id: number;
  total_amount: number;
  product: number;
  timestamp: string;
}

interface SalesState {
    sales: Sales[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

interface FetchSalesResponse {
  data: Sales[];
}

const initialState: SalesState = {
    sales: [],
    status: "idle",
    error: null,
};

export const fetchSales = createAsyncThunk<Sales[], void, {}>(
    "sales/fetchSales",
    async () => {
      const response = await axios.get<Sales[]>(SALES_URLS);
      return response.data; // Corrected the return statement
    }
  );
  

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSales.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sales = action.payload;
      })
      .addCase(fetchSales.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch sales";
      });
  },
});

export const selectAllSales = (state: { sales: SalesState }) =>
  state.sales.sales;
export const getSalestatus = (state: { sales: SalesState }) =>
  state.sales.status;
export const getDebtorsError = (state: { sales: SalesState }) =>
  state.sales.error;

export default salesSlice.reducer;
