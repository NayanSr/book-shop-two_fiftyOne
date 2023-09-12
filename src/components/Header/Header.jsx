import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header-container">
      <a href="/">
        <img className="header-image" src={logo} alt="" />
      </a>
      <div className="header-links">
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
