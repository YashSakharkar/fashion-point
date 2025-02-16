import { Link } from "react-router-dom";
import "./ItemNotFound.css"; 

const PageNotFound = () => {
  return (
   <>
     <div className="item-not-found-container">
      <img  
        src={require("./ItemNotFound.png")}
        alt="Empty Cart" 
        className="item-not-found-image"
      />
      <h1 className="item-not-found-title">Oops! Item Not Found</h1>
      <p className="item-not-found-message">
        Looks like this item is out of stock or doesn't exist.  
        But don't worry, we have plenty of amazing products for you!
      </p>
            <p className="item-not-found-button">🛍️ Continue Shopping</p>

      {/* <Link to="/" className="item-not-found-button">🛍️ Continue Shopping</Link> */}
    </div>
   </>
  );
};

export default PageNotFound;
