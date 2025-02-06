import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing Router and Route components for routing
import Navbar from './components/Navbar'; // Import the Navbar component to display it across all pages
import Dashboard from './pages/Dashboard'; // Import the Dashboard page
import SearchServices from './pages/SearchServices'; // Import the SearchServices page for service search
import MyBookings from './pages/MyBookings'; // Import the MyBookings page to manage bookings
import Profile from './pages/Profile'; // Import the Profile page for user profile management

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles for UI components
import './App.css'; // Retaining your existing CSS import for styling

const App = () => {
  return (
    <Router> {/* Start of the Router which manages the navigation */}
      <Navbar /> {/* Include the Navbar at the top of each page */}
      <div className="container mt-5"> {/* Container to wrap all the content with a top margin */}
        <Routes> {/* Define the routing for each page */}
          <Route path="/" element={<Dashboard />} /> {/* Default route, loads Dashboard when visiting '/' */}
          <Route path="/services" element={<SearchServices />} /> {/* Route for services page */}
          <Route path="/my-bookings" element={<MyBookings />} /> {/* Route for bookings page */}
          <Route path="/profile" element={<Profile />} /> {/* Route for profile page */}
        </Routes>
      </div>
    </Router> // Corrected: No syntax error here
  );
}

export default App; // Export the App component so it can be used elsewhere
