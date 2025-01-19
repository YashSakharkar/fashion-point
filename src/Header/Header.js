import React, { useState } from "react";
import "./Header.css";
import Face6Icon from "@mui/icons-material/Face6";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Header = ({ setData, setvisibility,setSHowLogin }) => {
  const [visible, setVisisble] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [person, setPerson] = useState("");
  const [Loader, setLoader] = useState(false);
  const [showLoginss, setSHowLoginss] = useState(false);

  if (person === "HOME" || person === "") {
    setvisibility(false);
  } else {
    setvisibility(true);
    setData(person);
  }

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const [selected, setSelected] = useState("HOME");
  setSHowLogin(showLoginss)

  return (
    <>
      <div className="header">
        <div className="container">
          <nav className="header-menu">
            <ul className="menu-bar">
              <li
                onClick={() => {
                  setPerson("HOME");
                  setSelected("HOME");
                  setSHowLoginss(false)
                }}
                className={
                  selected === "HOME"
                    ? "selected-menu"
                    : "Unselected-selected-menu"
                }
              >
                HOME
              </li>
              <li
                onClick={() => {
                  setPerson("MENS");
                  setSelected("MENS");
                  setSHowLoginss(false)
                }}
                className={
                  selected === "MENS"
                    ? "selected-menu"
                    : "Unselected-selected-menu"
                }
              >
                MENS
              </li>

              <li
                onClick={() => {
                  setPerson("WOMENS");
                  setSelected("WOMENS");
                  setSHowLoginss(false)
                }}
                className={
                  selected === "WOMENS"
                    ? "selected-menu"
                    : "Unselected-selected-menu"
                }
              >
                WOMENS
              </li>

              <li
                onClick={() => {
                  setPerson("KIDS");
                  setSelected("KIDS");
                  setSHowLoginss(false)
                }}
                className={
                  selected === "KIDS"
                    ? "selected-menu"
                    : "Unselected-selected-menu"
                }
              >
                KIDS
              </li>
              <li
                onClick={() => {
                  setPerson("ACCESORIES");
                  setSelected("ACCESORIES");
                  setSHowLoginss(false)
                }}
                className={
                  selected === "ACCESORIES"
                    ? "selected-menu"
                    : "Unselected-selected-menu"
                }
              >
                ACCESORIES
              </li>
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
                <span    onClick={() => {
                  setSelected("English");
                 setSHowLoginss(false)
                }}
                className={
                  selected === "English"
                    ? "selected-menu"
                    : "Unselected-selected-menu"
                }>
                 
                  {selectedLanguage ? selectedLanguage : <span>English</span>}
                </span>
                <KeyboardArrowDownIcon />
                {visible && (
                  <ul className="languages-block">
                    <li onClick={() => handleLanguageClick("English")}>
                      English
                    </li>
                    <li onClick={() => handleLanguageClick("Hindi")}>Hindi</li>
                    <li onClick={() => handleLanguageClick("Telugu")}>
                      Telugu
                    </li>
                    <li onClick={() => handleLanguageClick("Kannada")}>
                      Kannada
                    </li>
                    <li onClick={() => handleLanguageClick("Marathi")}>
                      Marathi
                    </li>
                  </ul>
                )}
              </li>
              <li  onClick={() => {
                  setSelected("Return");
                 setSHowLoginss(false)
                }}
                className={
                  selected === "Return"
                    ? "selected-menu"
                    : "Unselected-selected-menu"
                }>Returns & Orders</li>
              <li  onClick={() => {
                  setSelected("profile");
                }}
                className={
                  selected === "profile"
                    ? "selected-menu"
                    : "Unselected-selected-menu"
                }>
                <Face6Icon sx={{ color: "aqua", fontSize: 30 }} onClick={()=>{
                  setSHowLoginss(true)
                  // setVisisble(false)
                  setvisibility(false)
              
                  }} />
              </li>
              <li  onClick={() => {
                  setSelected("shoppingicon");
                 setSHowLoginss(false)
                }}
                className={
                  selected === "shoppingicon"
                    ? "selected-menu"
                    : "Unselected-selected-menu"
                }>
                <ShoppingCartIcon sx={{ color: "aqua", fontSize: 30 }} />
                <sup>2</sup>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
