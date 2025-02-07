import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css"; // Create this file for styling
import { Form, Button, Container, Card, Alert } from "react-bootstrap";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    skills: "",
    proof: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "proof") {
      setFormData({ ...formData, proof: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address || !formData.skills || !formData.proof) {
      setError("All fields are required!");
      return;
    }

    console.log("Form Submitted", formData);
    navigate("/login"); // Redirect to Login after registration
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "30rem" }}>
        <h3 className="text-center">Service Provider Registration</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Skills (comma-separated)</Form.Label>
            <Form.Control type="text" name="skills" value={formData.skills} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Proof of Skill</Form.Label>
            <Form.Control type="file" name="proof" onChange={handleChange} required />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3 w-100">
            Register
          </Button>
        </Form>
        <p className="text-center mt-2">
          Already have an account? <a href="/login">Login</a>
        </p>
      </Card>
    </Container>
  );
};

export default Register;
