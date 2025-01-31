import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ContentPage from "./ContentPage/ContentPage";
import { useState } from "react";
import Login from "./Registration/Login/Login"
import AddToCart from "./AddToCart/AddToCart";
function App() {
  const [data, setData] = useState(" ");
  const [visibility, setvisibility] = useState(false);
  const [showLogin, setSHowLogin] = useState(false);
  console.log(showLogin);
  return (
    <div>
      <Header setData={setData} setvisibility={setvisibility} setSHowLogin={setSHowLogin}/>
      <ContentPage data={data} visibility={visibility} showLogin={showLogin} />
            {/* <AddToCart/>  */}
      <Footer />
      {/* <AddToCart/> */}
    </div>
  );
}

export default App;
