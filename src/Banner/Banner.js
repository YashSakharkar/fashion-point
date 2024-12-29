import React from "react";
import "./Banner.css"
const Banner = () => {
    return (<>
        <div className="Body-Content">
            <div className="body-banner-image">
                <img src="./home-new-bg-free-img.jpg" alt="banner-mage" />
            </div>
            <div className="banner-header">
                <div>
                    <h1>Raining Offers for <br /> Cold Winter !</h1>
                    <h2>25% off on all product</h2>
                </div>
                <div className="banner-btn">
                    <button>Shop Now</button>
                    <button>Find More</button>
                </div>
            </div>
        </div>
    </>)
}
export default Banner