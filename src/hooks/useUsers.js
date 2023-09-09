import { userReducer } from "../reducer/userReducer";
import { ADD_USER, DELETE_USER, UPDATE_USER } from "../reducer/userActions";
import { useReducer, useState } from "react";
import Swal from "sweetalert2";




const initialUsers = [
  {
    id: 1,
    name: "John",
    lastname: "Doe",
    password: "123456",
    email: "jhondoe@example.com",
    date: "2021-09-01"

  },
  {
    id: 2,
    name: "Jane",
    lastname: "Doe",
    password: "123456",
    email: "janedoe@example.com",
    date: "2021-09-09"
  },
];

const initialUser = {
  id: 0,
  name: "",
  lastname: "",
  email: "",
  password: "",
  date: ""
}

const sessionDataUsers = JSON.parse(sessionStorage.getItem("users"));

export const useUsers = () => {
  const [users, dispatch] = useReducer(userReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUser);
  const [visibleForm, setVisibleForm] = useState(false);

  const handleAddUser = (user) => {

    dispatch({
      type: user.id === 0? ADD_USER : UPDATE_USER,
      payload: user,
    });
   

    Swal.fire(
      (user.id === 0) ? 'UsuarioCreado!' : 'Usuario Actualizado!',
      (user.id === 0) ? 'Se ha creado el usuario exitosamente!' : 'Se ha actualizado el usuario exitosamente!',
      'success'
    )
    setVisibleForm(false);
    setUserSelected(initialUser);
  }

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: '¿Seguro de Eliminar?',
      text: "Estas seguro de eliminar a este usuario?",
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: DELETE_USER,
          payload: id,
        });
        Swal.fire(
          'Eliminado!',
          'Has Eliminado un usuario del sistema.',
          'success'
        )
        
      }
    })
    
  }

  const handleUpdateUser = (user) => {
    setVisibleForm(true);
    setUserSelected({ ...user });
  }

  const handlerModalClose = () => {
    setVisibleForm(false);
    setUserSelected(initialUser);
  }

  const handlerModalOpen = () => {
    setVisibleForm(true);
  }


  return {
    initialUser,
    users,
    userSelected,
    visibleForm,
    handleAddUser,
    handleDeleteUser,
    handleUpdateUser,
    handlerModalClose,
    handlerModalOpen


  };
}