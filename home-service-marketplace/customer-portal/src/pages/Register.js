import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
  Card,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [success, setSuccess] = useState("");

  const states = ["New York", "California", "Texas", "Florida", "Illinois"];

  const onSubmit = async (data) => {
    setSuccess("");
    setTimeout(() => {
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000);
    }, 2000);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        className="p-4 shadow-lg"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Register</h2>
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                    isInvalid={!!errors.fullName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullName?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a strong password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Must be at least 8 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Must include a number and special character",
                  },
                })}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                    {...register("city", { required: "City is required" })}
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Select
                    {...register("state", { required: "State is required" })}
                    isInvalid={!!errors.state}
                  >
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.state?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ZIP code"
                {...register("zip", {
                  required: "Zip Code is required",
                  pattern: {
                    value: /^\d{5}$/,
                    message: "Must be a 5-digit number",
                  },
                })}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid">
                {errors.zip?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              className="w-100"
            >
              {isSubmitting ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Register"
              )}
            </Button>
          </Form>

          <div className="text-center mt-3">
            <p>
              Already registered?{" "}
              <Button
                variant="link"
                className="p-0"
                onClick={() => navigate("/login")}
              >
                Login Here
              </Button>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
