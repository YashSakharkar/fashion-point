import React, { useContext, useState } from "react";
import "./ProductView.css";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { UserContext } from "../UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const ProductView = ({ dispalayProduct }) => {
  const [zoomedImg, setZoomedImg] = useState(false);
  const [zoomedProductView, setZoomedProductView] = useState(true);
  const loggedInUser = useContext(UserContext)
  const quantity = [];
  const navigate = useNavigate();
  for (let i = 1; i <= 100; i++) {
    quantity.push(i)
  }
  console.log(quantity)
  const HandleZoomedImage = () => {
    setZoomedImg(true);
    setZoomedProductView(false)
    //console.log(dispalayProduct)
  };
  const HandleAddToCartProduct=async()=>{
  //  console.log(loggedInUser.loggedInUser)
    if(loggedInUser.loggedInUser){
      var data ={
        "title":dispalayProduct.title,
        "description":dispalayProduct.description,
        "price":dispalayProduct.price,
        "image":dispalayProduct.image
      }
  
      const userData =  await axios.post("http://localhost:9092/getaddtocartproducts",data);
      alert("Product Added to the Cart !")
      console.log(userData)
  }
  else{
    
 alert("Please Login")
  }
  }
  const HandleBuyNow =()=>{
    console.log(dispalayProduct)
    navigate(`/buynow?buyedData=${encodeURIComponent(JSON.stringify(dispalayProduct))}`)
  }
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
                <span style={{ paddingLeft: 5 }}><b>Quantity :</b></span>
                {/* <span className="ProductView-price">&#8377;{dispalayProduct.price}</span> */}
                <select className="quantity-bar">
                  {
                    quantity.map((quantities) => (
                      <option value={quantities} key={quantities}><b>{quantities}</b></option>
                    ))
                  }
                </select>
                <span className="ProductView-original-price">
                  {/* <strike>&#8377;2300</strike> */}
                </span>
              </div>

              <div className="ProductView-buttons">
                <button className="ProductView-add-to-cart" onClick={HandleBuyNow}>Buy Now</button>

                <button className="ProductView-add-to-cart" onClick={HandleAddToCartProduct}>Add to Cart</button>
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
          <div className="ProductView-zoom-container">
          <div className="ProductView-container-down">
            <div className="ProductView-contain-down">
              <div>
                <CloseIcon onClick={() => {
                  setZoomedImg(false)
                  setZoomedProductView(true)
                }} />
              </div>
              <img
                src={dispalayProduct.image}
                alt={dispalayProduct.title}
              />
            </div>
          </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default ProductView;
