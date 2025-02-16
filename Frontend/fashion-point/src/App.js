import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ContentPage from "./ContentPage/ContentPage";
import ProductDataDisplay from "./ProductDataDisplay/ProductDataDisplay";
import Login from "./Login/Login"
import RegisterUser from "./Registration/RegisterUser"
import AddToCart from "./AddToCart/AddToCart";
import FAQPage from "./FAQpage/FAQpage";
import ReturnPolicy from "./ReturnPolicy/ReturnPolicy"

function App() {
  const [data, setData] = useState(" ");
  const [visibility, setvisibility] = useState(false);
  const [showLogin, setSHowLogin] = useState(false);
  console.log(showLogin);
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
        </Routes>
      </Router>


    </div>
  );
}

export default App;
