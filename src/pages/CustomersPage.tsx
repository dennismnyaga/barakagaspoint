import React from 'react'
import LeftNav from '../components/LeftNav'
import NavBar from '../components/NavBar'
import Customers from '../components/Customers'

const CustomersPage = () => {
  return (
    <div className='flex gap-1 bg-slate-900 text-white'>
            <div className=' w-1/6'>
                <LeftNav  />
            </div>
            <div className=' w-full'>
                <NavBar  />
                <div>
                  <Customers />
                </div>
            </div>

        </div>
  )
}

export default CustomersPage