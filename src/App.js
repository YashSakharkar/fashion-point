
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ContentPage from "./ContentPage/ContentPage";
import { useState } from "react";

function App() {
  const[data,setData] = useState(' ');
  return (
    <div>
      <Header setData={setData} />
      <ContentPage  data={data}/>
      <Footer />
    </div>
  );
}

export default App;


