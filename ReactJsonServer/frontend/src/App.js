import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [users, setUsers] = useState();

  async function createUser() {
    let res = await axios.post("http://localhost:5000/users", {
      id: 12,
      name: "New Name",
    });
    console.log(res);
  }

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  return (
    <div className="App">
      <button onClick={createUser}> Add new User</button>
      {users &&
        users.map((item, i) => {
          return (
            <p>
              {item.id}--{item.name}
            </p>
          );
        })}
    </div>
  );
}
