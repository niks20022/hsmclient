import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardLayout = () => {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <Outlet /> {/* This will render the selected page */}
      </div>
    </div>
  );
};

export default DashboardLayout;
