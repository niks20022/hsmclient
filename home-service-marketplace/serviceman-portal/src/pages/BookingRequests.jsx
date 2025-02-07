import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/BookingRequests.css';  // Corrected import for CSS

const BookingRequests = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    // Dummy data for booking requests
    const [bookingRequests, setBookingRequests] = useState([
        { id: 1, customerName: 'John Doe', service: 'Plumbing', date: '2025-02-10', time: '10:00 AM', status: 'pending' },
        { id: 2, customerName: 'Jane Smith', service: 'Cleaning', date: '2025-02-12', time: '2:00 PM', status: 'pending' },
        { id: 3, customerName: 'Alice Brown', service: 'Electrical', date: '2025-02-14', time: '9:00 AM', status: 'pending' },
    ]);

    const handleAccept = (booking) => {
        setSelectedBooking(booking);
        setShowModal(true);
    };

    const handleReject = (booking) => {
        setSelectedBooking(booking);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmAction = (action) => {
        const updatedBookings = bookingRequests.map((booking) =>
            booking.id === selectedBooking.id ? { ...booking, status: action } : booking
        );
        setBookingRequests(updatedBookings);

        alert(`Booking ${action} for ${selectedBooking.customerName}`);
        setShowModal(false);
    };

    return (
        <div className="booking-requests">
            <h3>Booking Requests</h3>
            <div className="booking-list">
                {bookingRequests.map((booking) => (
                    <div className="booking-item" key={booking.id}>
                        <div>
                            <h5>{booking.customerName}</h5>
                            <p>Service: {booking.service}</p>
                            <p>Date & Time: {booking.date} at {booking.time}</p>
                            <p>Status: {booking.status}</p>
                        </div>
                        <div className="actions">
                            {booking.status === 'pending' && (
                                <>
                                    <Button variant="success" onClick={() => handleAccept(booking)}>Accept</Button>
                                    <Button variant="danger" onClick={() => handleReject(booking)}>Reject</Button>
                                </>
                            )}
                            {booking.status === 'accepted' && (
                                <Button variant="success" disabled>Accepted</Button>
                            )}
                            {booking.status === 'rejected' && (
                                <Button variant="danger" disabled>Rejected</Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for confirming action */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Action</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to {selectedBooking && selectedBooking.status === 'pending' ? 'accept' : 'reject'} this booking request?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
                    <Button 
                        variant="success" 
                        onClick={() => handleConfirmAction('accepted')}
                        disabled={selectedBooking && selectedBooking.status === 'accepted'}>
                        Accept
                    </Button>
                    <Button 
                        variant="danger" 
                        onClick={() => handleConfirmAction('rejected')}
                        disabled={selectedBooking && selectedBooking.status === 'rejected'}>
                        Reject
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BookingRequests;
