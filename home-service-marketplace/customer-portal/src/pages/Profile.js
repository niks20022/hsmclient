import React, { useState } from "react";
import CustomNavbar from "../components/Navbar";
import profile from "../images/profile.png";
import {
  Container,
  Form,
  Button,
  Alert,
  ListGroup,
  Modal,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Niks");
  const [email, setEmail] = useState("johndoe@example.com");
  const [address, setAddress] = useState("1234 Elm Street");
  const [password, setPassword] = useState("password123");
  const [profilePicture, setProfilePicture] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [bookings] = useState([
    {
      id: 1,
      service: "Plumbing",
      provider: "John Plumbing",
      date: "2025-02-10",
      time: "10:00 AM",
    },
    {
      id: 2,
      service: "Cleaning",
      provider: "CleanCo",
      date: "2025-02-05",
      time: "2:00 PM",
    },
  ]);

  const handleSaveChanges = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <CustomNavbar />
      <Container className="d-flex justify-content-center align-items-start mt-5 gap-4 flex-wrap">
        <Card
          className="p-4 shadow-lg bg-warning"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <h3 className="text-center">Profile</h3>
          {showSuccessMessage && (
            <Alert variant="success">Changes saved successfully!</Alert>
          )}
          <div className="d-flex flex-column align-items-center mb-3">
            <img
              src={profile || "https://via.placeholder.com/150"}
              alt="Profile"
              className="rounded-circle mb-2"
              style={{ width: "120px", height: "120px" }}
            />
            <input
              type="file"
              onChange={handleProfilePictureChange}
              className="form-control"
            />
          </div>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="address" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              className="mt-3 w-100"
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          </Form>
        </Card>

        <Card
          className="p-4 shadow-lg bg-success"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <h4 className="text-center text-white">Booking History</h4>
          <ListGroup>
            {bookings.map((booking) => (
              <ListGroup.Item key={booking.id}>
                <strong>{booking.service}</strong> with {booking.provider}
                <br />
                <small>
                  Date: {booking.date} | Time: {booking.time}
                </small>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Container>

      <div className="d-flex justify-content-center m-4">
        <Button variant="danger" onClick={() => setShowLogoutModal(true)}>
          Logout
        </Button>
      </div>

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
    </>
  );
};

export default Profile;
