// import './App.css';



import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Card from './Card/Card';
import Products from './FeaturedProducts/Products'
import ProductDataDisplay from './ProductDataDisplay/ProductDataDisplay';
import DummySpace from './DummySpace/DummySpace';
import Login from './Registration/Login/Login'

function App() {
  return (
    <div >
      <Header />
      <DummySpace />

      {/* <ProductDataDisplay /> */}


      {/* <Banner />
      <Card />
      <Products /> */}


    <Login/> 

      <Footer />
      {/* <ProductDataDisplay/> */}

    </div>
  );
}

export default App;

