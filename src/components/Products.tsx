/* eslint-disable prettier/prettier */
import React, { useEffect } from "react"
import ShortCuts from "./ShortCuts"
import MakeSales from "./MakeSales"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { fetchCustomers } from "../features/customers/customerSlice"
import { fetchDebtors } from "../features/debtors/debtorsSlice"
import { fetchProducts } from "../features/product/productSlice"
import { fetchSales } from "../features/sales/salesSlice"
import { fetchSalesTeamManagement, getSalesTeamManagementStatus,  selectAllSalesTeamManagement } from "../features/salesTeam/salesTeamMabagementSlice"


// Sample data representing LPG gas cylinders from different companies


const Products = () => {
  const allTeams = useAppSelector(selectAllSalesTeamManagement);
  const allTeamsStatus = useAppSelector(getSalesTeamManagementStatus)
  const dispatch = useAppDispatch()


  console.log('allTeams ', allTeams)
  useEffect(() => {
    dispatch(fetchCustomers())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchDebtors())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  useEffect(() => {
    dispatch(fetchSales())
  }, [dispatch])


  useEffect(() => {
    dispatch(fetchSalesTeamManagement())
  }, [dispatch])


  // const groupCylindersByCompany = (): [string, Cylinder[]][] => {
  //   const groupedCylinders = cylinders.reduce<{ [key: string]: Cylinder[] }>(
  //     (acc, cylinder) => {
  //       const { name } = cylinder

  //       if (!acc[name]) {
  //         acc[name] = []
  //       }

  //       acc[name].push(cylinder)

  //       return acc
  //     },
  //     {},
  //   )

  //   return Object.entries(groupedCylinders)
  // }

  // const cylindersData = groupCylindersByCompany()


  let content;
  
  if (allTeamsStatus === "idle"){
    content = <h1>Loading...</h1>
  } else if ( allTeamsStatus === "succeeded"){
    content = allTeams.map((team) => (
      <MakeSales key={team.id} team={team} />
    ))
  }

  return (
    <div>      
      <ShortCuts />
      {content}
      {/* <div className=" grid grid-cols-2 gap-4 mt-5 mx-3">
        <div className=" bg-slate-600 rounded-sm h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          <h2 className="text-center font-semibold text-lg top-0 sticky bg-slate-600">
            Products
          </h2>
          <div className="">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Company</th>
                  <th className="border px-4 py-2">Category</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Buying Price</th>
                  <th className="border px-4 py-2">Refilling Price</th>
                </tr>
              </thead>
              <tbody>
                {cylindersData.map(([company, cylinders]) => (
                  <React.Fragment key={company}>
                    {cylinders.map((cylinder) => (
                      <tr
                        key={cylinder.category}
                        className={cylinder.quantity < 50 ? "bg-red-500" : ""}
                      >
                        <td className="border px-4 py-2">{company}</td>
                        <td className="border px-4 py-2">
                          {cylinder.category}
                        </td>
                        <td className="border px-4 py-2">
                          {cylinder.quantity}
                        </td>
                        <td className="border px-4 py-2">
                          ${cylinder.buyingPrice}
                        </td>
                        <td className="border px-4 py-2">
                          ${cylinder.refillingPrice}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" bg-slate-600 rounded-sm h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          <h2 className="text-center font-semibold text-lg top-0 sticky bg-slate-600">
            Other Related Products
          </h2>
          <div className=" space-y-5">
            <div className=" flex items-center justify-evenly border-b-2 mx-2 cursor-pointer">
              <div className=" flex gap-3 items-center">
                <img src={pro} className=" w-10 h-10  object-contain" alt=""/>
                <h6 className=" text-lg">Burner</h6>
              </div>

              <h6 className=" text-lg font-bold">Ksh 600</h6>
            </div>
            <div className=" flex items-center justify-evenly border-b-2 mx-2">
              <div className=" flex gap-3 items-center">
                <img src={pro} className=" w-10 h-10  object-contain" alt="" />
                <h6 className=" text-lg">Burner</h6>
              </div>

              <h6 className=" text-lg font-bold">Ksh 600</h6>
            </div>
            <div className=" flex items-center justify-evenly border-b-2 mx-2">
              <div className=" flex gap-3 items-center">
                <img src={pro} className=" w-10 h-10  object-contain" alt=""/>
                <h6 className=" text-lg">Burner</h6>
              </div>

              <h6 className=" text-lg font-bold">Ksh 600</h6>
            </div>
            <div className=" flex items-center justify-evenly border-b-2 mx-2">
              <div className=" flex gap-3 items-center">
                <img src={pro} className=" w-10 h-10  object-contain" alt="" />
                <h6 className=" text-lg">Burner</h6>
              </div>

              <h6 className=" text-lg font-bold">Ksh 600</h6>
            </div>
            <div className=" flex items-center justify-evenly border-b-2 mx-2">
              <div className=" flex gap-3 items-center">
                <img src={pro} className=" w-10 h-10  object-contain" alt="" />
                <h6 className=" text-lg">Burner</h6>
              </div>

              <h6 className=" text-lg font-bold">Ksh 600</h6>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Products