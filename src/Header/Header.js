import React, { useState } from "react";
import "./Header.css";
import Face6Icon from "@mui/icons-material/Face6";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Header = ({ setData, setvisibility }) => {
  const [visible, setVisisble] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [person, setPerson] = useState('');
  // onst [productVisibility, setProductVisibility] = useState(false);
  if (person === 'HOME' || person === '') {
    setvisibility(false)
  }
  else {
    setvisibility(true)
    setData(person);
  }



  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="header">
      <div className="container">
        <nav className="header-menu">
          <ul className="menu-bar">
            <li onClick={() => { setPerson("HOME") }}>HOME</li>
            <li
              onClick={(e) => {
                e.preventDefault();
                setPerson("MENS");
              }}
            >
              MENS
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                setPerson("WOMENS");
              }}
            >
              WOMENS
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                setPerson("KIDS");
              }}
            >
              KIDS
            </li>
            <li>ACCESORIES</li>
          </ul>
        </nav>
        <div className="logo-img">
          <img src="./logo-image-removebg-preview.png" alt="logo-img" />
        </div>
        <nav className="header-menu">
          <ul className="menu-bar">
            <li
              className="language-logo"
              onMouseEnter={() => {
                setVisisble(true);
              }}
              onMouseLeave={() => {
                setVisisble(false);
              }}
            >
              <img src="./Flag_of_India.svg.webp" alt="indian-flag-img" />
              <span>
                {" "}
                {selectedLanguage ? selectedLanguage : <span>English</span>}
              </span>
              <KeyboardArrowDownIcon />
              {visible && (
                <ul className="languages-block">
                  <li onClick={() => handleLanguageClick("English")}>
                    English
                  </li>
                  <li onClick={() => handleLanguageClick("Hindi")}>Hindi</li>
                  <li onClick={() => handleLanguageClick("Telugu")}>Telugu</li>
                  <li onClick={() => handleLanguageClick("Kannada")}>
                    Kannada
                  </li>
                  <li onClick={() => handleLanguageClick("Marathi")}>
                    Marathi
                  </li>
                </ul>
              )}
            </li>
            <li>Returns & Orders</li>
            <li>
              <Face6Icon sx={{ color: "aqua", fontSize: 30 }} />
            </li>
            <li>
              <ShoppingCartIcon sx={{ color: "aqua", fontSize: 30 }} />
              <sup>2</sup>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
