/* eslint-disable prettier/prettier */
import React from "react"
import NavBar from "../components/NavBar"
import LeftNav from "../components/LeftNav"
import Products from "../components/Products"
import { useAppSelector } from "../app/hooks"
import { selectIsAuthenticated } from "../features/auths/authSlice"
import { Link } from "react-router-dom"
import Login from "../components/Login"
import { useMediaQuery } from 'react-responsive'

const HomePage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  return (
    <div>
      {isDesktopOrLaptop ? (
        <>
          {isAuthenticated ? (
        <div className="flex gap-1 bg-slate-900 text-white h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          <div className=" w-1/6">
            <LeftNav />
          </div>
          <div className=" w-full">
            <NavBar />
            <div>
              <Products />
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <Login />
        </div>
      )}
        </>
      ) : (
        <div className=" h-screen flex items-center justify-center">
          <h2 className=" ">Not Compatible with Mobile, Use a laptop or desktop</h2>
        </div>
        
      )}
      
    </div>

  )
}

export default HomePage
