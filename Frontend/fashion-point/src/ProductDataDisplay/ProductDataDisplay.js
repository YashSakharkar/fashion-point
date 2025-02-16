import React, { useState, useEffect } from "react";
import productsJsonData from "./ProductJsonData";
import "./ProductDisplay.css";
import SearchIcon from "@mui/icons-material/Search";
import ProductView from "../ProductView/ProductView";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductDataDisplay = () => {
    const [titlesAndDescriptions, setTitlesAndDescriptions] = useState([]);
    const [expanded, setExpanded] = useState({});
    const [categories, setCategories] = useState('')
    
    const [serachedProduct, setSerachedProduct] = useState('')
    const [originalProducts, setOriginalProducts] = useState([]);
    const [dispalayProduct, setDisplayProducts] = useState([]);
    const [productListingPage, setProductListingPage] = useState(true);
    const [productDisplayPage, setProductDissplayPage] = useState(false);
    const [data,setData] = useState('');
    const location = useLocation();
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      setData(params.get("data") || ""); // Update state immediately when the URL changes
    }, [location.search])

    const priceRanges = [
        { label: "500 - 700", value: [500, 700] },
        { label: "700 - 900", value: [700, 900] },
        { label: "900 - 1300", value: [900, 1300] },
        { label: "Above 1300", value: [1300, Infinity] },
    ];
    const filterColors = [
        { label: "Red" },
        { label: "White" },
        { label: "Blue" },
        { label: "Black" },
        { label: "Yellow" },
        { label: "Green" },
    ];
    console.log(data)
    var productItems = productsJsonData[0][data];
    useEffect(() => {
        var result = [];
        const uniqueCheck = new Set();
        if (categories) {
            for (const products in productItems) {
                for (const product2 in productItems[categories]) {
                    if (!uniqueCheck.has(productItems[categories][product2].TITLE)) {
                        uniqueCheck.add(productItems[categories][product2].TITLE);
                        result.push({
                            title: productItems[categories][product2].TITLE,
                            description: productItems[categories][product2].DESCRIPTION,
                            image: productItems[categories][product2].IMAGE,
                            price: productItems[categories][product2].PRICE,
                        });

                    }
                }
            }
        }
        else {
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
        }

        setTitlesAndDescriptions(result);
        setOriginalProducts(result)

    }, [productItems, categories, serachedProduct]);

    const toggleReadMore = (index) => {
        setExpanded((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const HandleSearchProduct = () => {
        const searchResult = originalProducts.filter((filteredproducts) =>
            filteredproducts.title.toLowerCase().includes(serachedProduct) ||
            filteredproducts.description.toLowerCase().includes(serachedProduct)
        );
        setTitlesAndDescriptions(searchResult)
    };
    const handleCheckBoxes = (value) => {
        const products = originalProducts.filter((filetprice) => {
            const numericPrice = Number(filetprice.price.replace("RS", "").trim());
            if (value[1] === Infinity) {
                return numericPrice > 1300
            }
            return numericPrice <= value[1] && numericPrice > value[0];
        });

        setTitlesAndDescriptions(products)
    };


    const handleCheckboxColor = (color) => {
        const filterColor = originalProducts.filter((colorfilter) =>
            colorfilter.title.toLowerCase().includes(color.label.toLowerCase()) ||
            colorfilter.description.toLowerCase().includes(color.label.toLowerCase())
        )
        setTitlesAndDescriptions(filterColor)
    }
    const HandleDisplayProducts = (result) => {
        setDisplayProducts(result)
        setProductListingPage(false)
        setProductDissplayPage(true)
    }


    return (<>
        <Header />
        {
            productListingPage && (<div className="product-display-container">
                <div className="product-display-subcontainer">
                    <div className="product-categories-container">
                        {productsJsonData.map((productsJsonDataCategories, index) => {
                            const categories = Object.keys(productsJsonDataCategories[data] || {});
                            return (
                                <div key={index} className="product-categoriesname">
                                    <span onClick={() => { setCategories('') }}>All</span>
                                    {categories.map((Category, categoryIndex) => (
                                        <span key={categoryIndex} onClick={() => {
                                            setCategories(Category)
                                        }}>{Category}</span>
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
                                    <input type="text" placeholder="Search For the Products" onChange={(e) => {
                                        setSerachedProduct(e.target.value.toLowerCase())
                                    }} />
                                    <SearchIcon sx={{ color: "gray", cursor: "pointer" }} onClick={() => { HandleSearchProduct(serachedProduct) }} />
                                    <br />
                                </div>
                                <br />
                                <span>Filter By Price</span>
                                <br />
                                {priceRanges.map((range) => (
                                    <div>
                                        <input type="radio" value={`${range.value[0]}-${range.value[1]}`} name="pricecheckbox" onClick={() => { handleCheckBoxes(range.value) }} /><span> {range.label}</span>
                                        <br />
                                    </div>

                                ))
                                }
                                <br />
                                <hr />
                                <span>Filter By Color</span>
                                <br />
                                {filterColors.map((colors) => (
                                    <div>
                                        <input type="radio" name="price" value={colors.label} onClick={() => { handleCheckboxColor(colors) }} /> <span>{colors.label}</span>
                                        <br />
                                    </div>
                                ))
                                }

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
                                            <img src={result.image} alt={result.title} onClick={() => { HandleDisplayProducts(result) }} />
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
            </div>)
        }
        {productDisplayPage && (
            <ProductView dispalayProduct={dispalayProduct} />
        )}
        <Footer />
    </>

    );
};

export default ProductDataDisplay;