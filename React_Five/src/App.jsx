import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const deleteUser = (index) => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setToggle(false);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar toggle={toggle} setToggle={setToggle} />

      <main className="mx-auto max-w-5xl px-6 py-10">
        {toggle ? (
          <UserCard users={users} onDelete={deleteUser} onEdit={startEdit} />
        ) : (
          <Form
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
          />
        )}
      </main>
    </div>
  );
};

export default App;
