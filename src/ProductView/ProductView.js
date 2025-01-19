import React, { use, useState } from "react";
import "./ProductView.css";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";

const ProductView = () => {
  const [zoomedImg, setZoomedImg] = useState(false);
  const [zoomedProductView, setZoomedProductView] = useState(true);
  const HandleZoomedImage = () => {
    setZoomedImg(true);
    setZoomedProductView(false)
  };
  return (
    <div className="ProductView">
      <div className="ProductView-contain">
        {zoomedProductView && (
          <div className="ProductView-container">
            <div className="ProductView-container-left">
              <img
                src="/images/CardSecondImg/shoe_image.png"
                alt="Nike Red Shoes"
                onClick={HandleZoomedImage}
              />
            </div>
            <div className="ProductView-container-right">
              <p className="ProductView-category">SPORTS SHOES</p>
              <h2 className="ProductView-product-name">Nike Red Shoes</h2>
              <p className="ProductView-product-description">
                These Nike Red Shoes are designed for comfort and style. Perfect
                for sports and casual wear, they combine durability with
                elegance.
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
        )}

        {zoomedImg && (
          <div className="ProductView-container-down">
            <div className="ProductView-contain-down">
              <div>
                <CloseIcon onClick={()=>{
                  setZoomedImg(false)
                  setZoomedProductView(true)
                  }}/>
              </div>
              <img
                src="/images/CardSecondImg/shoe_image.png"
                alt="Nike Red Shoes"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
