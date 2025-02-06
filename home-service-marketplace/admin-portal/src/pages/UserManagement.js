import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/UserManagement.css"; // Ensure this file exists

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Users from Backend (Mock API for now)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // Replace with actual API URL
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Failed to load users!");
        setLoading(false);
      });
  }, []);

  // Approve Provider
  const handleApprove = (id) => {
    toast.success(`User ${id} Approved!`);
    setUsers(users.filter(user => user.id !== id)); // Simulating deletion after approval
  };

  // Reject Provider
  const handleReject = (id) => {
    toast.error(`User ${id} Rejected!`);
    setUsers(users.filter(user => user.id !== id)); // Simulating deletion after rejection
  };

  // Reset Password
  const handleResetPassword = (id) => {
    toast.info(`Password reset for User ${id}`);
  };

  return (
    <div className="container mt-4">
      <h2>User Management</h2>
      {loading ? <p>Loading...</p> : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-success btn-sm me-2" onClick={() => handleApprove(user.id)}>Approve</button>
                  <button className="btn btn-danger btn-sm me-2" onClick={() => handleReject(user.id)}>Reject</button>
                  <button className="btn btn-warning btn-sm" onClick={() => handleResetPassword(user.id)}>Reset Password</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </div>
  );
};

export default UserManagement;
