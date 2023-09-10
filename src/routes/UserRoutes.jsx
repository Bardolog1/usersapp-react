import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import UsersPage from '../pages/UsersPage'
import Navbar from '../components/layout/Navbar'

const UserRoutes = ({login, handlerLogout}) => {
  return (
      <>
          <Navbar login={login} handlerLogout={handlerLogout} />
          
          <Routes>
              <Route path="users" element={<UsersPage />} />
              <Route path="/" element={<Navigate to="/users" />} />
             
                
            </Routes>   
      
      </>
  )
}

export default UserRoutes