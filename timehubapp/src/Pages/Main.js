import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'

export const Main = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
