import React from "react";
import "./CardDetails.css";

const CardDetails = ({ name, location, image }) => {
  return (
    <div className="card-details">
      <div className="card-details-image">
        <img src={image} alt="Profile"></img>
      </div>
      <h1 className="card-details-name">{name}</h1>
      <p className="card-details-location">{location}</p>
      <div className="card-details-message">
        <i className="fas fa-comment-dots card-message"></i>
      </div>
      <div className="card-details-buttons">
        <div className="card-details-assign">Assign to me</div>
        <div className="card-details-edit">Edit</div>
      </div>
      <div className="card-details-about">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna alisqua.
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
