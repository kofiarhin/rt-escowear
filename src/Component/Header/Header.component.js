import Search from "../Search/Search.component";
import "./header.styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSideNav } from "../../redux/action/general.actions";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="main-header">
      <Link to="/">
        <h1>EscoWear</h1>
      </Link>

      <Search />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart <span>2</span>
        </Link>
      </nav>

      <div className="menu" onClick={() => dispatch(showSideNav())}>
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};
export default Header;
