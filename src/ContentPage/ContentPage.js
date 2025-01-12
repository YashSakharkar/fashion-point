import React, { useEffect, useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import ProductDataDisplay from "../ProductDataDisplay/ProductDataDisplay";
const ContentPage = ({ data,visibility }) => {
  const [bannerPageVisisbility, setBannerDisplayPageVisisbility] = useState(true)
  const [productDisplayPageVisisbility, setProductDisplayPageVisisbility] = useState(false)
  useEffect(() => {
   if(visibility){
       setProductDisplayPageVisisbility(true)
    setBannerDisplayPageVisisbility(false)
   }
   else{
    setProductDisplayPageVisisbility(false)
    setBannerDisplayPageVisisbility(true)
   }
  }, [visibility])
  return (
    <div>
      {
        bannerPageVisisbility && (
          <LandingPage />
        )
      }

      {
        productDisplayPageVisisbility && (
          <ProductDataDisplay data={data} />
        )
      }



    </div>
  );
};

export default ContentPage;
