import React, { useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Custom styles

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, rememberMe: !formData.rememberMe });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!validateEmail(formData.email)) {
      setError("Invalid email format.");
      return;
    }

    setLoading(true);

    // Simulate login process (replace with actual backend request)
    setTimeout(() => {
      setLoading(false);
      if (formData.email === "test@example.com" && formData.password === "password123") {
        navigate("/customer-portal"); // Redirect to Customer Portal
      } else {
        setError("Invalid email or password.");
      }
    }, 2000);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            checked={formData.rememberMe}
            onChange={handleCheckboxChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading} className="w-100">
          {loading ? <Spinner animation="border" size="sm" /> : "Login"}
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
