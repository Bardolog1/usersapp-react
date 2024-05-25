import  { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const initialFormLogin = {
  username: "",
  password: "",
};

const LoginPages = () => {

  const { handlerLogin } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState(initialFormLogin);

  const { username, password } = loginForm;

    const setData = ({ target: { name, value} }) => {    
        setLoginForm({
            ...loginForm,
            [name]: value,
        });
    };
    
   

    const onInit = (e) => {
        e.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            Swal.fire('Error', 'Los campos son obligatorios', 'error');
            return;
        }
        handlerLogin({ username, password });
        
        setLoginForm(initialFormLogin);
    };
    
  return (
    <div className="modal" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Login
            </h1>
          </div>
          <form onSubmit={onInit}>
            <div className="modal-body">
              <input
                              type="text"
                              className="form-control my-3 w-75"
                              placeholder="Username"
                              value={username}
                              id="username"
                              name="username"
                              onChange={setData}
              />
              <input
                type="password"
                className="form-control my-3 w-75"
                placeholder="Password"
                value={password}
                id="password"
                name="password"
                 onChange={setData}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                              data-bs-dismiss="modal"
                              onClick={() => setLoginForm(initialFormLogin)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Iniciar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
