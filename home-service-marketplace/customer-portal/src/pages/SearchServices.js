import React, { useState } from "react";
import CustomNavbar from "../components/Navbar";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import ServiceCard from "../components/ServiceCard";
import plumber from '../assets/plumber.png'
import electrician from "../assets/electrician.jpg";


const services = [
  {
    id: 1,
    name: "Electrician",
    category: "Electrical",
    price: 100,
    rating: 4.5,
    image: plumber,
  },
  {
    id: 2,
    name: "Plumber",
    category: "Plumbing",
    price: 80,
    rating: 4.2,
    image: electrician,
  },
  {
    id: 3,
    name: "House Cleaning",
    category: "Cleaning",
    price: 70,
    rating: 4.0,
    image:plumber,
  },
  {
    id: 4,
    name: "Cook",
    category: "Cooking",
    price: 90,
    rating: 4.3,
    image: electrician,
  },
  {
    id: 5,
    name: "Carpenter",
    category: "Woodwork",
    price: 120,
    rating: 4.6,
    image: plumber,
  },
];

const SearchServices = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(50);
  const [rating, setRating] = useState(3);
  const [filteredServices, setFilteredServices] = useState(services);

  const handleSearch = () => {
    const filtered = services.filter(
      (service) =>
        (category
          ? service.category.toLowerCase() === category.toLowerCase()
          : true) &&
        service.price <= price &&
        service.rating >= rating
    );
    setFilteredServices(filtered);
  };

  return (
    <>
      <CustomNavbar />
      <Container className="mt-4">
        {/* Search Form */}
        <Card className="shadow-lg p-4 border-2 bg-warning">
          <Card.Body>
            <h3 className="text-center text-black mb-4">Search Services</h3>
            <Form>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-bold">Select Category</Form.Label>
                    <Form.Select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border-primary"
                    >
                      <option value="">Choose...</option>
                      <option value="electrical">Electrical</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="cleaning">Cleaning</option>
                      <option value="cooking">Cooking</option>
                      <option value="woodwork">Carpentry</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-bold">
                      Max Price: ${price}
                    </Form.Label>
                    <Form.Range
                      min={50}
                      max={200}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="border-primary"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-bold">Min Rating</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      max="5"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      className="border-primary"
                    />
                    <p className="mt-1 text-muted">⭐ {rating} Stars</p>
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center">
                <Button
                  variant="primary"
                  className="px-4"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>

        {/* Service List */}
        <Container className="mt-4">
          <h3 className="text-center mb-4">Available Services</h3>
          <Row>
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <ServiceCard key={service.id} provider={service} />
              ))
            ) : (
              <p className="text-center text-danger">No services found.</p>
            )}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default SearchServices;
