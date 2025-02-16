import React from "react";
import "./Card.css";
import CardImages from "./CardImages";

const Card = () => {
  return (
    <div className="card">
      <div className="card-container">
        {CardImages.map((image, index) => (
          <div className="card-box" key={index}>
            <img src={image.cardImage} alt={image.alt || "Card Image"} className="cardImg" />

            <div className="card-over-img">
              <h2 className="cardH2">{image.cardHeading}</h2>
              <p className="cardPara">{image.cardDescription}</p>

              <div className="card-shopnow-btn">
                <b>SHOP NOW</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;


// done