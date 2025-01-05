import React, { useState, useEffect } from "react";
import productsJsonData from "../ProductJsonData/ProductJsonData";
import "./ProductDisplay.css"
import { Category } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import productData from "../FeaturedProducts/ProductData";

const ProductDataDisplay = () => {
    const [titlesAndDescriptions, setTitlesAndDescriptions] = useState([]);
    const result = [];
    // console.log(Object.keys(productsJsonData[0]))
    const data = productsJsonData[0]
    // if(data['MENS']){
    //    // console.log(productsJsonData[0]['WOMENS'])
    // }
    useEffect(() => {
        // console.log(productsJsonData)
        // for (const products in productsJsonData) {

        //     for (const productssss in productsJsonData[products]) {
        //        // console.log(productsJsonData[0])
        //         //   console.log(productsJsonData[products][productssss])
        //         for (const productall in productsJsonData[products][productssss]) {
        //             //   console.log(productsJsonData[products][productssss][productall])
        //             for (const productallproducts in productsJsonData[products][productssss][productall]) {
        //                 // console.log(productsJsonData[products][productssss][productall][productallproducts].TITLE)
        //                 result.push({
        //                     title: productsJsonData[products][productssss][productall][productallproducts].TITLE,
        //                     description: productsJsonData[products][productssss][productall][productallproducts].DESCRIPTION,
        //                     image: productsJsonData[products][productssss][productall][productallproducts].IMAGE,
        //                     price: productsJsonData[products][productssss][productall][productallproducts].PRICE
        //                 })
        //             }
        //         }

        //     }
        // }
        for (const products in productsJsonData[0]['MENS']) {
            //console.log(products)
            for (const product2 in productsJsonData[0]['MENS'][products]) {
                console.log(productsJsonData[0]['MENS'][products][product2].TITLE)
                result.push({
                    title: productsJsonData[0]['MENS'][products][product2].TITLE,
                    description: productsJsonData[0]['MENS'][products][product2].DESCRIPTION,
                    image: productsJsonData[0]['MENS'][products][product2].IMAGE,
                    price: productsJsonData[0]['MENS'][products][product2].PRICE
                })
            }
        }
         setTitlesAndDescriptions(result)
        //  console.log(titlesAndDescriptions)
    }, [titlesAndDescriptions]);
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
                                <h2>Filter / Sort</h2>
                                <hr />
                            </div>
                            <div className="search-products-container">
                                <div className="search-product">
                                    <input type="text" placeholder="Search For the Products" /><SearchIcon sx={{
                                        color: "gray",
                                    }} /><br />
                                </div>
                                <br />
                                <span>Filter By Price</span><br />
                                <input type="checkbox" name="price" value="Less Than 100" /> Less Than 100<br />
                                <input type="checkbox" name="price" value="100-200" /> 100-200<br />
                                <input type="checkbox" name="price" value="200-500" /> 200-500<br />
                                <input type="checkbox" name="price" value="500-1000" /> 500-1000<br />
                                <input type="checkbox" name="price" value="more than 1000" /> More than 1000<br />
                                <hr />
                                <span>Filter By Color</span><br />
                                <input type="checkbox" name="price" value="red" /> Red<br />
                                <input type="checkbox" name="price" value="blue" /> Blue<br />
                                <input type="checkbox" name="price" value="Green" /> Green<br />
                                <input type="checkbox" name="price" value="Black" /> Black<br />
                                <input type="checkbox" name="price" value="Yellow" /> Yellow<br />
                            </div>
                        </div>
                        <div className="product-display-page">
                            <div className="products-images">
                                {/* <div className="product-images-content">
                                    <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60" />
                                    <span>Flats</span>
                                    <span>Kids Ville Ballerina Flats Buy Kids Ville Ballerina Flat</span>
                                    <span>1000RS</span>
                                </div> */}
                                {titlesAndDescriptions.map((result, index) => (

                                    <div className="product-images-content">
                                        <img src={result.image} />
                                        <span>{result.title}</span>
                                        <span>{result.description}</span>
                                        <span>{result.price}</span>
                                    </div>
                                ))

                                }


                                {/* <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60" />
                                <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60" />
                                <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60" />
                                <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60" />
                                <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60" />
                                <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60" />
                                <img src="https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&auto=format&fit=crop&q=60" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default ProductDataDisplay;
