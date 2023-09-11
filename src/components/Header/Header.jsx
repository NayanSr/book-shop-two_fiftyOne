import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <nav className="header-container">
      <a href="/">
        <img className="header-image" src={logo} alt="" />
      </a>
      <div className="header-links">
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
