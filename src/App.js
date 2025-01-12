
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ContentPage from "./ContentPage/ContentPage";
import { useState } from "react";

function App() {
  const[data,setData] = useState(' ');
  const[visibility,setvisibility]=useState(false)
  console.log(visibility)
  return (
    <div>
      <Header setData={setData}  setvisibility={setvisibility}/>
      <ContentPage  data={data} visibility={visibility}/>
      <Footer />
    </div>
  );
}

export default App;


