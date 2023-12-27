/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getApiUrl from "../../getApiUrl";

const apiUrl = getApiUrl()
const SALESTeamManagement_URLS = `${apiUrl}/sales-team-management/`;


interface SalesTeamManagement {
  id: number;
  name: string;
  product: number;
  timestamp: string;
}

interface SalesTeamManagementState {
    salesTeamManagement: SalesTeamManagement[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null | undefined;
}

interface FetchSalesTeamManagementResponse {
  data: SalesTeamManagement[];
}

const initialState: SalesTeamManagementState = {
    salesTeamManagement: [],
    status: "idle",
    error: null,
};

export const fetchSalesTeamManagement = createAsyncThunk<SalesTeamManagement[], void, {}>(
    "salesTeamManagement/fetchSalesTeamManagement",
    async () => {
      const response = await axios.get<SalesTeamManagement[]>(SALESTeamManagement_URLS);
      return response.data; 
    }
  );
  

  export const assignCylinders = createAsyncThunk(
    "cylinder/assignCylinders",
    async ({
      sales_team,
        cylinder,
        assigned_quantity,
    }: {
      sales_team: number
        cylinder: string
        assigned_quantity: number
    }) => {
      const response = await axios.post(`${apiUrl}/addassignedcylinder/`, {
        sales_team,
        cylinder,
        assigned_quantity,
      })
      console.log('Response.data ', response.data)
      return response.data
    },
  )

  
  

const salesTeamManagementSlice = createSlice({
  name: "salesTeamManagement",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSalesTeamManagement.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSalesTeamManagement.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.salesTeamManagement = action.payload;
      })
      .addCase(fetchSalesTeamManagement.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch salesTeamManagement";
      })
      .addCase(assignCylinders.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(assignCylinders.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.salesTeamManagement.push(action.payload);
        
      //   state.salesTeamManagement = state.salesTeamManagement.map((sales) => {
      //     if (sales.id === action.payload.id) {
      //       return action.payload
  
      //     } else {
      //       console.log('Falsely')
      //       return sales
      //     }
      //   })
      })
      .addCase(assignCylinders.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
});

export const selectAllSalesTeamManagement = (state: { salesTeamManagement: SalesTeamManagementState }) =>
  state.salesTeamManagement.salesTeamManagement;
export const getSalesTeamManagementStatus = (state: { salesTeamManagement: SalesTeamManagementState }) =>
  state.salesTeamManagement.status;
export const getDebtorsError = (state: { salesTeamManagement: SalesTeamManagementState }) =>
  state.salesTeamManagement.error;

export default salesTeamManagementSlice.reducer;
