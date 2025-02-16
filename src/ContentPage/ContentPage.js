import React, { useEffect, useState } from "react";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



const ContentPage = () => {
  const [bannerPageVisisbility, setBannerDisplayPageVisisbility] =
    useState(true);
  const [productDisplayPageVisisbility, setProductDisplayPageVisisbility] =
    useState(false);
  const [loader, setLoader] = useState(false);
  const [showLogins, setShowLogins] =
    useState(false);
  useEffect(() => {

    // if (visibility) {
    //     setLoader(true)
    //     setTimeout(()=>{
    //     setLoader(false)
    //     setProductDisplayPageVisisbility(true);
    //     },3000)
    //   setBannerDisplayPageVisisbility(false);
    //   setShowLogins(false)
    // } else {
    //   setProductDisplayPageVisisbility(false);
    //   setBannerDisplayPageVisisbility(true);
    //   setShowLogins(false)
    //   setShowLogins(false)
    // }
    // if(showLogin){
    //   setShowLogins(true)
    //   setLoader(false)
    //   setBannerDisplayPageVisisbility(false)
    //   setProductDisplayPageVisisbility(false)
    // }
  });
  return (
    <div>
      <Header />
      <LandingPage />

      <Footer />
  
    </div>
  );
};

export default ContentPage;
