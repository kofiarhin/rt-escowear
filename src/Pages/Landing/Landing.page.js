import "./landing.styles.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-wrapper">
        <div className="landing-unit">
          <Link to="/home/shirts"> Shirts</Link>
        </div>

        <div className="landing-unit">
          <Link to="/home/shoes"> Shoes</Link>
        </div>

        <div className="landing-unit">
          <Link to="/home/hoodies"> Hoodies</Link>
        </div>

        <div className="landing-unit">
          <Link to="/home/gym"> Gym </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
