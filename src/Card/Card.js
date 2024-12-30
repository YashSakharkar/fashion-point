import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-container">


        <div className="box">
          <img src={require("./women-fashion.jpg")} alt="women-fashion" />

          <div className="over-img">
            <h2>20% off on Tank tops</h2>
            <p>
              Upgrade your summer style with 20% off on tank tops-don't miss
              out!
            </p>

            <div className="shopnow-btn">
              <b>SHOP NOW</b>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={require("./men-fashion.jpg")} alt="men-fashion" />
          <div className="over-img">
            <h2>Latest Eyewear</h2>
            <p>
              Upgrade your summer style with 20% off on tank tops-don't miss
              out!
            </p>

            <div className="shopnow-btn">
              <b>SHOP NOW</b>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={require("./footwear.jpg")} alt="Footwear" />
          <div className="over-img">
            <h2>Let's Lorem Suit Up!</h2>
            <p>
              Upgrade your summer style with 20% off on tank tops-don't miss
              out!.
            </p>

            <div className="shopnow-btn">
              <b>SHOP NOW</b>
            </div>
          </div>
        </div>

        <div className="box">
          <img src={require("./women-fashion.jpg")} alt="women-fashion" />

          <div className="over-img">
            <h2>20% off on Tank tops</h2>
            <p>
              Upgrade your summer style with 20% off on tank tops-don't miss
              out!
            </p>

            <div className="shopnow-btn">
              <b>SHOP NOW</b>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={require("./men-fashion.jpg")} alt="men-fashion" />
          <div className="over-img">
            <h2>Latest Eyewear</h2>
            <p>
              Upgrade your summer style with 20% off on tank tops-don't miss
              out!
            </p>

            <div className="shopnow-btn">
              <b>SHOP NOW</b>
            </div>
          </div>
        </div>
        <div className="box">
          <img src={require("./footwear.jpg")} alt="Footwear" />
          <div className="over-img">
            <h2>Let's Lorem Suit Up!</h2>
            <p>
              Upgrade your summer style with 20% off on tank tops-don't miss
              out!.
            </p>

            <div className="shopnow-btn">
              <b>SHOP NOW</b>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
