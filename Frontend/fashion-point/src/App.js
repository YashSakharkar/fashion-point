import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState ,useEffect, useContext} from "react";
import ContentPage from "./ContentPage/ContentPage";
import ProductDataDisplay from "./ProductDataDisplay/ProductDataDisplay";
import Login from "./Login/Login"
import RegisterUser from "./Registration/RegisterUser"
import AddToCart from "./AddToCart/AddToCart";
import FAQPage from "./FAQpage/FAQpage";
import ReturnPolicy from "./ReturnPolicy/ReturnPolicy"
import Buynow from "./BuyNow/Buynow";
import axios from "axios";
import { UserContext } from "./UserContext/UserContext";


function App() {
  const [data, setData] = useState(" ");
  const [visibility, setvisibility] = useState(false);
  const [showLogin, setSHowLogin] = useState(false);
    const {setLoggedInUser} =  useContext(UserContext)
  console.log(showLogin);
  useEffect(() => {
    axios.get("http://localhost:9092/getLoggedInUser")
      .then(response => {
       // console.log("Full Response:", response);
        if (response.data && !response.data.empty) {
       //   console.log("User Data:", response.data);
          setLoggedInUser(response.data)
        } else {
          console.warn("No user data found!");
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <Router>
        <Routes>
         <Route path="/" element={<ContentPage/>}/>
         <Route path="/products" element={<ProductDataDisplay/>}/>
         <Route path="/FAQPage" element={<FAQPage/>}/>
         <Route path="/return&order" element={<ReturnPolicy/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/registeruser" element={<RegisterUser/>}/>
         <Route path="/addtocart" element={<AddToCart/>}/>
         <Route path="/buynow" element={<Buynow/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
