import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://fakestoreapi.com/users");
      setUsers(response.data);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError(err.message || "Failed to load users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        selectedUser,
        setSelectedUser,
        fetchUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
