import React from "react";
import Card from "../Card/Card";
import CardSecond from "../CardSecond/CardSecond";
import Products from "../FeaturedProducts/Products";
import Banner from "../Banner/Banner";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <Card />
      <CardSecond />
      <Products />
    </div>
  );
};

export default LandingPage;
