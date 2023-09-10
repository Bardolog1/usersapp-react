import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const UserForm = ({ handleAddUser, initialUser, userSelected, handlerModalClose }) => {

    const [userForm, setUserForm] = useState(initialUser) 

    useEffect(() => {   
        setUserForm({ ...userSelected, password: "" });
    }, [userSelected])


    const onInputChange = ({target}) => {
        const { name, value } = target;
        setUserForm({
            ...userForm,
            [name]: value,
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(!name || !lastname || !email || (!password && id===0)){
            Swal.fire(
                'Error de datos',
                'Debe completar todos los campos',
                'question'
              )
            return;
        }
        handleAddUser(userForm);
        setUserForm(initialUser);
    }

    const cancelOP = () => {
        setUserForm(initialUser);   
        handlerModalClose();
    }

    const {id,date, name, lastname, email, password } = userForm;

  return (
    
      <form onSubmit={ onSubmit}>
          <div className="mb-3">
              <label htmlFor="name" className="form-label">
                  Name
              </label>
              <input
                 autoComplete="off"
                  type="text"
                  className="form-control wy-3 w-75"
                  id="name"
                  name="name"
                  placeholder="Enter a name"
                  value={name}
                  onChange={onInputChange}
              />
          </div>
          <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                  Lastname
              </label>
              <input
                  autoComplete="off"
                  type="text"
                  className="form-control wy-3 w-75"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter a lastname"
                  value={lastname}
                  onChange={onInputChange}

              />
          </div>
          <div className="mb-3">
              <label htmlFor="email" className="form-label">
                  Email
              </label>
              <input
                  autoComplete="off"
                  type="email"
                  className="form-control wy-3 w-75"
                  id="email"
                  name="email"
                  placeholder="Enter a email"
                  value={email}
                  onChange={onInputChange}

              />  
          </div>
          { id>0 ||
          <div className= "mb-3">
              <label htmlFor="password"
                  className="form-label" >
                  Password
              </label>
              <input
                  autoComplete="off"
                  type="password"
                  className="form-control wy-3 w-75"
                  id="password"
                  name="password"
                  disabled={id>0}
                  placeholder="Enter a password"
                  value={password}
                  onChange={onInputChange}

              />  
          </div>}
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="date" value={date} />
          <div className="mb-3 w-100 ">  
              <button type="submit" className="btn btn-primary ">
                  {id>0 ? "Update" : "Create"}
              </button>
               <button type="button" className="btn btn-danger mx-3" onClick={cancelOP}>
                  Cancel
              </button>
          </div>
          

              
        </form>
    
  )
}

export default UserForm