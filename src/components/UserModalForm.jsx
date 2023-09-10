import React from 'react'
import UserForm from './UserForm'

const UserModalForm = ({ userSelected, handleAddUser, initialUser, handlerModalClose}) => {
  return (
    <div className="open-modal animacion fadeIn">
          <div className="modal" tabIndex="-1" style={{display:'block'} }>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title">
                    { userSelected.id <= 0 ? 'Add User' : 'Edit User'}
                  </h2>
                </div>
                <div className="modal-body">
                  <UserForm handleAddUser={handleAddUser} initialUser={initialUser} userSelected={userSelected} handlerModalClose={handlerModalClose} />
                </div>
              </div>
            </div>
            </div>
        </div>
  )
}

export default UserModalForm