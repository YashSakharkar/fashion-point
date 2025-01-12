import React from "react";
import "./ProductView.css";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductView = () => {
  return (
    <div className="ProductView">
      <div className="ProductView-container">
        <div className="ProductView-container-left">
          <img
            src="/images/CardSecondImg/shoe_image.png"
            alt="Nike Red Shoes"
          />
        </div>
        <div className="ProductView-container-right">
          <p className="ProductView-category">SPORTS SHOES</p>
          <h2 className="ProductView-product-name">Nike Red Shoes</h2>
          <p className="ProductView-product-description">
            These Nike Red Shoes are designed for comfort and style. Perfect for
            sports and casual wear, they combine durability with elegance.
          </p>

          <div className="ProductView-pricing">
            <span className="ProductView-price">&#8377;1499</span>
            <span className="ProductView-original-price">
              <strike>&#8377;2300</strike>
            </span>
          </div>

          <div className="ProductView-buttons">
            <button className="ProductView-add-to-cart">Buy Now</button>

            <button className="ProductView-add-to-cart">Add to Cart</button>
          </div>

          {/* <div className="ProductView-button-icons">
            <div className="ProductView-button-icons-container">
              <p className="ProductView-FavoriteIcon">
                <FavoriteIcon />
              </p>
              <p>
               
                <TurnedInIcon />
              </p>
            </div>
          </div> */}

   <div className="ProductView-button-icons">
  <div className="ProductView-button-icons-container">
    <div className="ProductView-icon-wrapper">
      <FavoriteIcon className="ProductView-FavoriteIcon ProductView-icon" />
    </div>
    <div className="ProductView-icon-wrapper">
      <TurnedInIcon className="ProductView-TurnedInIcon ProductView-icon" />
    </div>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default ProductView;
