/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css"
import HomePage from "./pages/HomePage"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import SendSmsPage from "./pages/SendSmsPage"
import CustomersPage from "./pages/CustomersPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProfilePage from "./pages/ProfilePage"
import AddProductPage from "./pages/AddProductPage"
import SalesRecordPage from "./pages/SalesRecordPage"
import WholeSaleRecordPage from "./pages/WholeSaleRecordPage"
import RetailSalesRecordPage from "./pages/RetailSalesRecordPage"
import TeamSalesPage from "./pages/TeamSalesPage"
import AssignProductPage from "./pages/AssignProductPage"
import AddCustomerPage from "./pages/AddCustomerPage"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sendsms" element={<SendSmsPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products" element={<AddProductPage />} />
          <Route path="/sales" element={<SalesRecordPage />} />
          <Route path="/wholesalesrecord" element={<WholeSaleRecordPage />} />
          <Route
            path="/retailsalesrecord"
            element={<RetailSalesRecordPage />}
          />
          <Route path="/teamsales" element={<TeamSalesPage />} />
          <Route path="/assign" element={<AssignProductPage />} />
          <Route path="/add_customer" element={<AddCustomerPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
