import React, { useState } from 'react';
import { Button, Form, Card, Alert } from 'react-bootstrap';
import '../styles/Profile.css';  // Add appropriate styling

const Profile = () => {
    // Sample data
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        address: '123 Main St, City',
        skills: ['Plumbing', 'Electrical'],
        password: '',
        newPassword: '',
        oldPassword: '',
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [passwordChange, setPasswordChange] = useState(false);

    // Handle personal info change
    const handlePersonalChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // Handle password change
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // Submit personal details
    const handleSubmitDetails = () => {
        if (userData.name && userData.email && userData.address) {
            setSuccessMessage('Profile details updated successfully!');
            setError('');
        } else {
            setError('All fields are required!');
        }
    };

    // Submit password change
    const handleSubmitPassword = () => {
        if (userData.oldPassword && userData.newPassword) {
            setSuccessMessage('Password updated successfully!');
            setError('');
        } else {
            setError('Please provide all password fields!');
        }
    };

    // Sample earnings and booking history
    const earnings = 1500;
    const bookingHistory = [
        { id: 1, customerName: 'Alice', service: 'Plumbing', date: '2025-02-05' },
        { id: 2, customerName: 'Bob', service: 'Electrical', date: '2025-02-08' },
    ];

    return (
        <div className="profile-container">
            <h2>Profile Management</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            {successMessage && <Alert variant="success">{successMessage}</Alert>}

            <Card>
                <Card.Header>
                    <h5>Personal Information</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={userData.name}
                                onChange={handlePersonalChange}
                                disabled={!editMode}
                            />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={userData.email}
                                onChange={handlePersonalChange}
                                disabled={!editMode}
                            />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={userData.address}
                                onChange={handlePersonalChange}
                                disabled={!editMode}
                            />
                        </Form.Group>

                        <Form.Group controlId="skills">
                            <Form.Label>Skills</Form.Label>
                            <Form.Control
                                type="text"
                                name="skills"
                                value={userData.skills.join(', ')}
                                onChange={handlePersonalChange}
                                disabled={!editMode}
                            />
                        </Form.Group>

                        {!editMode ? (
                            <Button variant="primary" onClick={() => setEditMode(true)}>
                                Edit Details
                            </Button>
                        ) : (
                            <Button variant="success" onClick={handleSubmitDetails}>
                                Save Details
                            </Button>
                        )}
                    </Form>
                </Card.Body>
            </Card>

            <hr />

            <Card>
                <Card.Header>
                    <h5>Change Password</h5>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="oldPassword">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="oldPassword"
                                value={userData.oldPassword}
                                onChange={handlePasswordChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="newPassword">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="newPassword"
                                value={userData.newPassword}
                                onChange={handlePasswordChange}
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={handleSubmitPassword}>
                            Change Password
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <hr />

            <Card>
                <Card.Header>
                    <h5>Earnings and Booking History</h5>
                </Card.Header>
                <Card.Body>
                    <h6>Total Earnings: ${earnings}</h6>
                    <h6>Booking History</h6>
                    <ul>
                        {bookingHistory.map((booking) => (
                            <li key={booking.id}>
                                {booking.customerName} - {booking.service} on {booking.date}
                            </li>
                        ))}
                    </ul>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Profile;
