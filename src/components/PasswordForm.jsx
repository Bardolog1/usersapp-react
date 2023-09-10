import React, { useState } from 'react'




const PasswordForm = ({ idUser, initialPWS, handleChgPws}) => {

    const [form, setForm] = useState(initialPWS);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChgPws(form);
    }

    const handleChange = ({target:{ name, value} } ) => {
        
        setForm({
            ...form,
            id: idUser,
            [name]: value
        })
    }

    const {id, passwordOld, passwordNew, passwordNew2 } = form;

   



  return (
      <>
          <form className="row g-3" onSubmit={handleSubmit}>
              
              <div className="mb-3 w-100 ">  
                  <label htmlFor="passwordOld" className="form-label">Old Password</label>
                  <input
                      type="text"
                      name="passwordOld"
                      className="form-control"
                      id="passwordOld"
                      placeholder="Enter your old password"
                      value={passwordOld}
                      onChange={handleChange}

                  />
              </div>

               <div className="mb-3 w-100 "> 
                  <label htmlFor="passwordNew" className="form-label">New Password</label>
                  <input
                      type="text"
                      name="passwordNew"
                      className="form-control"
                      id="passwordNew"
                      placeholder="Enter a new password"
                    value={passwordNew}
                      onChange={handleChange}
                  
                  />
              </div>
              
                  <div className="mb-3 w-100 ">  
                  <label htmlFor="passwordNew2" className="form-label">Confirm New Password</label>
                  <input
                      type="text"
                        name='passwordNew2'
                      className="form-control"
                      id="passwordNew2"
                      placeholder="Confirm new password"
                    value={passwordNew2}
                      onChange={handleChange}
                  />
                  </div>
                  
              
                  <div className="mb-3 w-100 ">  
                  <button type="submit" className="btn btn-primary">Update Password</button>
                  </div>

              
            </form>
      </>
  )
}

export default PasswordForm