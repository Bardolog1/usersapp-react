import React, { useEffect } from 'react'
import PasswordForm from '../components/PasswordForm'
import { useParams } from 'react-router-dom'

const ChangePasswordPage = ({initialPWS, handleChgPws}) => {
    const { id } = useParams(); //obtenemos el id de la url
    
   
    

  return (
      <>    
          <div className="container">
              <h4 className="text-center text-primary my-5"
              >Change Password Page</h4>
              <div className="row justify-content-center my-5">
                  <div className="col-md-6">
                      
                      <PasswordForm idUser={id}  initialPWS={initialPWS} handleChgPws={ handleChgPws} />
                  </div>
            </div>      
                  </div>   
      </>
  )
}

export default ChangePasswordPage