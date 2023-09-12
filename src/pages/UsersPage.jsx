import { useContext } from "react";
import UserModalForm from "../components/UserModalForm";
import UsersList from "../components/UsersList";
import { UserContext } from "../context/UserContext";




const UsersPage = () => {

  const { users,  visibleForm, handlerModalOpen} = useContext(UserContext);

  return (
    <>
      { !visibleForm ||
        <UserModalForm />
      }

    <div className="container my-4">
      <h2 className="text-center text-primary">Users App</h2>
      <div className="row my-4">        
        <div className="col my-2">
            <button className="btn btn-primary my-4" onClick={handlerModalOpen}>Add User</button>
            { 
              users.length > 0 ? (
                <UsersList />
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
