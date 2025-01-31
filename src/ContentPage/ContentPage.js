import React, { useEffect, useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import ProductDataDisplay from "../ProductDataDisplay/ProductDataDisplay";
import Loader from "../Loader/Loader";
import Login from "../Registration/Login/Login"
const ContentPage = ({ data, visibility ,showLogin}) => {
  const [bannerPageVisisbility, setBannerDisplayPageVisisbility] =
    useState(true);
  const [productDisplayPageVisisbility, setProductDisplayPageVisisbility] =
    useState(false);
  const [loader, setLoader] = useState(false);
  const [showLogins, setShowLogins] =
  useState(false);
  useEffect(() => {
 
    if (visibility) {
        setLoader(true)
        setTimeout(()=>{
        setLoader(false)
        setProductDisplayPageVisisbility(true);
        },3000)
      setBannerDisplayPageVisisbility(false);
      setShowLogins(false)
    } else {
      setProductDisplayPageVisisbility(false);
      setBannerDisplayPageVisisbility(true);
      setShowLogins(false)
      setShowLogins(false)
    }
    if(showLogin){
      setShowLogins(true)
      setLoader(false)
      setBannerDisplayPageVisisbility(false)
      setProductDisplayPageVisisbility(false)
    }
  }, [visibility,showLogin]);
  return (
    <div>
      {bannerPageVisisbility && <LandingPage />}
      {productDisplayPageVisisbility && <ProductDataDisplay data={data} />}
      {loader && <Loader />}
      {
        showLogins &&(
          <Login/>
        )
      }
      
    </div>
  );
};

export default ContentPage;
