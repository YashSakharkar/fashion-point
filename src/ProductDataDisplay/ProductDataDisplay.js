import React, { useState, useEffect } from "react";
import productsJsonData from "./ProductJsonData";
import "./ProductDisplay.css";
import SearchIcon from "@mui/icons-material/Search";

const ProductDataDisplay = ({ data }) => {
  const [titlesAndDescriptions, setTitlesAndDescriptions] = useState([]);
  const [expanded, setExpanded] = useState({});
  var productItems = productsJsonData[0][data];
 
  const result = [];
  useEffect(() => {
    for (const products in productItems) {
      for (const product2 in productItems[products]) {
        result.push({
          title: productItems[products][product2].TITLE,
          description: productItems[products][product2].DESCRIPTION,
          image: productItems[products][product2].IMAGE,
          price: productItems[products][product2].PRICE,
        });
      }
    }
    setTitlesAndDescriptions(result);
  }, [productItems]);

  const toggleReadMore = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="product-display-container">
      <div className="product-display-subcontainer">
        <div className="product-categories-container">
          {productsJsonData.map((productsJsonDataCategories, index) => {
            const categories = Object.keys(productsJsonDataCategories.MENS);
            return (
              <div key={index} className="product-categoriesname">
                <span>All</span>
                {categories.map((Category, categoryIndex) => (
                  <span key={categoryIndex}>{Category}</span>
                ))}
              </div>
            );
          })}
        </div>
        <div className="product-display-page-container">
          <div className="filter-container">
            <div>
              <h2>Filter / Sort</h2>
              <hr />
            </div>
            <div className="search-products-container">
              <div className="search-product">
                <input type="text" placeholder="Search For the Products" />
                <SearchIcon sx={{ color: "gray" }} />
                <br />
              </div>
              <br />
              <span>Filter By Price</span>
              <br />
              <input type="checkbox" name="price" value="Less Than 100" /> Less
              Than 100
              <br />
              <input type="checkbox" name="price" value="100-200" /> 100-200
              <br />
              <input type="checkbox" name="price" value="200-500" /> 200-500
              <br />
              <input type="checkbox" name="price" value="500-1000" /> 500-1000
              <br />
              <input type="checkbox" name="price" value="more than 1000" /> More
              than 1000
              <br />
              <hr />
              <span>Filter By Color</span>
              <br />
              <input type="checkbox" name="price" value="red" /> Red
              <br />
              <input type="checkbox" name="price" value="blue" /> Blue
              <br />
              <input type="checkbox" name="price" value="Green" /> Green
              <br />
              <input type="checkbox" name="price" value="Black" /> Black
              <br />
              <input type="checkbox" name="price" value="Yellow" /> Yellow
              <br />
            </div>
          </div>
          <div className="product-display-page">
            <div className="products-images">
              {titlesAndDescriptions.map((result, index) => {
                const isLongDescription = result.description.length > 12;
                const displayedDescription = expanded[index]
                  ? result.description
                  : result.description.slice(0, 16) +
                    (isLongDescription ? "..." : "");

                return (
                  <div key={index} className="product-images-content">
                    <img src={result.image} alt={result.title} />
                    <span>{result.title}</span>
                    <span className="desc">
                      {displayedDescription}
                      {isLongDescription && (
                        <button
                          onClick={() => toggleReadMore(index)}
                          className="read-more-btn"
                        >
                          {expanded[index] ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </span>
                    <span>{result.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataDisplay;
