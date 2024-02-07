import React from 'react'
import { Outlet } from 'react-router-dom'

function WithOutTopMenu() {
  return (
    <Outlet />
  )
}

export default WithOutTopMenu
