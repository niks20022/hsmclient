// src/pages/Dashboard.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ManageServices from './ManageServices';
import BookingRequests from './BookingRequests';
import Profile from './Profile';
import '../styles/Dashboard.css'; // Import the custom styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="content">
        {/* Header with greeting */}
         

        {/* Dashboard Summary Cards (Earnings, Completed Bookings, etc.) */}
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Total Earnings</h3>
            <div className="card-value">$1200</div>
            <div className="progress-bar" style={{ width: '70%' }}></div>
          </div>
          <div className="dashboard-card">
            <h3>Completed Bookings</h3>
            <div className="card-value">45</div>
            <div className="progress-bar" style={{ width: '50%' }}></div>
          </div>
          <div className="dashboard-card">
            <h3>Active Bookings</h3>
            <div className="card-value">8</div>
            <div className="progress-bar" style={{ width: '80%' }}></div>
          </div>
        </div>

        {/* Render different sections based on routes */}
        <Routes>
          <Route path="/dashboard" element={<h2>Welcome to Dashboard</h2>} />
          <Route path="/manage-services" element={<ManageServices />} />
          <Route path="/booking-requests" element={<BookingRequests />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
