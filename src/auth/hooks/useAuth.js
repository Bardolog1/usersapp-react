import { useReducer } from "react";
import Swal from "sweetalert2";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../reducers/loginActions";
import { loginReducer } from "../reducers/loginReducer";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";




const initialLogin = JSON.parse(sessionStorage.getItem("login")) ||{
    isAuthenticated: false,
    user: null,
  };

export const useAuth = () => {

    

    const [login, dispatch] = useReducer(loginReducer, initialLogin);
    const navigate = useNavigate();

    const handlerLogin = ({ username, password }) => {
        const isLogin = loginUser(username, password);

        if (!isLogin){
          Swal.fire("Error", "Usuario o contraseña incorrectos", "error");
          return;
        }
        const user = { username: 'admin' };
        dispatch({
          type: LOGIN_SUCCESS,
          cred: user,
        });
        Swal.fire("Success", "Ha iniciado Sesión", "success");
        sessionStorage.setItem("login", JSON.stringify({
          isAuthenticated: true,
          user: user,
        }));
        navigate("/users");
      };
    
      const handlerLogout = () => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
        sessionStorage.removeItem("login");
      };

    return {
        login,
        handlerLogin,
        handlerLogout
    }


}