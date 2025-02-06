import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Hero.css"; // Custom styles

const Hero = () => {
  return (
    <div className="hero-section text-center">
      <Container>
        <h1>Welcome to Home Service Marketplace</h1>
        <p>Secure & Reliable Services at Your Fingertips</p>
        <div>
          <Button href="/login" variant="primary" className="me-3">
            Login
          </Button>
          <Button href="/register" variant="success">
            Register
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
