import React, { useEffect, useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import ProductDataDisplay from "../ProductDataDisplay/ProductDataDisplay";
import Loader from "../Loader/Loader";
const ContentPage = ({ data, visibility }) => {
  const [bannerPageVisisbility, setBannerDisplayPageVisisbility] =
    useState(true);
  const [productDisplayPageVisisbility, setProductDisplayPageVisisbility] =
    useState(false);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    if (visibility) {
        setLoader(true)
        setTimeout(()=>{
        setLoader(false)
        setProductDisplayPageVisisbility(true);
        },3000)
      setBannerDisplayPageVisisbility(false);
    } else {
      setProductDisplayPageVisisbility(false);
      setBannerDisplayPageVisisbility(true);
    }
  }, [visibility]);
  return (
    <div>
      {bannerPageVisisbility && <LandingPage />}

      {productDisplayPageVisisbility && <ProductDataDisplay data={data} />}
      {loader && <Loader />}
    </div>
  );
};

export default ContentPage;
