import React from 'react'
import Layout from './LoginRegistration/pages/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './LoginRegistration/pages/home'
import Contact from './LoginRegistration/pages/Contact'
import LoginReg from './LoginRegistration/pages/auth/LoginReg'
import SendPasswordResetEmail from './LoginRegistration/pages/auth/SendPasswordResetEmail'
import Dashboard from './LoginRegistration/pages/Dashboard'

const AppLogin = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='login' element={<LoginReg/>}/>
                    <Route path='sendpasswordresetemail' element={<SendPasswordResetEmail />} />
                </Route>
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </>
    )
}
export default AppLogin