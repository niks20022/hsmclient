import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ServiceManagement.css"; 

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Services from Backend (Mock API for now)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // Replace with actual API URL
      .then((response) => {
        setServices(response.data.slice(0, 10)); // Taking 10 services as example
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Failed to load services!");
        setLoading(false);
      });
  }, []);

  // Edit Service
  const handleEdit = (id) => {
    toast.info(`Editing service ${id}`);
  };

  // Delete Service
  const handleDelete = (id) => {
    toast.error(`Service ${id} deleted!`);
    setServices(services.filter(service => service.id !== id)); // Remove from UI
  };

  // Notify Provider
  const handleNotifyProvider = (id) => {
    toast.warning(`Provider notified about service ${id}`);
  };

  return (
    <div className="container mt-4">
      <h2>Service Management</h2>
      {loading ? <p>Loading...</p> : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Service Name</th>
              <th>Provider</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.title}</td>
                <td>Provider {service.id}</td>
                <td>${service.id * 10}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(service.id)}>Edit</button>
                  <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(service.id)}>Delete</button>
                  <button className="btn btn-warning btn-sm" onClick={() => handleNotifyProvider(service.id)}>Notify Provider</button>
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

export default ServiceManagement;
