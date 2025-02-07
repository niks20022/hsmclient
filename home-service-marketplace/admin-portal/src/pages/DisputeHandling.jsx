import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/DisputeHandling.css";

const DisputeHandling = () => {
  const [disputes, setDisputes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Disputes from Backend (Mock API for now)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments") // Replace with actual API URL
      .then((response) => {
        setDisputes(response.data.slice(0, 10)); // Taking 10 disputes as example
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Failed to load disputes!");
        setLoading(false);
      });
  }, []);

  // Mark Dispute as Resolved
  const handleResolve = (id) => {
    toast.success(`Dispute ${id} marked as resolved`);
    setDisputes(disputes.map(d => d.id === id ? { ...d, status: "Resolved" } : d));
  };

  // Escalate Dispute
  const handleEscalate = (id) => {
    toast.warning(`Dispute ${id} escalated`);
  };

  // Update Dispute Status
  const handleStatusUpdate = (id) => {
    toast.info(`Status updated for dispute ${id}`);
  };

  return (
    <div className="container mt-4">
      <h2>Dispute Handling</h2>
      {loading ? <p>Loading...</p> : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Provider</th>
              <th>Customer</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((dispute) => (
              <tr key={dispute.id}>
                <td>{dispute.id}</td>
                <td>Provider {dispute.id}</td>
                <td>Customer {dispute.id}</td>
                <td>{dispute.body}</td>
                <td>{dispute.status || "Pending"}</td>
                <td>
                  <button className="btn btn-success btn-sm m-1" onClick={() => handleResolve(dispute.id)}>Resolve</button>
                  <button className="btn btn-warning btn-sm m-1" onClick={() => handleEscalate(dispute.id)}>Escalate</button>
                  <button className="btn btn-info btn-sm m-1" onClick={() => handleStatusUpdate(dispute.id)}>Update Status</button>
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

export default DisputeHandling;
