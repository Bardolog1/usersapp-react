import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import UsersPage from '../pages/UsersPage'
import Navbar from '../components/layout/Navbar'
import RegisterPage from '../pages/RegisterPage'
import {useUsers} from "../hooks/useUsers";
import ChangePasswordPage from '../pages/ChangePasswordPage'


const UserRoutes = ({login, handlerLogout}) => {

    const {initialUser, users, userSelected, visibleForm, handleAddUser, handleDeleteUser, handleUpdateUser, handlerModalClose, handlerModalOpen, handleChgPws, initialPWS} = useUsers();
  return (
      <>
          <Navbar login={login} handlerLogout={handlerLogout} />
          
          <Routes>
              <Route path="users" element={<UsersPage
                  initialUser={initialUser}
                  users={users}
                  userSelected={userSelected}
                  visibleForm={visibleForm}
                  handleAddUser={handleAddUser}
                  handleDeleteUser={handleDeleteUser}
                  handleUpdateUser={handleUpdateUser}
                  handlerModalClose={handlerModalClose}
                  handlerModalOpen={handlerModalOpen}
                  
                  
              />} />
              <Route path="/" element={<Navigate to="/users" />} />
              <Route path="*" element={<h1>Not Found 404</h1>} />
              <Route path="/register" element={<RegisterPage handleAddUser={handleAddUser} initialUser={initialUser} />} />
              <Route path="/pwschg/:id" element={<ChangePasswordPage initialPWS={initialPWS} handleChgPws={handleChgPws} />} />
             
                
            </Routes>   
      
      </>
  )
}

export default UserRoutes