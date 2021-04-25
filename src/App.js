import React, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUsers = user => {
    setUsers(prevState => [
      ...prevState,
      { ...user, id: Math.random().toString() }
    ]);

    console.log(users);
  };

  return (
    <div>
      <AddUsers onUserAdd={addUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
