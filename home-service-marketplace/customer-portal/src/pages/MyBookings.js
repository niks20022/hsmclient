import React, { useState } from "react";
import CustomNavbar from "../components/Navbar";
import { Container, Button, ListGroup, Modal, Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([
    { id: 1, service: "Plumbing", provider: "John Plumbing", status: "Active", date: "2025-02-10", time: "10:00 AM", price: "$50" },
    { id: 2, service: "Cleaning", provider: "CleanCo", status: "Completed", date: "2025-02-05", time: "2:00 PM", price: "$40" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleCancelBooking = (bookingId) => {
    setBookings(bookings.filter(booking => booking.id !== bookingId));
  };

  const handleRescheduleBooking = (booking) => {
    setCurrentBooking(booking);
    setShowModal(true);
  };

  const handleSubmitReschedule = () => {
    setBookings(bookings.map(booking =>
      booking.id === currentBooking.id
        ? { ...booking, date: newDate, time: newTime }
        : booking
    ));
    setShowModal(false);
  };

  const handleRatingChange = (stars) => {
    setRating(stars);
  };

  const handleSubmitFeedback = () => {
    console.log("Feedback Submitted:", feedback);
    setFeedback("");
    setRating(0);
  };

  return (
    <>
      <CustomNavbar />
      <Container className="mt-4">
        <h3>My Bookings</h3>
        <ListGroup>
          {bookings.map((booking) => (
            <ListGroup.Item key={booking.id} className="mb-3">
              <h5>{booking.service} with {booking.provider}</h5>
              <p>Date: {booking.date} | Time: {booking.time} | Price: {booking.price}</p>
              <Button variant="warning" onClick={() => handleRescheduleBooking(booking)}>Reschedule</Button>
              <Button variant="danger" onClick={() => handleCancelBooking(booking.id)} className="ms-2">Cancel</Button>
              {booking.status === "Completed" && (
                <>
                  <div className="mt-2">
                    <h6>Rate & Review</h6>
                    <Form.Control
                      as="textarea"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Write your feedback..."
                      rows={3}
                    />
                    <div className="mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          size={20}
                          color={star <= rating ? "#FFD700" : "#D3D3D3"}
                          onClick={() => handleRatingChange(star)}
                          style={{ cursor: "pointer", marginRight: 5 }}
                        />
                      ))}
                    </div>
                    <Button variant="primary" onClick={handleSubmitFeedback} className="mt-2">Submit Feedback</Button>
                  </div>
                </>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* Reschedule Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Reschedule Booking</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formDate">
                <Form.Label>New Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formTime" className="mt-3">
                <Form.Label>New Time</Form.Label>
                <Form.Control
                  type="time"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmitReschedule}>
              Reschedule
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default MyBookings;
