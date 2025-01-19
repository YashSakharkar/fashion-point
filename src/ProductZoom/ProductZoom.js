// import React from 'react';
// import './ProductZoom.css';

// const ProductZoom = () => {
//   const product = {
//     name: "Wireless Bluetooth Headphones",
//     brand: "SoundPro",
//     price: "99.99",
//     description: "Experience high-quality sound with these wireless Bluetooth headphones. Designed for comfort and extended use.",
//     features: [
//       "Bluetooth 5.0",
//       "Noise cancellation",
//       "20-hour battery life",
//       "Built-in microphone",
//     ],
//     image: "/images/CardSecondImg/single-image-2.jpg", 
//   };

//   return (
//     <div className="product-container creative-container">
//       <h1 className="product-title">Explore Our Product</h1>
//       <div className="product-card creative-card">
//         <div className="image-section">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="product-image creative-image"
//           />
//         </div>
//         <div className="details-section">
//           <h2 className="product-name">{product.name}</h2>
//           <p className="product-brand"><strong>Brand:</strong> {product.brand}</p>
//           <p className="product-price"><strong>Price:</strong> <span>{product.price}</span></p>
//           <p className="product-description"><strong>Description:</strong> {product.description}</p>
//           <h3 className="features-title">Features:</h3>
//           <ul className="features-list">
//             {product.features.map((feature, index) => (
//               <li key={index} className="feature-item">{feature}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductZoom;