import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./pages/Dashboard";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import ServiceManagement from "./pages/ServiceManagement";
import DisputeHandling from "./pages/DisputeHandling";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />

        {/* Protected Dashboard Routes with Sidebar */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route  index path="users" element={<UserManagement />} />
          <Route path="services" element={<ServiceManagement />} />
          <Route path="disputes" element={<DisputeHandling />} />
        </Route>

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
