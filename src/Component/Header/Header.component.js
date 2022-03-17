import Search from "../Search/Search.component";
import "./header.styles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showSideNav } from "../../redux/action/general.actions";
const Header = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cartReducer);

  return (
    <header className="header-wrapper">
      <div className="container">
        <div className="main-header">
          <Link to="/">
            <h1>EscoWear</h1>
          </Link>

          <Search />
          <nav>
            <Link to="/">
              <i className="fa fa-home"></i>
            </Link>
            <Link to="/cart">
              <i className="fa fa-shopping-cart"></i>
              <span>{cartData.length > 0 ? cartData.length : ""} </span>
            </Link>
          </nav>

          <div className="menu" onClick={() => dispatch(showSideNav())}>
            <i className="fa fa-bars"></i>
          </div>
        </div>

        <div className="links">
          <Link to="/home/shirts">Shirts</Link>
          <Link to="/home/gym">Gym</Link>
          <Link to="/home/shoes">Shoes</Link>
          <Link to="/home/hoodies">Hoodies</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
