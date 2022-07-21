import { CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Home from './home'



const Layout = () => {
    return (
        <>
        <CssBaseline/>
            <Navbar />
            <Outlet />
           
        </>
    )
}

export default Layout;