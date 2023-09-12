import React, { useContext } from "react";
import UserRow from "./UserRow";
import { UserContext } from "../context/UserContext";

const UsersList = () => {

  const { users } = useContext(UserContext);

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>id</th>
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
            
          />
        ))}
      </tbody>
    </table>
  );
};

export default UsersList;
