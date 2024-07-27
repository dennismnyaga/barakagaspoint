/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getApiUrl from "../../getApiUrl";

const apiUrl = getApiUrl()
const EMPLOYEES_URLS = `${apiUrl}/employees/`;


interface Employees {
  id: number;
  location: number[];
  name: string;
  phone: number;
  sales: string;
}

interface EmployeesState {
  employees: Employees[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface FetchCustomersResponse {
  data: Employees[];
}

const initialState: EmployeesState = {
  employees: [],
  status: "idle",
  error: null,
};

export const fetchEmployees = createAsyncThunk<Employees[], void, {}>(
    "employees/fetchEmployees",
    async () => {
      const response = await axios.get<Employees[]>(EMPLOYEES_URLS);
      return response.data; // Corrected the return statement
    }
  );
  

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch customers";
      });
  },
});

export const selectAllEmployees = (state: { employees: EmployeesState }) =>
  state.employees.employees;
export const getEmployeesStatus = (state: { employees: EmployeesState }) =>
  state.employees.status;
export const getEmployeesError = (state: { employees: EmployeesState }) =>
  state.employees.error;

export default employeesSlice.reducer;
