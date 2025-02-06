import React, { useState } from "react";
import CustomNavbar from "../components/Navbar";
import { Container, Button, Card, Modal, Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const MyBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      service: "Plumbing",
      provider: "John Plumbing",
      status: "Active",
      date: "2025-02-10",
      time: "10:00 AM",
      price: "$50",
    },
    {
      id: 2,
      service: "Cleaning",
      provider: "CleanCo",
      status: "Completed",
      date: "2025-02-05",
      time: "2:00 PM",
      price: "$40",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleCancelBooking = (bookingId) => {
    setBookings(bookings.filter((booking) => booking.id !== bookingId));
  };

  const handleRescheduleBooking = (booking) => {
    setCurrentBooking(booking);
    setShowModal(true);
  };

  const handleSubmitReschedule = () => {
    setBookings(
      bookings.map((booking) =>
        booking.id === currentBooking.id
          ? { ...booking, date: newDate, time: newTime }
          : booking
      )
    );
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
        <h3 className="text-center text-primary mb-4">My Bookings</h3>

        {bookings.map((booking) => (
          <Card
            key={booking.id}
            className="mb-3 shadow-lg border-0 rounded bg-success"
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Card.Body>
              <h5 className="text-white">
                {booking.service} with{" "}
                <span className="text-black text-bold">{booking.provider}</span>
              </h5>
              <p className="text-black mb-2">
                <strong>Date:</strong> {booking.date} | <strong>Time:</strong>{" "}
                {booking.time} | <strong>Price:</strong> {booking.price}
              </p>

              <div className="d-flex gap-2">
                <Button
                  variant="warning"
                  onClick={() => handleRescheduleBooking(booking)}
                >
                  Reschedule
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleCancelBooking(booking.id)}
                >
                  Cancel
                </Button>
              </div>

              {booking.status === "Completed" && (
                <div
                  className="mt-3 p-3 bg-white rounded shadow-sm"
                  style={{
                    backgroundColor: "#f8f9fa",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
                  }}
                >
                  <h6 className="text-dark">Rate & Review</h6>
                  <Form.Control
                    as="textarea"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Write your feedback..."
                    rows={2}
                  />
                  <div className="mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={22}
                        color={star <= rating ? "#FFD700" : "#D3D3D3"}
                        onClick={() => handleRatingChange(star)}
                        style={{ cursor: "pointer", marginRight: 5 }}
                      />
                    ))}
                  </div>
                  <Button
                    variant="primary"
                    onClick={handleSubmitFeedback}
                    className="mt-2"
                  >
                    Submit Feedback
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}

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
