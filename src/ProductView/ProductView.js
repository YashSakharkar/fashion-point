import React, { use, useState } from "react";
import "./ProductView.css";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";

const ProductView = ({dispalayProduct}) => {
  const [zoomedImg, setZoomedImg] = useState(false);
  const [zoomedProductView, setZoomedProductView] = useState(true);
  const HandleZoomedImage = () => {
    setZoomedImg(true);
    setZoomedProductView(false)
    console.log(dispalayProduct)
  };
  return (
    <div className="ProductView">
      <div className="ProductView-contain">
        {zoomedProductView && (
          <div className="ProductView-container">
            <div className="ProductView-container-left">
              <img
                src={dispalayProduct.image}
                alt={dispalayProduct.title}
                onClick={HandleZoomedImage}
              />
            </div>
            <div className="ProductView-container-right">
              {/* <p className="ProductView-category">SPORTS SHOES</p> */}
              <h2 className="ProductView-product-name">{dispalayProduct.title}</h2>
              <p className="ProductView-product-description">
            {dispalayProduct.description}
              </p>

              <div className="ProductView-pricing">
                <span className="ProductView-price">&#8377;{dispalayProduct.price}</span>
                <span className="ProductView-original-price">
                  {/* <strike>&#8377;2300</strike> */}
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
                src={dispalayProduct.image}
                alt={dispalayProduct.title}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
