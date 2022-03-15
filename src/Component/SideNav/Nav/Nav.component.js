import "./nav.styles.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav className="nav-links">
        <Link to="/cart">
          Cart <span>2</span>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
