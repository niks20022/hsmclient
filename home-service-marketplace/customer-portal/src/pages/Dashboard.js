import React from "react";
import CustomNavbar from "../components/Navbar";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  const customerName = "Niks"; // Fetch from backend in future

  return (
    <>
      <CustomNavbar />
      <Container className="mt-4 text-center">
        <h2 className="animate__animated animate__fadeIn">Welcome, {customerName}!</h2>
        <p>Select a service or view your bookings.</p>
      </Container>
    </>
  );
};

export default Dashboard;
