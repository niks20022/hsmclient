import React from "react";
import CustomNavbar from "../components/Navbar";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa"; // For star rating in reviews

const Dashboard = () => {
  const customerName = "Niks"; // Fetch from backend in future

  return (
    <>
      <CustomNavbar />

      {/* Hero Section */}
      <section className="hero bg-danger text-white py-5 text-center">
        <Container>
          <h2 className="animate__animated animate__fadeIn">
            Welcome, {customerName}!
          </h2>
          <p>
            Choose from a variety of services or manage your existing bookings.
          </p>
          <Button variant="light" size="lg" className="mt-3">
            Explore Services
          </Button>
        </Container>
      </section>

      {/* Features Section */}
      <section className=" container features py-5 bg-light">
        <Container>
          <h3 className="text-center mb-4">Our Features</h3>
          <Row>
            <Col md={4} className="mb-3">
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <h5>Reliable Service Providers</h5>
                  <p>
                    We connect you with trusted professionals for all your home
                    service needs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <h5>Instant Booking</h5>
                  <p>
                    Book services instantly with just a few clicks, at your
                    preferred time.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <h5>Affordable Pricing</h5>
                  <p>
                    Get high-quality services at affordable rates, with no
                    hidden charges.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Reviews Section */}
      <section className="reviews py-5 bg-secondary">
        <Container>
          <h3 className="text-center mb-4">What Our Customers Are Saying</h3>
          <Row>
            <Col md={4} className="mb-3">
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <FaStar size={24} color="#FFD700" />
                  <h5>John Doe</h5>
                  <p>
                    "The service was amazing! The plumber arrived on time and
                    did a fantastic job."
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <FaStar size={24} color="#FFD700" />
                  <h5>Jane Smith</h5>
                  <p>
                    "Highly recommended! The cleaning service was top-notch, and
                    the team was professional."
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card className="text-center shadow-sm border-0">
                <Card.Body>
                  <FaStar size={24} color="#FFD700" />
                  <h5>Michael Johnson</h5>
                  <p>
                    "Affordable and reliable. The electrician fixed everything
                    quickly and efficiently."
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us py-5 bg-light">
        <Container>
          <h3 className="text-center mb-4">Get in Touch</h3>
          <Row className="justify-content-center">
            <Col md={6}>
              <h5>Have a Question? Contact Us!</h5>
              <p>
                We're here to help. Reach out to us for support, inquiries, or
                any questions you might have.
              </p>
              <Button variant="primary">Contact Support</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
