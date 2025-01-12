import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import ProductDataDisplay from "../ProductDataDisplay/ProductDataDisplay";
const ContentPage = ({data}) => {
  return (
    <div>
      <LandingPage />
      <ProductDataDisplay data={data}/>
    </div>
  );
};

export default ContentPage;
