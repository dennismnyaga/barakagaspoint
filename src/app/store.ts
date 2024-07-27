import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import customerReducer from "../features/customers/customerSlice"
import debtorsReducer from "../features/debtors/debtorsSlice"
import locationsReducer from "../features/location/locationSlice"
import productsReducer from "../features/product/productSlice"
import assignedProductsReducer from "../features/product/assignedProductsSlice"
import salesReducer from "../features/sales/salesSlice"
import authReducer from "../features/auths/authSlice"
import salesTeamReducer from "../features/salesTeam/salesTeamSlice"
import salesTeamManagementReducer from "../features/salesTeam/salesTeamMabagementSlice"
import employeesReducer from "../features/employees/employeesSlice"

export const store = configureStore({
  reducer: {
    customers: customerReducer,
    debtors: debtorsReducer,
    locations: locationsReducer,
    products: productsReducer,
    assignedProducts: assignedProductsReducer,
    sales: salesReducer,
    auth: authReducer,
    salesTeam: salesTeamReducer,
    salesTeamManagement: salesTeamManagementReducer,
    employees: employeesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
