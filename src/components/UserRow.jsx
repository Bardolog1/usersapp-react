import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const UserRow = ({ id, name, lastname, email  }) => {
    
    const { handleDeleteUser, handleUpdateUser } = useContext(UserContext);   
    const navigate = useNavigate();

    const deleteUser = (e) => {
        e.preventDefault();
        handleDeleteUser(id);
    }

    const updateUser = (e) => {
        e.preventDefault();
        handleUpdateUser(
            {
                id,
                name,
                lastname,
                email,
                date: '',
                password: ''
                
            }
        );

    }



  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{lastname}</td>
        <td>{email}</td>
        <td>

        <div className="btn-group  ">
            <button type="button" className="btn btn-info">Action</button>
            <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
                <ul className="dropdown-menu">
                  <li className=" dropdown-item">
                    <button
                        className="btn btn-sm btn-outline-success text-center mx-1 w-100"
                        type="button"
                        onClick={updateUser}
                    >Update
                    </button>
                </li>
                    
                <li><hr className="dropdown-divider" /></li>
                <li className=" dropdown-item">
                          <NavLink className="btn btn-sm btn-outline-primary text-center mx-1 w-100"
                              to={"/pwschg/"+id}
                          >Change Password</NavLink>

                </li>
                    
                <li><hr className="dropdown-divider" /></li>
                    
                <li className="dropdown-item">
                    <button
                        className="btn btn-sm btn-outline-danger mx-1 w-100"
                        type="button"
                        onClick={deleteUser}
                    >Delete</button>
                </li>
            </ul>
        </div>
            

        </td>
    </tr>
  )
}

export default UserRow;