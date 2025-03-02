import React, { useState, useEffect, useContext } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import Face6Icon from "@mui/icons-material/Face6";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Loader from "../Loader/Loader";
import { UserContext } from "../UserContext/UserContext";


const Header = () => {
  const [visible, setVisisble] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [person, setPerson] = useState("");
  const [loader, setLoader] = useState(false);
  const [showLoginss, setSHowLoginss] = useState(false);
  const [selected, setSelected] = useState("HOME");
  const [loginUser, setLogginUser] = useState(' ')
  const [avatarname, setAvatarName] = useState(' ')
  const { loggedInUser } = useContext(UserContext)
  const [avatarpanel,setavatarPanel] = useState(false)
  const [avataremail,setAvatarEmail] = useState(' ')
  const navigate = useNavigate();
  const location = useLocation();
  var loggedInUSerJson = JSON.stringify(loggedInUser, null, 1)
  var parsedUser = JSON.parse(loggedInUSerJson);
  const { addToCartLength } = useContext(UserContext)
  useEffect(() => {
    if (parsedUser != null) {
      // console.log(parsedUser.name)
      var avatarName = parsedUser.name.split(" ");
      const firstPart = avatarName[0];
      const secondPart = avatarName[1];
      const FirstLetter = firstPart.charAt(0);
      const secondLetter = secondPart.charAt(0);
      setAvatarName(FirstLetter + "" + secondLetter)
      setLogginUser(parsedUser.name)
      setAvatarEmail(parsedUser.email)
    }
  }, [loginUser])

  //console.log(loginUser)
  useEffect(() => {
    if (location.pathname === "/") {
      setSelected("HOME");
    }
    else if (location.pathname === "/FAQPage") {
      setSelected("faqs");
    }
    else if (location.pathname === "/return&order") {
      setSelected("Return");
    }
    else if (location.pathname === "/login") {
      setSelected("login");
      
    } 
    else if (location.pathname === "/addtocart") {
      setSelected("shoppingicon");
    } else if (location.pathname.includes("/products")) {
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

  const HandleAddToCartSynbol =()=>{
   // console.log(loggedInUser)
   setSelected("shoppingicon");
    if(loggedInUser){
      navigate("/addtocart");
    }
    else{
      alert("Please Login !!")
    }
  }
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
                className={`hLi ${selected === "HOME"
                  ? "hDR-selected-menu"
                  : "Unselected-selected-menu"
                  }`}
              >
                HOME
              </li>

              <li
                onClick={() => HandlePerson("MENS")}
                className={`hLi ${selected === "MENS"
                  ? "hDR-selected-menu"
                  : "Unselected-selected-menu"
                  }`}
              >
                MENS
              </li>

              <li
                onClick={() => HandlePerson("WOMENS")}
                className={`hLi ${selected === "WOMENS"
                  ? "hDR-selected-menu"
                  : "hDR-Unselected-selected-menu"
                  }`}
              >
                WOMENS
              </li>

              <li
                onClick={() => HandlePerson("KIDS")}
                className={`hLi ${selected === "KIDS"
                  ? "hDR-selected-menu"
                  : "hDR-Unselected-selected-menu"
                  }`}
              >
                KIDS
              </li>

              <li
                onClick={() => HandlePerson("ACCESSORIES")}
                className={`hLi ${selected === "ACCESSORIES"
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
                className={`hLi ${selected === "faqs"
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
                className={`hLi ${selected === "Return"
                  ? "hDR-selected-menu"
                  : "hDR-Unselected-selected-menu"
                  }`}
              >
                Returns & Orders
              </li>

              <li
                onClick={() => {
                  setSelected("login");
                  navigate("/login");
                }}
                className={`hLi ${selected === "login"
                  ? "hDR-selected-menu"
                  : "hDR-Unselected-selected-menu"
                  }`}
              >{loginUser == ' ' ?
                <Face6Icon
                  sx={{ color: "aqua", fontSize: 30 }}
                /> :
                <div>
                  <div className="avatar-name-container" onMouseEnter={()=>{  
                    setavatarPanel(true)}}  onMouseLeave={()=>{setavatarPanel(false)}}>
                    <div className="avatar-name">
                      {avatarname}
                    </div>
                  </div>
                  {avatarpanel && (
                    <div>
                    <div className="avatart-panel-subcontainer">
                      <div className="avatar-name-container">
                        <div className="avatar-name">
                          {avatarname}
                        </div>
                      </div>
                      <div>
                         <div>{loginUser}</div>
                         <div>{avataremail}</div>
                      </div>
                    </div>
                  </div>
                  )
                    
                  }
              
                </div>

                }
              </li>
              <li
                onClick={() => {
                  HandleAddToCartSynbol()
                  setSelected("shoppingicon");
                 // if(loggedInUser.loggedInUser){
                  //navigate("/addtocart");
                 // }
                  //else{
                 //   alert("please login !")
                 // }
                }}
                className={`hLi ${selected === "shoppingicon"
                  ? "hDR-selected-menu"
                  : "hDR-Unselected-selected-menu"
                  }`}
              >
                <ShoppingCartIcon sx={{ color: "aqua", fontSize: 30 }} />
                <sup>{addToCartLength}</sup>
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
