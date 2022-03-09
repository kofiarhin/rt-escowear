import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Image from "../../Component/Image/Image.component";
import "./details.styles.css";
const Details = () => {
  const { name, type } = useParams();
  const { data } = useSelector((state) => state.dataReducer);

  const item = data[type].find((item) => item.name === name);

  return (
    <div className="details">
      <Image name={item.name} type={type} />
      <h1> {item.name} </h1>
      <h2> ${item.price} </h2>
    </div>
  );
};

export default Details;
