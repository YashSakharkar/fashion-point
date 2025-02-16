import React, { useState } from "react";
import "./FAQpage.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import faqs from "./FAQData";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const FAQpage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <Header/>
<div className="faq">
      <div className="faqContainer">
        {/* FAQ Header */}
        <div className="faqContainerHeading">
          <h1 className="faqHeading">Frequently Asked Questions</h1>
          <p className="faqPara">
            Find answers to commonly asked questions below.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="faqSubContainer">
          {/* Left Section: Questions and Answers */}

          <div className="faqSubContainerLeft">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faqQuestionAnswer ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleToggle(index)}
              >
                <div className="faqQuestion">
                  <h2>{faq.question}</h2>
                  <KeyboardArrowDownIcon
                    className={`faqIcon ${
                      activeIndex === index ? "active" : ""
                    }`}
                  />
                </div>
                <div
                  className={`faqAnswer ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          {/* Right Section: FAQ Image */}
          <div className="faqSubContainerRight">
            <div className="faqImgContainer">
              {/* <img src="/images/testImg/zebronic.jpg" alt="FAQ Illustration" className="faqImg" /> */}

              <img
                src="/images/FAQpage/fAqq.avif"
                alt="FAQ Illustration"
                className="faqImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
    
  );
};

export default FAQpage;
