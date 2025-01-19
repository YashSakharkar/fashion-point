 
import React, { useState } from "react";
import "./FAQpage.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FAQpage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle visibility
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum harum, sit dignissimos repellendus suscipit error fugiat perferendis placeat commodi itaque, qui, delectus provident saepe.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum harum, sit dignissimos repellendus suscipit error fugiat perferendis placeat commodi itaque, qui, delectus provident saepe.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer: "Answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum harum, sit dignissimos repellendus suscipit error fugiat perferendis placeat commodi itaque, qui, delectus provident saepe.",
    },
  ];

  return (
    <div className="faq">
      <div className="faqContainer">
        <div className="faqContainerHeading">
          <h1 className="faqHeading">FAQ Questions Answered</h1>
          <p className="faqPara">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
            possimus.
          </p>
        </div>
        <div className="faqSubContainer">
          {/* Question and Answer Section */}
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
                  <h1>{faq.question}</h1>
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
          {/* Right Section */}
          <div className="faqSubContainerRight">right</div>
        </div>
      </div>
    </div>
  );
};

export default FAQpage;
