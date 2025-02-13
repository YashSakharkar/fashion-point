import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./AddToCart.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const AddToCart = () => {

    return (<>
       <Header/>
        <div className="add-to-cart-container">
            <div className="add-to-cart-subcontainer">
                <div className="add-to-cat-co-container">
                    <div className="heading-section">
                        <h2>ShoppingCart</h2>
                        <hr />
                    </div>
                    <div className="add-to-cart-products-panel">
                        <div className="add-to-cart-product">
                            <div className="img-container"><img src="./avatar.png" /></div>
                            <div className="products-desciption">
                                <div>
                                    <span>FRESH FROM LOOM 70% Light Blocking Children Room Curtain | Kid Room Curtain 9 feet with Cartoon Print| Dust Repellent |Kids Parda Screen | Eyelet Ring (2pc, Cloud-M…</span><br />
                                    <span>In Stock</span><br />
                                    <span>Eligible for FREE Shipping</span><br />
                                    <span> 40000    </span>
                                </div>
                                <div>
                                    <div>
                                        <RemoveIcon />
                                        <span>0</span>
                                        <AddIcon />
                                    </div>
                                    <div>
                                        <span>Delete</span>
                                        <span>Save For Later</span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>)
}
export default AddToCart;