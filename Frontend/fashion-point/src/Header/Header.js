import React, { useState ,useEffect} from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Face6Icon from "@mui/icons-material/Face6";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Loader from "../Loader/Loader";
import PageNotFound from "../404page/PageNotFound";
const Header = () => {
  const [visible, setVisisble] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [person, setPerson] = useState("");
  const [loader, setLoader] = useState(false);
  const [showLoginss, setSHowLoginss] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (person) {
      HandlePerson(person);
    }
  }, [person]); 
  const HandlePerson = (person) => {
    console.log(person)
   navigate(`/products?data=${encodeURIComponent(person)}`);
  };

  // const HandlePerson = () => {
  //   setLoader(true);
  //   setTimeout(() => {
  //     if (
  //       person === "HOME" ||
  //       person === "MENS" ||
  //       person === "WOMENS" ||
  //       person === "KIDS" ||
  //       person === "ACCESSORIES"
  //     ) {
  //       navigate(`/products?data=${person}`);
  //       setLoader(false);
  //     }
  //   }, 1000);
  // };

  // const HandlePerson = () => {
  //   setLoader(true);
  
  //   setTimeout(() => {
  //     if (["HOME", "MENS", "WOMENS", "KIDS", "ACCESSORIES"].includes(person)) {
  //       navigate(`/products?data=${person}`);
  //     } else {
  //       navigate("/PageNotFound"); 
  //     }
  //     setLoader(false);
  //   }, 1000);
  // };
  
  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  const [selected, setSelected] = useState("HOME");

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
                onClick={() => {
                  setPerson("MENS");
                  setSelected("MENS");
                }}
                className={`hLi ${
                  selected === "MENS"
                    ? "hDR-selected-menu"
                    : "Unselected-selected-menu"
                }`}
              >
                MENS
              </li>

              <li
                onClick={() => {
                  setPerson("WOMENS");
                  setSelected("WOMENS");
                }}
                className={`hLi ${
                  selected === "WOMENS"
                    ? "hDR-selected-menu"
                    : "hDR-Unselected-selected-menu"
                }`}
              >
                WOMENS
              </li>

              <li
                onClick={() => {
                  setPerson("KIDS");
                  setSelected("KIDS");
                }}
                className={`hLi ${
                  selected === "KIDS"
                    ? "hDR-selected-menu"
                    : "hDR-Unselected-selected-menu"
                }`}
              >
                KIDS
              </li>
              <li
                onClick={() => {
                  setPerson("ACCESSORIES");
                  setSelected("ACCESSORIES");
                }}
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
              onClick={()=>{
                navigate("/")
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
                  {/* {selectedLanguage ? selectedLanguage : <span>English</span>} */}
                  {selectedLanguage ? (
                    selectedLanguage
                  ) : (
                    <span className="lang"> English</span>
                  )}
                </span>

                <KeyboardArrowDownIcon className="downArrow" />
                {visible && (
                  <ul className="hDR-languages-block">
                    <li
                      onClick={() => handleLanguageClick("English")}
                      className="hLi"
                    >
                      English
                    </li>
                    <li
                      onClick={() => handleLanguageClick("Hindi")}
                      className="hLi"
                    >
                      Hindi
                    </li>
                    <li
                      onClick={() => handleLanguageClick("Telugu")}
                      className="hLi"
                    >
                      Telugu
                    </li>
                    <li
                      onClick={() => handleLanguageClick("Kannada")}
                      className="hLi"
                    >
                      Kannada
                    </li>
                    <li
                      onClick={() => handleLanguageClick("Marathi")}
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
                  setSHowLoginss(false);
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
