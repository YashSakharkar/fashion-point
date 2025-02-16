import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="home-button">Go Back Home</Link>
    </div>
  );
};

export default PageNotFound;
