import React, { useEffect, useState } from "react";
import "./AddToCart.css";
import { Trash2, Plus, Minus } from "lucide-react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const[addToCartProducts,setAddToCartProducts]= useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await axios.get("http://localhost:9092/getallproducts");
        if (productsData.data) {
          console.log(productsData.data);
          setAddToCartProducts(productsData.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <Header/>
    <div className="addToCartMain">
      <div className="aTC-Shopping-cart">
        <div>
          <h2 className="ATC-cart-title">Shopping Cart</h2>
        </div>
        <div className="aPrice-container">
          <p className="aPrice">price</p>
        </div>
        <hr />

        <div className="ATC-cart-item">
          <img
            src="/images/AddToCart/zebronic.jpg"
            alt="Zebronics Speaker"
            className="ATC-product-image"
          />

          <div className="ATC-product-details">
            <h3 className="ATC-product-title">
              ZEBRONICS BTM9801RUCF 2.0 Tower Speaker, 120 Watts, Touch Control,
              HDMI ARC, Coaxial in, Supports...
            </h3>
            <p className="ATC-stock-status">In stock</p>
            <p className="ATC-shipping-info">
              Eligible for <b>FREE Shipping</b>
            </p>
            <p className="ATC-fulfilled-badge">✔ Fulfilled</p>

            {/* <p className="ATC-fulfilled-badge"><DoneTwoToneIcon/> Fulfilled</p> */}

            <div>
              <label className="ATC-gift-option">
                <input type="checkbox" />
                <p className="ATC-giftPara">This will be a gift</p>
                <a href="#Learn-more" className="ATC-learn">
                  Learn more
                </a>
              </label>
            </div>

            <div className="ATC-cart-actions">
              <div className="ATC-quantity-selector">
                <button
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                  className="ATC-quality-btn"
                >
                  <Minus size={16} />
                  {/* <RemoveIcon /> */}
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="ATC-quality-btn"
                >
                  <Plus size={16} />
                  {/* <AddIcon /> */}
                </button>
              </div>

              <div>
                <button
                  className="ATC-delete-btn"
                  onClick={() => setQuantity(0)}
                >
                  <Trash2 size={16} />
                  {/* <DeleteIcon/> */}
                </button>
              </div>
            </div>

            <div className="ATC-extra-options">
              <a href="#Delete" className="ATC-extra-link">
                Delete
              </a>{" "}
              |{" "}
              <a href="#Share" className="ATC-extra-link">
                Share
              </a>
            </div>
          </div>

          <div className="ATC-product-price">₹14,999.00</div>
        </div>

        <hr />

        <div className="ATC-subtotal">
          <b>
            Subtotal ({quantity}
            item{quantity > 1 ? "s" : ""}): ₹{" "}
            {(quantity * 14999).toLocaleString()}
            .00
          </b>
        </div>
      </div>

      {/* <img src="/images/testImg/image (2).png" alt="" /> */}
    </div>
    <Footer/>
    </>
  );
};

export default AddToCart;
