import React from 'react'
import LeftNav from '../components/LeftNav'
import NavBar from '../components/NavBar'
import AssignProducts from '../components/AssignProducts'

const AssignProductPage = () => {
  return (
    <div className='flex gap-1 bg-slate-900 text-white'>
            <div className=' w-1/6'>
                <LeftNav  />
            </div>
            <div className=' w-full'>
                <NavBar  />
                <div>
                  <AssignProducts />
                </div>
            </div>

        </div>
  )
}

export default AssignProductPage