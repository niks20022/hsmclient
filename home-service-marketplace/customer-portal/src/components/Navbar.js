import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Home Service Marketplace</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Dashboard</Link> {/* Link to Dashboard */}
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link> {/* Link to SearchServices */}
            </li>
            <li className="nav-item">
              <Link to="/my-bookings" className="nav-link">My Bookings</Link> {/* Link to MyBookings */}
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Profile</Link> {/* Link to Profile */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
