// import './App.css';



import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Card from './Card/Card';
import Products from './FeaturedProducts/Products'
// import Login from './Registration/Login/Login'

function App() {
  return (
    <div >
      <Header />
      {/* <Login/> */}
      <Banner />
      <Card />
      <Products />
      <Footer />

    </div>
  );
}

export default App;
