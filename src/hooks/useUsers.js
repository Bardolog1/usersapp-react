import { userReducer } from "../reducer/userReducer";
import { ADD_USER, DELETE_USER, UPDATE_USER, UPDATE_PWS_USER } from "../reducer/userActions";
import { useReducer, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




const initialUsers = JSON.parse(sessionStorage.getItem("users")) || [
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

const initialUser= {
  id: 0,
  name: "",
  lastname: "",
  email: "",
  password: "",
  date: ""
}

const initialPWS = {
  id: 0,
  passwordOld: "",
  passwordNew: "",
  passwordNew2: ""
}



export const useUsers = () => {
  const [users, dispatch] = useReducer(userReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initialUser);
  const [visibleForm, setVisibleForm] = useState(false);
  const navigate = useNavigate();
  

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
    navigate("/users");
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

  const handleChgPws = ({ id, passwordOld, passwordNew, passwordNew2 }) => {
    
    if (passwordNew.trim() !== passwordNew2.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden!',
        footer: '<a href>Why do I have this issue?</a>'
      })
      return;
    } 

      const us = users.find((us) => us.id === Number(id));

      if (us === undefined) {
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'El usuario no existe!',
          
        })
        return;
      }

      if (us.password !== passwordOld) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La contraseña actual no coincide!',
          footer: '<a href>Why do I have this issue?</a>'
        })
        return;
      }

      dispatch({
        type: UPDATE_PWS_USER,
        payload: {id: Number(id), passwordOld, passwordNew }
      });
    
      Swal.fire({
        icon: 'success',
        title: 'Contraseña Actualizada!',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/users");
    
  }


  return {
    initialUser,
    initialPWS,
    users,
    userSelected,
    visibleForm,
    handleAddUser,
    handleDeleteUser,
    handleUpdateUser,
    handlerModalClose,
    handlerModalOpen,
    handleChgPws


  };
}