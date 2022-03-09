import { Link } from "react-router-dom";
import "./card.styles.css";
import Image from "../Image/Image.component";

const Card = ({ item = {}, type }) => {
  const { name, rest } = item;

  const imageUrl = `/data/images/${type}/${name}/1.jpg`;

  return (
    <Link to={`/details/${type}/${name}`} className="card">
      {/* <img src={imageUrl} alt="" /> */}
      <Image type={type} name={name} position={1} />
      <h2> {name} </h2>
    </Link>
  );
};
export default Card;
