// src/layouts/DashboardLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css"; // Ensure styles for layout

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      {/* Sidebar (Static) */}
      <Sidebar />

      {/* Right Content Area */}
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>Welcome to the Dashboard</h2>
          <button className="btn">Logout</button>
        </div>

        {/* Dynamic Content from Routes */}
        <div className="dashboard-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
