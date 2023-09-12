import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const {
    initialUser,
    users,
    userSelected,
    visibleForm,
    handleAddUser,
    handleDeleteUser,
    handleUpdateUser,
    handlerModalClose,
    handlerModalOpen,
    handleChgPws,
    initialPWS,
  } = useUsers();

  return (
    <UserContext.Provider
      value={{
        initialUser,
        users,
        userSelected,
        visibleForm,
        handleAddUser,
        handleDeleteUser,
        handleUpdateUser,
        handlerModalClose,
        handlerModalOpen,
        handleChgPws,
        initialPWS,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
