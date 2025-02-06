import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar";


const Dashboard = () => {
    return (
      <div className="dashboard-container">
        {/* Sidebar Component */}
        <Sidebar />
        
        <div className="dashboard-content">
          <h2>Admin Dashboard</h2>
          {/* Add your dashboard content here */}
        </div>
      </div>
    );
  };
  
  export default Dashboard;