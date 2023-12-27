/* eslint-disable prettier/prettier */
import React from "react"
import { Link } from "react-router-dom"

const SaleRecord = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        <Link to="/wholesalesrecord" className="bg-gray-200 p-4 rounded shadow-md text-center items-center">
            Whole Sales Gas
        </Link>
        <Link to="/retailsalesrecord" className="bg-gray-200 p-4 rounded shadow-md text-center items-center">
            Retail Sales
        </Link>
        
        <div className="bg-gray-200 p-4 rounded shadow-md">Other Sold</div>

        <Link to='/teamsales' className="bg-gray-200 p-4 rounded shadow-md">
          Sales Record
        </Link>
        

        <div className="bg-gray-200 p-4 rounded shadow-md">Customer</div>
      </div>

      <div className="bg-gray-800 text-white py-2 text-center">
        <Link to="/sales">Home</Link>
      </div>
    </div>
  )
}

export default SaleRecord
