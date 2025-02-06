import React, { useState } from "react";
import CustomNavbar from "../components/Navbar";
import { Container, Form, Button, Alert, ListGroup, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Niks");
  const [email, setEmail] = useState("johndoe@example.com");
  const [address, setAddress] = useState("1234 Elm Street");
  const [password, setPassword] = useState("password123");
  const [profilePicture, setProfilePicture] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [bookings] = useState([
    { id: 1, service: "Plumbing", provider: "John Plumbing", date: "2025-02-10", time: "10:00 AM" },
    { id: 2, service: "Cleaning", provider: "CleanCo", date: "2025-02-05", time: "2:00 PM" },
  ]);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleSaveChanges = () => {
    setShowSuccessMessage(true);
    setShowErrorMessage(false);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleLogout = () => {
    // Perform logout action (clear session, etc.)
    navigate("/login"); // Redirect to Login page
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Preview the uploaded image
    }
  };

  return (
    <>
      <CustomNavbar />
      <Container className="mt-4">
        <h3>Profile</h3>

        {showSuccessMessage && (
          <Alert variant="success">
            Changes saved successfully!
          </Alert>
        )}
        {showErrorMessage && (
          <Alert variant="danger">
            Error saving changes. Please try again.
          </Alert>
        )}

        <div className="d-flex align-items-center mb-4">
          <img
            src={profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="rounded-circle me-3"
            style={{ width: "150px", height: "150px" }}
          />
          <div>
            <input type="file" onChange={handleProfilePictureChange} />
            <p className="mt-2">Upload new profile picture</p>
          </div>
        </div>

        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="address" className="mt-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="password" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" className="mt-3" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Form>

        <h4 className="mt-4">Booking History</h4>
        <ListGroup>
          {bookings.map((booking) => (
            <ListGroup.Item key={booking.id} className="mb-3">
              <h5>{booking.service} with {booking.provider}</h5>
              <p>Date: {booking.date} | Time: {booking.time}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* Logout Button */}
        <Button variant="danger" className="mt-4" onClick={() => setShowLogoutModal(true)}>
          Logout
        </Button>
        
        {/* Logout Modal */}
        <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Logout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to log out?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default Profile;
