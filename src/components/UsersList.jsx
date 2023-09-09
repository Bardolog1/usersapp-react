import React from "react";
import UserRow from "./UserRow";

const UsersList = ({ users, handleDeleteUser, handleUpdateUser }) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow

            name={user.name}
            lastname={user.lastname}
            email={user.email}
            key={user.id}
            id={user.id}
            handleDeleteUser={handleDeleteUser}
            handleUpdateUser={handleUpdateUser} />
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
