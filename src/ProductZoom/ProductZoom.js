// import React from 'react'
// import './ProductZoom.css'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



// import NotificationsIcon from '@mui/icons-material/Notifications';
// import FavoriteIcon from '@mui/icons-material/Favorite';


// const ProductZoom = () => {
//   return (
//    <>

// <div className='productView'>
// <div className='productView-container'>

//   <div className='productView-container-left'>
// <img src="/images/CardSecondImg/single-image-2.jpg" alt="img" />
//   </div>

//   <div className='productView-container-right'>

//   <div className='productView-container-right-data' >
//   <h1>Classic winter collection</h1>
//   {/* ***********************
// <p>

// Stay warm and stylish this winter with our Classic Winter Collection. Featuring cozy sweaters, elegant coats, soft scarves, and snug boots, this collection is perfect for the chilly season.

// With timeless designs and comfortable fabrics, it's made to keep you warm while looking your best. Whether you’re heading out or staying in, these pieces will make every winter day special.
// <p className='explore'>Explore the collection and enjoy winter in style!  </p>
              
//                 </p>
// <button>Shop Collection</button>


// ************************** */}

// Add to Cart
// <ShoppingCartIcon/> <hr />
// Buy Now

// <hr />
// Wishlist



// <hr />
// Save for Later


// <hr />
// Quick View


// <hr />
// Compare


// <hr />
// Notify Me
// <NotificationsIcon/>

// <hr />
// Favorite
// <FavoriteIcon/>


//   </div>
//   </div>
// </div>

// </div>


//    </>
      
      
//   )
// }

// export default ProductZoom
// *******************************

import React from 'react';
import './ProductZoom.css';

const ProductDetails = () => {
  const product = {
    name: "Wireless Bluetooth Headphones",
    brand: "SoundPro",
    price: "99.99",
    description: "Experience high-quality sound with these wireless Bluetooth headphones. Designed for comfort and extended use.",
    features: [
      "Bluetooth 5.0",
      "Noise cancellation",
      "20-hour battery life",
      "Built-in microphone",
    ],
    image: "/images/CardSecondImg/single-image-2.jpg", // Replace with your product image URL
  };

  return (
    <div className="product-container creative-container">
      <h1 className="product-title">Explore Our Product</h1>
      <div className="product-card creative-card">
        <div className="image-section">
          <img
            src={product.image}
            alt={product.name}
            className="product-image creative-image"
          />
        </div>
        <div className="details-section">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-brand"><strong>Brand:</strong> {product.brand}</p>
          <p className="product-price"><strong>Price:</strong> <span>{product.price}</span></p>
          <p className="product-description"><strong>Description:</strong> {product.description}</p>
          <h3 className="features-title">Features:</h3>
          <ul className="features-list">
            {product.features.map((feature, index) => (
              <li key={index} className="feature-item">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;