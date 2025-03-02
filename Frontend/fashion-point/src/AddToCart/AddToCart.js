import React, { useContext, useEffect, useState } from "react";
import "./AddToCart.css";
import { Trash2, Plus, Minus } from "lucide-react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { UserContext } from "../UserContext/UserContext";
const AddToCart = () => {
  const [quantity, setQuantity] = useState(0);
  const [addToCartProducts, setAddToCartProducts] = useState([]);
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const [productLength, setproductLength] = useState({})
  const { setAddToCartLength } = useContext(UserContext)
  var totalPrice = 0;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await axios.get("http://localhost:9092/getallproducts");
        console.log(productsData)
        if (productsData.data) {
          // console.log(productsData.data);
          //  const total =0;
          setAddToCartProducts(productsData.data);
          //     for (let i = 0; i < productsData.data.length; i++) {
          //       totalPrice = totalPrice + Number(productsData.data[i].price.replace("RS", ""))
          //     }
          //  //   console.log(productsData.data.productId)
          //     setTotalProductPrice(totalPrice * total)
          setAddToCartLength(addToCartProducts.length)
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setAddToCartLength]);

  useEffect(() => {
    let total = 0;
    addToCartProducts.forEach((product) => {
      const quantity = productLength[product.productId] || 1;
      total += quantity * parseInt(product.price.replace("RS", ""));
    });
    setTotalProductPrice(total);
  }, [addToCartProducts, productLength]);

  const HandleDeleteProducts = async (productId) => {
    console.log(productId)
    const deletedProduct = await axios.delete(`http://localhost:9092/deleteproduct/${productId}`)
    console.log(deletedProduct)
  }
  const HandleProductLength = (productId) => {
    console.log(productId)
    setQuantity(quantity + 1)
    setproductLength((previousQuantity) => (
      {
        ...previousQuantity,
        [productId]: (previousQuantity[productId] || 1) + 1
      }
    )

    )
  }

  const HandleProductMinusLength = (productId) => {
    setQuantity(quantity - 1)
    setproductLength((previousQuantity) => (
      {
        ...previousQuantity,
        [productId]: Math.max((previousQuantity[productId] || 1) - 1, 1)
      }
    ))


  }
  return (
    <>
      <Header />
      <div className="addToCartMain">
        <div className="aTC-Shopping-cart">
          <div>
            <h2 className="ATC-cart-title">Shopping Cart</h2>
          </div>
          <div className="aPrice-container">
            <p className="aPrice">price</p>
          </div>
          <hr />
          {addToCartProducts.map((productsDetails) => (
            <div className="ATC-cart-item">
              <img
                src={productsDetails.image}
                alt={productsDetails.title}
                className="ATC-product-image"
              />

              <div className="ATC-product-details">
                <h3 className="ATC-product-title">
                  {productsDetails.description}
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
                        HandleProductMinusLength(productsDetails.productId)
                      }}
                      className="ATC-quality-btn"
                    >
                      <Minus size={16} />
                      {/* <RemoveIcon /> */}
                    </button>
                    <span>{productLength[productsDetails.productId] || 1}</span>
                    <button
                      onClick={() => {

                        HandleProductLength(productsDetails.productId)
                      }

                      }
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

                  <a href="#Delete" className="ATC-extra-link" onClick={() => {
                    HandleDeleteProducts(productsDetails.productId)
                    window.location.reload();
                  }}>
                    Delete
                  </a>{" "}
                  |{" "}
                  <a href="#Share" className="ATC-extra-link">
                    Share
                  </a>
                </div>
              </div>

              <div className="ATC-product-price">₹{parseInt(productLength[productsDetails.productId] || 1) * (parseInt(productsDetails.price))}</div>
              {/* {setTotalProductPrice(parseInt(productLength[productsDetails.productId]  || 1)  * (parseInt(productsDetails.price)))} */}
            </div>
          ))

          }
          <hr />

          <div className="ATC-subtotal">

            <p>   Subtotal of {(addToCartProducts.length) + quantity} Items</p>
            <button className="totalpricebtn">Pay ₹ {totalProductPrice}</button>
            {setAddToCartLength(addToCartProducts.length + quantity)}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddToCart;
