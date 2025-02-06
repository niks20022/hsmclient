import React, { useState } from "react";
import CustomNavbar from "../components/Navbar";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const SearchServices = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(50);
  const [rating, setRating] = useState(3);

  return (
    <>
      <CustomNavbar />
      <Container className="mt-4">
        <h3>Search Services</h3>
        <Form>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="plumbing">Plumbing</option>
                <option value="cleaning">Cleaning</option>
                <option value="electrical">Electrical</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Range value={price} onChange={(e) => setPrice(e.target.value)} />
              <p>Max Price: ${price}</p>
            </Col>
            <Col md={4}>
              <Form.Control type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
              <p>Min Rating: {rating} Stars</p>
            </Col>
          </Row>
          <Button variant="primary">Search</Button>
        </Form>
      </Container>
    </>
  );
};

export default SearchServices;
