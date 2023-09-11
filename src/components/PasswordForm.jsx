import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PasswordForm = ({ idUser, initialPWS, handleChgPws }) => {
  const [form, setForm] = useState(initialPWS);
  const { id, passwordOld, passwordNew, passwordNew2 } = form;
    const [validPWS, setValidPWS] = useState(false);
  const [validPWS2, setValidPWS2] = useState(false);
    const [validOldPWS, setValidOldPWS] = useState(false);
    const [validationMessage, setValidationMessage] = useState({message:'Ingresa una contraseña valida',type:'danger'});
    


  const handleSubmit = (e) => {
    e.preventDefault();
    handleChgPws(form);
  };

    const handleChange = ({ target: { name, value } }) => {
      
        if (name === 'passwordOld') {
            if (value.length < 5) {
                setValidOldPWS(false);
            } else {
                setValidOldPWS(true);
            }
        }
        if (name === 'passwordNew' || name === 'passwordNew2') {
            if (value.length >= 8) {
                if (value.match(/[a-z]/g) && value.match(/[A-Z]/g) && value.match(/[0-9]/g) && value.match(/[^a-zA-Z\d]/g)) {
                    name === 'passwordNew' ? setValidPWS(true) : setValidPWS2(true);
                    setValidationMessage({ message: 'Contraseña válida', type: 'success' });
                } else {
                    name === 'passwordNew' ? setValidPWS(false) : setValidPWS2(false);
                    setValidationMessage({ message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial.', type: 'danger' });
                }
            } else {
                name === 'passwordNew' ? setValidPWS(false) : setValidPWS2(false);
                setValidationMessage({ message: 'La contraseña debe tener al menos 8 caracteres.', type: 'danger' });
            }
    
            if (name === 'passwordNew2') {
                if (value === passwordNew) {
                    setValidPWS2(true);
                    setValidationMessage({ message: 'Las contraseñas coinciden.', type: 'success' });
                } else {
                    setValidPWS2(false);
                    setValidationMessage({ message: 'Las contraseñas no coinciden.', type: 'danger' });
                }
            }
        
            if (passwordOld === passwordNew) {
                setValidPWS(false);
                setValidPWS2(false);
                setValidationMessage({ message: 'La contraseña nueva debe ser diferente a la anterior.', type: 'danger' });
            }
        
        }
    setForm({
      ...form,
      id: idUser,
      [name]: value,
    });
            
  };

  

  return (
    <>
      <form className="row g-3 needs-validation" onSubmit={handleSubmit} >
        <div className="mb-3 w-100 ">
          <label htmlFor="passwordOld" className="form-label">
            Old Password
          </label>
          <input
            type="password"
            name="passwordOld"
            className="form-control"
            id="passwordOld"
            placeholder="Enter your old password"
            value={passwordOld}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 w-100 ">
          <label htmlFor="passwordNew" className="form-label">
            New Password
          </label>
          <input
            type="password"
            name="passwordNew"
            className={"form-control" + (validPWS ? ' is-valid' : ' is-invalid')}
            id="passwordNew"
            placeholder="Enter a new password"
            value={passwordNew}
            onChange={handleChange}
            required
                  />
            <div className="invalid-feedback">
                Please provide a valid password.
            </div>
            <div className="valid-feedback">
                Looks good!
            </div>

          
        </div>

        <div className="mb-3 w-100 ">
          <label htmlFor="passwordNew2" className="form-label">
            Confirm New Password
          </label>
          <input
            type="password"
            name="passwordNew2"
            className={"form-control" + (validPWS2 ? ' is-valid' : ' is-invalid')}
            id="passwordNew2"
            placeholder="Confirm new password"
            value={passwordNew2}
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">
                Please provide a valid password.
            </div>
            <div className="valid-feedback">
                Looks good!
            </div>
              </div>
              <div className={"mb-3 card border-"+ (validationMessage.type)} >
                  <div className={"card-body text-" + (validationMessage.type)}>
                      <p className="card-text">
                            {validationMessage.message}
                      </p>
                </div>
            </div>


        <div className="mb-3 w-100 ">
                  <button type="submit" className="btn btn-primary " disabled={validPWS && validPWS2 && validOldPWS ? false : true} >
            Update Password
          </button>
        </div>
      </form>
    </>
  );
};

export default PasswordForm;
