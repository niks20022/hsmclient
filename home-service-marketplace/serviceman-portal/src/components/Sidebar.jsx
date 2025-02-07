// src/components/Sidebar.js
import { Button } from "bootstrap";
import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <Nav.Link as={NavLink} to="/dashboard" end>
          Dashboard
        </Nav.Link>
        <Nav.Link as={NavLink} to="/dashboard/manage-services">
          {" "}
          {/* ✅ Relative Path */}
          Manage Services
        </Nav.Link>
        <Nav.Link as={NavLink} to="/dashboard/booking-requests">
          {" "}
          {/* ✅ Relative Path */}
          Booking Requests
        </Nav.Link>
        <Nav.Link as={NavLink} to="/dashboard/profile">
          {" "}
          {/* ✅ Relative Path */}
          Profile
        </Nav.Link>
        <Nav.Link as={NavLink} to="/login">
          Logout
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
