import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import UsersPage from '../pages/UsersPage'
import Navbar from '../components/layout/Navbar'
import RegisterPage from '../pages/RegisterPage'

import ChangePasswordPage from '../pages/ChangePasswordPage'
import { UserProvider } from '../context/UserProvider'


const UserRoutes = () => {
  
  

  return (
      <>
      <UserProvider>
          <Navbar/>
          
          <Routes>
              <Route path="users" element={<UsersPage/>} />
              <Route path="/" element={<Navigate to="/users" />} />
              <Route path="*" element={<h1>Not Found 404</h1>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/pwschg/:id" element={<ChangePasswordPage/>} />
             
                
            </Routes>   
            </UserProvider>
      </>
  )
}

export default UserRoutes