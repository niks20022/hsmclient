import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Import Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SearchServices from "./pages/SearchServices";
import MyBookings from "./pages/MyBookings";
import Profile from "./pages/Profile";
import ServiceProviderList from "./pages/ServiceManList";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes (Consider using PrivateRoute for authentication) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services" element={<SearchServices />} />
        <Route
          path="/service-providers/:serviceName"
          element={<ServiceProviderList />}
        />

        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
