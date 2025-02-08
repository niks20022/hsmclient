import React, { useState } from "react";
import { Button, Form, Modal, Table, Alert } from "react-bootstrap";

const ManageServices = () => {
    const [services, setServices] = useState([
        { id: 1, name: "Plumbing", description: "Fixing pipes", price: 50, available: true },
        { id: 2, name: "Electrical", description: "Wiring and repairs", price: 80, available: true },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [newService, setNewService] = useState({
        name: "",
        description: "",
        price: "",
        available: true,
    });
    const [errors, setErrors] = useState({});

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setErrors({});
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewService((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let validationErrors = {};
        if (!newService.name.trim()) validationErrors.name = "Service name is required.";
        if (!newService.description.trim()) validationErrors.description = "Description is required.";
        if (!newService.price || isNaN(newService.price) || newService.price <= 0) 
            validationErrors.price = "Valid price is required.";
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const handleAddService = () => {
        if (!validateForm()) return;
        setServices((prevServices) => [
            ...prevServices,
            { ...newService, id: prevServices.length + 1 },
        ]);
        setNewService({ name: "", description: "", price: "", available: true });
        handleCloseModal();
    };

    const handleDeleteService = (id) => {
        setServices(services.filter((service) => service.id !== id));
    };

    const toggleAvailability = (id) => {
        setServices(
            services.map((service) =>
                service.id === id ? { ...service, available: !service.available } : service
            )
        );
    };

    return (
        <div className="manage-services">
            <h2>Manage Your Services</h2>
            <Button variant="primary" onClick={handleShowModal}>
                Add New Service
            </Button>

            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service.id}>
                            <td>{service.name}</td>
                            <td>{service.description}</td>
                            <td>{`$${service.price}`}</td>
                            <td>{service.available ? "Yes" : "No"}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() => toggleAvailability(service.id)}
                                >
                                    Toggle Availability
                                </Button>
                                <Button
                                    variant="danger"
                                    className="ml-2"
                                    onClick={() => handleDeleteService(service.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {Object.keys(errors).length > 0 && (
                        <Alert variant="danger">
                            {Object.values(errors).map((error, index) => (
                                <div key={index}>{error}</div>
                            ))}
                        </Alert>
                    )}
                    <Form>
                        <Form.Group controlId="formServiceName">
                            <Form.Label>Service Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={newService.name}
                                onChange={handleInputChange}
                                placeholder="Enter service name"
                                isInvalid={!!errors.name}
                            />
                        </Form.Group>
                        <Form.Group controlId="formServiceDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={newService.description}
                                onChange={handleInputChange}
                                placeholder="Enter service description"
                                isInvalid={!!errors.description}
                            />
                        </Form.Group>
                        <Form.Group controlId="formServicePrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={newService.price}
                                onChange={handleInputChange}
                                placeholder="Enter price"
                                isInvalid={!!errors.price}
                            />
                        </Form.Group>
                        <Form.Group controlId="formServiceAvailability">
                            <Form.Check
                                type="checkbox"
                                label="Available"
                                checked={newService.available}
                                onChange={() =>
                                    setNewService((prevState) => ({
                                        ...prevState,
                                        available: !prevState.available,
                                    }))
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddService}>
                        Add Service
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ManageServices;
