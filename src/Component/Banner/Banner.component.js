import "./banner.styles.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div
      className="banner"
      //   style={{
      //     backgroundImage: `url(/data/images/banner.jpg)`,
      //   }}
    >
      <div className="overlay">
        <Link to="/home/hoodies">Enter Shop</Link>
      </div>
    </div>
  );
};

export default Banner;
