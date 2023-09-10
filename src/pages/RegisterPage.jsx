import React, { useState } from 'react'
import UserForm from '../components/UserForm'

const RegisterPage = ({ handleAddUser, initialUser }) => {

    const [userSelected, setUserSelected] = useState(initialUser);

  return (
      <div className="container  w-100 ">
          <h4 className="text-center text-primary my-5"
          >Register Page</h4>
          <div className="row justify-content-center my-5">
              <div className="col-md-6">
                  <UserForm userSelected={userSelected} handleAddUser={handleAddUser} initialUser={initialUser}/>
              </div>
          </div>
        </div>
  )
}

export default RegisterPage