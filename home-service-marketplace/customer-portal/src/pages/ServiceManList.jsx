import React from "react";
import { useParams } from "react-router-dom";
import CustomNavbar from "../components/Navbar";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

// Dummy data for service providers
const serviceProviders = {
  electrician: [
    { id: 1, name: "John Doe", experience: "5 years", contact: "9876543210" },
    { id: 2, name: "Mike Ross", experience: "3 years", contact: "8765432109" },
  ],
  plumber: [
    {
      id: 3,
      name: "David Smith",
      experience: "6 years",
      contact: "7654321098",
    },
    {
      id: 4,
      name: "Steve Wilson",
      experience: "4 years",
      contact: "6543210987",
    },
  ],
  cleaning: [
    { id: 5, name: "Lisa Brown", experience: "2 years", contact: "5432109876" },
  ],
};

const ServiceProviderList = () => {
  const { serviceName } = useParams();
  const providers = serviceProviders[serviceName.toLowerCase()] || [];

  return (
    <>
      <CustomNavbar />
      <Container className="mt-4">
        <h3 className="text-center">
          Available {serviceName} Service Providers
        </h3>
        <Row className="mt-3">
          {providers.length > 0 ? (
            providers.map((provider) => (
              <Col md={4} key={provider.id}>
                <Card className="p-3 shadow-lg border-0">
                  <Card.Body>
                    <h5>{provider.name}</h5>
                    <p>
                      <strong>Experience:</strong> {provider.experience}
                    </p>
                    <p>
                      <strong>Contact:</strong> {provider.contact}
                    </p>
                    <Button variant="primary">Book Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-danger">No providers available.</p>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ServiceProviderList;
