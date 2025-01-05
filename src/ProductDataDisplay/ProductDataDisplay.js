import React from "react";
import productsJsonData from "../ProductJsonData/ProductJsonData";
import "./ProductDisplay.css"
import { Category } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';

const ProductDataDisplay = () => {
    return (

        <>
            <div className="product-display-container">

                <div className="product-display-subcontainer">
                    <div className="product-categories-container">
                        {productsJsonData.map((productsJsonDataCategories, index) => {
                            const categories = Object.keys(productsJsonDataCategories.MENS);
                            return (

                                <div key={index} className="product-categoriesname">
                                    <span >All</span>
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
                                <span>Filter</span>
                                <hr />
                            </div>
                            <div className="search-products-container">
                                <div className="search-product">
                                    <input type="text" placeholder="Search For the Products" /><SearchIcon sx={{right:50}}/><br />
                                </div>

                                <span>Filter By Price</span><br />
                                <input type="checkbox" name="price" value="Less Than 100" /> Less Than 100<br />
                                <input type="checkbox" name="price" value="100-200" />100-200<br />
                                <input type="checkbox" name="price" value="200-500" />200-500<br />
                                <input type="checkbox" name="price" value="500-1000" />500-1000<br />
                                <input type="checkbox" name="price" value="more than 1000" />More than 1000<br />
                            </div>
                        </div>
                        <div className="product-display-page">this is product page</div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default ProductDataDisplay;
