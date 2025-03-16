import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import "./Buynow.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { blue } from "@mui/material/colors";
import { Underline } from "lucide-react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

const Buynow = () => {
  const [qty, setQty] = useState(1)
  const [totalQty, setTotalQty] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [buyedData, setBuyedData] = useState('')
  const [isModalOpen, setIsModalOpen] = useState("false");
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const { loggedInUser } = useContext(UserContext)
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 7);

  const formattedDate = futureDate.toLocaleDateString("en-US", {
    weekday: "long", // Full day name (e.g., Thursday)
    day: "2-digit", // Two-digit day (e.g., 06)
    year: "numeric", // Full year (e.g., 2025)
  });
  console.log(formattedDate)
  useEffect(() => {
    // console.log(qty)
    if (params) {
      const buyedDatas = params.get("buyedData");
      const data = JSON.parse(buyedDatas)
      //console.log(data.description)
      setBuyedData(data)
    }
  }, [buyedData, loggedInUser])
  const HandleQty = () => {
    if (qty > 1) {
      setQty(qty - 1)
    }
  }
  //  useEffect(()=>{
  //   setTotalQty(parseInt(buyedData.price)*qty)
  //    console.log(totalQty)
  //   if(totalQty > 5000){
  //     var finalTotalQty = (totalQty*10)/100
  //     setDiscount(finalTotalQty)
  //     console.log(finalTotalQty)
  //     setTotalQty(totalQty-finalTotalQty)
  //   }
  //  },[totalQty,discount])
  useEffect(() => {
    // Load Razorpay script dynamically when the component mounts
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const HandlePayments = async (totalprice) => {
    console.log(totalprice)
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const options = {
      key: "rzp_test_dDZed1I7Nszbkb", // Replace with your Razorpay Key ID
      amount: totalprice * 100, // Amount in paise (₹500)
      currency: "INR",
      name: loggedInUser.name,
      handler: function (response) {
        alert("Payment Successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
        console.log("Order ID:", response.razorpay_order_id);
        console.log("Signature:", response.razorpay_signature);
      },
      prefill: {
        name: loggedInUser.name, // Auto-filled user name
        email: loggedInUser.email, // Auto-filled email
        contact: loggedInUser.mobilenumber, // Auto-filled mobile number
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };


  return (<>
    <Header />
    <div className="buy-now-container">
      <div>
        <div className="heading"><h1>Review And Pay</h1></div>
        <div className="main-product-container">
          <div className="main-container">
            <div className="product-details-heading"><h2>Products Details</h2></div>
            <div>
              <div className="product-details-container">
                <div className="estimated-delivery">
                  <h4><LocalShippingIcon /></h4>
                  <h4 >Estimated Delivery Time - {formattedDate}</h4><br />
                </div>
                <div className="product-details-description-conatiner">
                  <div className="buy-now-img"><img src={buyedData.image} /></div>
                  <div>
                    <h4>{buyedData.description}</h4>
                    <h4>₹ {parseInt(buyedData.price) * qty}</h4>
                    {/* {setTotalQty(parseInt(buyedData.price)*qty)} */}
                    <div className="quantity-div">
                      <h4>Size free size</h4>

                      <div className="qty-add">
                        <h4>Qty : </h4>
                        <div className="plus-minus">
                          <Minus className="plus-minus-btn" onClick={HandleQty} />
                          {qty}
                          <Plus className="plus-minus-btn" onClick={() => setQty(qty + 1)} />
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
                <div className="free-delivery">
                  <h4>Sold By Hsc</h4>
                  <h4>Free Delivery</h4>
                </div>
              </div>

            </div>
            <div className="delivery-address-heading">
              <h2><LocationOnIcon /></h2>
              <h2>Delivery Address</h2></div>
            <div className="address-conatiner">
              <div className="address-change">
                <h3>{loggedInUser.name}</h3>
                <p style={{ color: "blue", textDecoration: "underline" }}  ><a href="#">Change</a>
                </p>
              </div>

              <p>{loggedInUser.address} - {loggedInUser.zipcode}</p>

              <p>{loggedInUser.mobilenumber}</p>
            </div>
          </div>
          <div className="price-conatiner" >
            <div className="price-sub-conatiner">
              <div>
                <h2>Price Details ({qty} Items)</h2>
                <span className="price-sub-conatiner-span" ><p>Total Product Price</p><p>+ ₹ {parseInt(buyedData.price) * qty}</p></span>
                <span className="price-sub-conatiner-span"><p>Total Discounts</p><p>- ₹ {parseInt(buyedData.price) * qty > 5000 ? (parseInt(buyedData.price) * qty) / 100 : 0}</p></span>
                <hr />
                <span className="price-sub-conatiner-span"><h3>Total Discounts</h3><h3>- ₹ {parseInt(buyedData.price) * qty > 5000 ? (parseInt(buyedData.price) * qty) - ((parseInt(buyedData.price) * qty) / 100) : parseInt(buyedData.price) * qty}</h3></span>
              </div>
              <div className="price-sub-conatiner-offer">
                <p >offer Yay! Your total discount is ₹ {parseInt(buyedData.price) * qty > 5000 ? (parseInt(buyedData.price) * qty) / 100 : 0}</p>
              </div>
              <div className="price-sub-conatiner-notify">
                <p>Clicking on 'Continue' will not deduct any money</p>
              </div>
              <div className="continue-btn">
                <button className="continue-button" onClick={() => HandlePayments(parseInt(buyedData.price) * qty > 5000 ? (parseInt(buyedData.price) * qty) - ((parseInt(buyedData.price) * qty) / 100) : parseInt(buyedData.price) * qty)} >Pay Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>)
}
export default Buynow;