import React from "react";
import "./Card.css";

const Card = ({ name, location, image, index, selected }) => {
  console.log(index, "INDEX", selected, "SELECTED");
  return (
    <div className={index === selected ? "card selected-card" : "card"}>
      <div className="card-image">
        <img src={image} alt="Client Profile" />
      </div>
      <div className="card-info">
        <h1 className="card-name">{name}</h1>
        <p className="card-location">{location}</p>
        <div className="card-buttons">
          <i className="fas fa-comment-dots card-message-btn"></i>
          <div className="card-assign">Assign to me</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
