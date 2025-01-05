// import React, { useEffect, useState } from "react";
// import "./Products.css";
// import axios from "axios";

// const Products = () => {
//   const [productData, setProductData] = useState([]);
//   useEffect(() => {
//     // Example GET request
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         setProductData(response.data);
//       })
//       .catch((err) => {});
//   }, []);
//   console.log(productData);
//   const truncateDescription = (description) => {
//     const words = description.split(" ");
//     if (words.length > 22) {
//       return words.slice(0, 22).join(" ") + "...";
//     }
//     return description;
//   };

//   return (
//     <div className="product">
//       <div className="product-container">
//         <h2 className="featured-heading">
//           Featured Products
//           <div className="underline-heading"></div>
//         </h2>

//         {productData.map((data, index) => {
//           return (
//             <div className="items" key={index}>
//               <img src={data.image} alt={data.alt} />
//               <div className="describe">
//                 <h3>{data.title}</h3>
//                 <p>{truncateDescription(data.description)}</p>
//                 <p className="price">Price: &#8377;{data.price}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Products;


// ************************************************************************************





import React from "react";
import "./Products.css";
import productData from './ProductData'


const Products = () => {
  
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 22) {
      return words.slice(0, 22).join(" ") + "...";
    }
    return description;
  };

  return (
    <div className="product">
      <div className="product-container">
        <h2 className="featured-heading">
          Featured Products
          <div className="underline-heading"></div>
        </h2>

        {productData.map((data, index) => {
          return (
            <div className="items" key={index}>
              <img src={data.image} alt={data.alt} />
              <div className="describe">
                <h3>{data.title}</h3>
                <p>{truncateDescription(data.description)}</p>
<p className="price">{data.category}</p>

                <p className="price">Price: &#8377;{data.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;