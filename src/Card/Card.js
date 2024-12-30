import React from "react";
import "./Card.css";
import CardImages from "./CardImages";

const Card = () => {
  return (
    
    <div className="card" >
    <div className="card-container">
      {
        
        CardImages.map((image) => {
        return (
          
            
              <div className="box">
                <img src={image.cardImage} alt={image.alt} />

                <div className="over-img">
                  <h2>{image.cardHeading}</h2>
                  <p>{image.cardDescription}</p>

                  <div className="shopnow-btn">
                    <b>SHOP NOW</b>
                  </div>
                </div>
              </div>
            
        );
      })}

      </div>
          </div>
    
  );
};

export default Card;
