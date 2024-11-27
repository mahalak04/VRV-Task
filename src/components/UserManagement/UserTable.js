import React, { useState, useEffect } from "react";
import { getUsers, deleteUser, addUser, updateUser } from "./../../mockApi/mockApi";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // Track user being edited
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (err) {
        setError("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

  const handleAddOrEditUser = async (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email || !newUser.role) {
      setError("All fields are required");
      return;
    }

    // Editing an existing user
    if (currentUser) {
      try {
        const updatedUser = await updateUser(currentUser.id, newUser);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === currentUser.id ? updatedUser : user
          )
        );
        resetForm();
      } catch (err) {
        setError("Failed to update user");
      }
    } else {
      // Adding a new user
      try {
        const addedUser = await addUser({ ...newUser, email: newUser.email.toLowerCase() });
        setUsers((prevUsers) => [...prevUsers, addedUser]);
        resetForm();
      } catch (err) {
        setError("Failed to add user");
      }
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (err) {
      setError("Failed to delete user");
    }
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setNewUser(user);
    setShowForm(true);
  };

  const resetForm = () => {
    setNewUser({ name: "", email: "", role: "" });
    setCurrentUser(null);
    setShowForm(false);
    setError("");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">User Management</h2>
          <button
            className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
            onClick={() => setShowForm(true)}
          >
            Add User
          </button>
        </div>

        {error && (
          <div className="bg-red-500 text-white p-3 mb-4 rounded">
            <strong>Error:</strong> {error}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-gray-50 shadow-md rounded-lg">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="px-4 py-3 border">{user.name}</td>
                  <td className="px-4 py-3 border">{user.email}</td>
                  <td className="px-4 py-3 border">{user.role}</td>
                  <td className="px-4 py-3 border flex gap-2">
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                      onClick={() => handleEditUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showForm && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <h3 className="text-xl font-bold mb-4">
                {currentUser ? "Edit User" : "Add User"}
              </h3>
              <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="w-full mb-3 p-2 border rounded"
              />
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                className="w-full mb-3 p-2 border rounded"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
                <option value="Viewer">Viewer</option>
              </select>

              <div className="flex justify-end gap-2">
                <button
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={resetForm}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={handleAddOrEditUser}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserTable;
