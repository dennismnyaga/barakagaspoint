/* eslint-disable prettier/prettier */
import React from 'react'
import LeftNav from '../components/LeftNav'
import NavBar from '../components/NavBar'
import AddProduct from '../components/AddProduct'

const AddProductPage = () => {
  return (
    <div className='flex gap-1 bg-slate-900 text-white h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
            <div className=' w-1/6'>
                <LeftNav  />
            </div>
            <div className=' w-full'>
                <NavBar  />
                <div>
                    <AddProduct />
                </div>
            </div>

        </div>
  )
}

export default AddProductPage