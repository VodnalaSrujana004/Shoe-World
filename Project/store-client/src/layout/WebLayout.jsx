import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Admin/Navbar'

const WebLayout = () => {
  return (
    <div className=''>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default WebLayout
