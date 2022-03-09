import Search from "../Search/Search.component";
import "./sideNav.styles.css";
import { Link } from "react-router-dom";
import { removeSideNav } from "../../redux/action/general.actions";
import { useDispatch } from "react-redux";
const SideNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="side-nav">
      <i
        className="fa fa-close close"
        onClick={() => dispatch(removeSideNav())}
      ></i>
      <Search />

      <nav>
        <Link to="Cart">
          Cart <span>2</span>
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
