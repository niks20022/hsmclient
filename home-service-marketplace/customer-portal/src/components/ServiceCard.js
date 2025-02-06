// src/components/ServiceCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCard = ({ provider }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={provider.image} className="card-img-top" alt={provider.name} />
        <div className="card-body">
          <h5 className="card-title">{provider.name}</h5>
          <p className="card-text">{provider.category}</p>
          <p className="card-text"><strong>Price:</strong> ${provider.price}</p>
          <p className="card-text"><strong>Rating:</strong> {provider.rating}</p>
          <Link to={`/service/${provider.id}`} className="btn btn-primary">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
