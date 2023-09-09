import UserForm from "./components/UserForm";
import UsersList from "./components/UsersList";
import {useUsers} from "./hooks/useUsers";




const UsersApp = () => {

  const {initialUser, users, userSelected, visibleForm, handleAddUser, handleDeleteUser, handleUpdateUser, handlerModalClose, handlerModalOpen} = useUsers();
  

  return (
    <div className="container my-4">
      <h2 className="text-center text-primary">Users App</h2>

      <div className="row my-4">
        {!visibleForm ||
          <div className="col my-2">
            <UserForm handleAddUser={handleAddUser} initialUser={initialUser} userSelected={userSelected} handlerModalClose={ handlerModalClose} />
          </div>}
        
        <div className="col my-2">
          {visibleForm ||
            <button className="btn btn-primary my-4" onClick={handlerModalOpen}
            >
              Add User
            </button>
          }
          { 
            users.length > 0 ? (
              <UsersList users={users} handleDeleteUser={handleDeleteUser} handleUpdateUser={ handleUpdateUser} />
            ) : (
              <div className="alert alert-warning">No hay usuarios en el sistemas</div>
            )
          }
          
        </div>
      </div>

    </div>
  );
};

export default UsersApp;
