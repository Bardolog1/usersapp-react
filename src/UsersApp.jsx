import React, {useContext} from "react";
import LoginPages from "./auth/pages/LoginPages";
import { Navigate, Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import { AuthContext } from "./auth/context/AuthContext";

const UsersApp = () => {
  
  const { login } = useContext(AuthContext);
  
  return (
    
    <Routes>
      { login.isAuthenticated
          ?
          (
            <>
            <Route path="/*" element={<UserRoutes/>} />
            
            </>
          )
        : <>
          <Route path="/login" element={<LoginPages/>} />
          <Route path="/*" element={<Navigate to="/login"/>} />
          </> }  
      </Routes>
    
  );
};

export default UsersApp;
