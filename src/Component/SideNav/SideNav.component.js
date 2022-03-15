import Search from "../Search/Search.component";
import "./sideNav.styles.css";
import { Link } from "react-router-dom";
import { removeSideNav } from "../../redux/action/general.actions";
import { useDispatch } from "react-redux";
import Nav from "./Nav/Nav.component";
const SideNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="side-nav">
      <i
        className="fa fa-close close"
        onClick={() => dispatch(removeSideNav())}
      ></i>
      <Search />
      <Nav />
    </div>
  );
};

export default SideNav;
