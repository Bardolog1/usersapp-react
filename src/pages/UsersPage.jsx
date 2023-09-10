import LoginPages from "../auth/pages/LoginPages";
import UserModalForm from "../components/UserModalForm";
import UsersList from "../components/UsersList";




const UsersPage = ({initialUser, users, userSelected, visibleForm, handleAddUser, handleDeleteUser, handleUpdateUser, handlerModalClose, handlerModalOpen, handlerChgPws}) => {

  

  return (
    <>
      { !visibleForm ||
        <UserModalForm userSelected={userSelected} handleAddUser={handleAddUser} initialUser={initialUser} handlerModalClose={handlerModalClose} />
      }

    <div className="container my-4">
      <h2 className="text-center text-primary">Users App</h2>
      <div className="row my-4">        
        <div className="col my-2">
            <button className="btn btn-primary my-4" onClick={handlerModalOpen}>Add User</button>
            { 
              users.length > 0 ? (
                <UsersList users={users} handleDeleteUser={handleDeleteUser} handleUpdateUser={handleUpdateUser} handlerChgPws={ handlerChgPws} />
              ) : (
                <div className="alert alert-warning">No hay usuarios en el sistemas</div>
              )
            }
        </div>
      </div>

  </div>
  </>
  );
};

export default UsersPage;
