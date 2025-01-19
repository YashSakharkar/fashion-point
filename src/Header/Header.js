import React, { useState } from "react";
import "./Header.css";
import Face6Icon from "@mui/icons-material/Face6";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Loader from "../Loader/Loader";
const Header = ({ setData, setvisibility }) => {
  const [visible, setVisisble] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [person, setPerson] = useState("");
  const [Loader, setLoader] = useState(false);
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
      
    </>
  );
};

export default Header;
