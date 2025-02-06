import React, { useState } from "react";
import CustomNavbar from "../components/Navbar";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";

const SearchServices = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(50);
  const [rating, setRating] = useState(3);

  return (
    <>
      <CustomNavbar />
      <Container className="mt-4">
        <Card
          className="shadow-lg p-4 border-2 bg-warning"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <Card.Body>
            <h3 className="text-center text-black mb-4">Search Services</h3>
            <Form>
              <Row className="mb-3">
                {/* Category Selection */}
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-bold ">
                      Select Category
                    </Form.Label>
                    <Form.Select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="border-primary"
                    >
                      <option value="">Choose...</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="cleaning">Cleaning</option>
                      <option value="electrical">Electrical</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                {/* Price Range */}
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-bold">
                      Max Price: ${price}
                    </Form.Label>
                    <Form.Range
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="border-primary"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                {/* Rating Input */}
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-bold">
                      Min Rating
                    </Form.Label>
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
                <Button variant="primary" className="px-4">
                  Search
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default SearchServices;
