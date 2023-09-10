import React from "react";
import UsersPage from "./pages/UsersPage";
import LoginPages from "./auth/pages/LoginPages";
import Navbar from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";

const UsersApp = () => {
  
  const { login, handlerLogin, handlerLogout } = useAuth(); 
  
  return (
    <Routes>
      { login.isAuthenticated
          ?
          (
            <>
            <Route path="/*" element={<UserRoutes login={login} handlerLogout={handlerLogout} />} />
            
            </>
          )
        : <>
          <Route path="/login" element={<LoginPages handlerLogin={handlerLogin} />} />
          <Route path="/*" element={<Navigate to="/login"/>} />
          </> }  
    </Routes>
  );
};

export default UsersApp;
