/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getApiUrl from "../../getApiUrl";

const apiUrl = getApiUrl()
const PRODUCT_URLS = `${apiUrl}/assignedcylider/`;


interface assignedProducts {
  id: number;
  sales_team: {
    id: number;
    employees: {
        id: number;
        user: {
            id: number;
            username: string;
        };
        first_name: string;
        last_name: string;
        phone: number;
        alternative_phone: number;
        gender: string;
        profile_image: string;
    };
    
    products: {
        id: number;
        gas_type: {
            id: number;
            name: string;
        };
        weight: {
            id: number;
            weight: number;
        },
        quantity: number;
        wholesale_selling_price: number;
        wholesale_refil_price: number;
        retail_refil_price: number;
    }
  }
  cylinder: {
    id: number;
    gas_type: {
        id: number;
        name: string;
    };
    weight: {
        id: number;
        weight: number;
    },
    quantity: number;
    wholesale_selling_price: number;
    wholesale_refil_price: number;
    retail_refil_price: number;
}
}

interface assignedProductsState {
    assignedProducts: assignedProducts[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

interface FetchProductsResponse {
  data: assignedProducts[];
}

const initialState: assignedProductsState = {
    assignedProducts: [],
    status: "idle",
    error: null,
};

export const fetchAssignedProducts = createAsyncThunk<assignedProducts[], void, {}>(
    "assignedProducts/fetchAssignedProducts",
    async () => {
      const response = await axios.get<assignedProducts[]>(PRODUCT_URLS);
      return response.data; // Corrected the return statement
    }
  );
  

const assignedProductsSlice = createSlice({
  name: "assignedProducts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAssignedProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAssignedProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.assignedProducts = action.payload;
      })
      .addCase(fetchAssignedProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const selectAllAssignedProducts = (state: { assignedProducts: assignedProductsState }) =>
  state.assignedProducts.assignedProducts;
export const getAssignedProductstatus = (state: { assignedProducts: assignedProductsState }) =>
  state.assignedProducts.status;
export const getDebtorsError = (state: { assignedProducts: assignedProductsState }) =>
  state.assignedProducts.error;

export default assignedProductsSlice.reducer;
