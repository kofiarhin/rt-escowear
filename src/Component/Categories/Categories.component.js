import { useSelector } from "react-redux";
import "./categories.styles.css";
import Image from "../Image/Image.component";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data } = useSelector((state) => state.dataReducer);

  const categories = Object.keys(data);

  return (
    <div className="categories">
      <div className="container">
        <div className="categories-wrapper">
          {categories.map((cat, index) => {
            return (
              <Link to={`/home/${cat}`} key={index}>
                <Image type={cat} thumb={true} />
                <h1> {cat} </h1>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
