import React from 'react'
import { Outlet } from 'react-router-dom'
import TopMenu from '../components/TopMenu'

function WithTopMenu() {
  return (
    <>
      <TopMenu />
      <Outlet />
    </>
  )
}

export default WithTopMenu
