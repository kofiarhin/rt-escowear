import "./nav.styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Nav = () => {
  const { cartData } = useSelector((state) => state.cartReducer);
  return (
    <div>
      <nav className="nav-links">
        <Link to="/cart">
          Cart <span> {cartData.length > 0 && cartData.length} </span>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
