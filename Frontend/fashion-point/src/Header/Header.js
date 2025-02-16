import React, { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import Face6Icon from "@mui/icons-material/Face6";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Loader from "../Loader/Loader";

const Header = () => {
  const [visible, setVisisble] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [person, setPerson] = useState("");
  const [loader, setLoader] = useState(false);
  const [showLoginss, setSHowLoginss] = useState(false);
  const [selected, setSelected] = useState("HOME");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setSelected("HOME");
    } 
    else if (location.pathname === "/FAQPage") {
      setSelected("faqs"); 
    }
    else if (location.pathname === "/return&order") {
      setSelected("Return"); 
    }else if (location.pathname.includes("/products")) {
      const category = new URLSearchParams(location.search).get("data");
      if (category) {
        setSelected(category.toUpperCase());
      }
    }
  }, [location]);

  const HandlePerson = (person) => {
    setSelected(person); // ✅ Ensures selection updates immediately
    navigate(`/products?data=${encodeURIComponent(person)}`);
  };

  return (
    <>
      <div className="hDR-header">
        <div className="hDR-container">
          <nav className="hDR-header-menu">
            <ul className="hDR-menu-bar">
              <li
                onClick={() => {
                  navigate("/");
                  setSelected("HOME");
                }}
                className={`hLi ${
                  selected === "HOME"
                    ? "hDR-selected-menu"
                    : "Unselected-selected-menu"
                }`}
              >
                HOME
              </li>

              <li
                onClick={() => HandlePerson("MENS")}
                className={`hLi ${
                  selected === "MENS"
                    ? "hDR-selected-menu"
                    : "Unselected-selected-menu"
                }`}
              >
                MENS
              </li>

              <li
                onClick={() => HandlePerson("WOMENS")}
                className={`hLi ${
                  selected === "WOMENS"
                    ? "hDR-selected-menu"
                    : "hDR-Unselected-selected-menu"
                }`}
              >
                WOMENS
              </li>

              <li
                onClick={() => HandlePerson("KIDS")}
                className={`hLi ${
                  selected === "KIDS"
                    ? "hDR-selected-menu"
                    : "hDR-Unselected-selected-menu"
                }`}
              >
                KIDS
              </li>

              <li
                onClick={() => HandlePerson("ACCESSORIES")}
                className={`hLi ${
                  selected === "ACCESSORIES"
                    ? "hDR-selected-menu"
                    : "hDR-Unselected-selected-menu"
                }`}
              >
                ACCESSORIES
              </li>
            </ul>
          </nav>

          <div className="hDR-logo-img">
            <img
              src="/images/Header/logonew.webp"
              alt="logo-img"
              className="logoImg"
              onClick={() => {
                navigate("/");
                setSelected("HOME");
              }}
            />
          </div>

          <nav className="hDR-header-menu ">
            <ul className="hDR-menu-bar">
              <li
                className="hDR-language-logo hLi"
                onMouseEnter={() => {
                  setVisisble(true);
                }}
                onMouseLeave={() => {
                  setVisisble(false);
                }}
              >
                <img src="./Flag_of_India.svg.webp" alt="indian-flag-img" />
                <span
                  onClick={() => {
                    setSelected("English");
                    setSHowLoginss(false);
                  }}
                  className={
                    selected === "English"
                      ? "hDR-selected-menu"
                      : "hDR-Unselected-selected-menu"
                  }
                >
                  {selectedLanguage ? selectedLanguage : <span>English</span>}
                </span>

                <KeyboardArrowDownIcon className="downArrow" />
                {visible && (
                  <ul className="hDR-languages-block">
                    <li
                      onClick={() => setSelectedLanguage("English")}
                      className="hLi"
                    >
                      English
                    </li>
                    <li
                      onClick={() => setSelectedLanguage("Hindi")}
                      className="hLi"
                    >
                      Hindi
                    </li>
                    <li
                      onClick={() => setSelectedLanguage("Telugu")}
                      className="hLi"
                    >
                      Telugu
                    </li>
                    <li
                      onClick={() => setSelectedLanguage("Kannada")}
                      className="hLi"
                    >
                      Kannada
                    </li>
                    <li
                      onClick={() => setSelectedLanguage("Marathi")}
                      className="hLi"
                    >
                      Marathi
                    </li>
                  </ul>
                )}
              </li>
              <li
                onClick={() => {
                  setSelected("faqs");
                  setSHowLoginss(false);
                  navigate("/FAQPage");
                }}
                className={`hLi ${
                  selected === "faqs"
                    ? "hDR-selected-menu"
                    : "hDR-Unselected-selected-menu"
                }`}
              >
                FAQs
              </li>

              <li
                onClick={() => {
                  setSelected("Return");
                
                  //setPerson("Return")
                  navigate("/return&order")
                }}
                className={`hLi ${
                  selected === "Return"
                    ? "hDR-selected-menu"
                    : "hDR-Unselected-selected-menu"
                }`}
              >
                Returns & Orders
              </li>

              <li
                onClick={() => {
                  setSelected("profile");
                  navigate("/login");
                }}
                className={`hLi ${
                  selected === "profile"
                    ? "hDR-selected-menu"
                    : "hDR-Unselected-selected-menu"
                }`}
              >
                <Face6Icon
                  sx={{ color: "aqua", fontSize: 30 }}
                  onClick={() => {
                    setSHowLoginss(true);
                  }}
                />
              </li>
              <li
                onClick={() => {
                  setSelected("shoppingicon");
                  navigate("/addtocart");
                }}
                className={`hLi ${
                  selected === "shoppingicon"
                    ? "hDR-selected-menu"
                    : "hDR-Unselected-selected-menu"
                }`}
              >
                <ShoppingCartIcon sx={{ color: "aqua", fontSize: 30 }} />
                <sup>2</sup>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {loader && <Loader className="loadOver" />}
    </>
  );
};

export default Header;
