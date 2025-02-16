
import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-container-image">
                <img src="./home-new-bg-free-img.jpg" alt="banner-image" className="banner-img" />
            </div>
            <div className="banner-header">
                <div>
                    <h1 className="banner-h1">Raining Offers for <br /> Cold Winter!</h1>
                    <h2 className="banner-h2">25% off on all products</h2>
                </div>
                <div className="banner-btn-container">
                    <button className="banner-shop-btn">Shop Now</button>
                    <button className="banner-find-btn">Find More</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;


// done