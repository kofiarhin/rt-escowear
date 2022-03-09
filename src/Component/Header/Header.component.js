import "./header.styles.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="main-header">
      <h1>EscoWear</h1>
      <div className="search">
        <input type="text" placeholder="Search Item" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/auth">Login/Register</Link>
      </nav>

      <div className="menu">
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};
export default Header;
