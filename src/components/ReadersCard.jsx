import React from 'react';
import './ReadersCard.css';

const ReadersCard = ({ title, image, description, genre }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-genre">{genre}</p>
        <button className="card-button">Read More</button>
      </div>
    </div>
    
  );
};

export default ReadersCard;