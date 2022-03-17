import { Link } from "react-router-dom";
import "./card.styles.css";
import Image from "../Image/Image.component";
const Card = ({ item = {}, type }) => {
  const { name } = item;

  return (
    <Link to={`/details/${type}/${name}`} className="card">
      <Image type={type} name={name} position={1} />
      {/* <BackgroundImage type={type} name={name} /> */}
      <h2> {name} </h2>
    </Link>
  );
};
export default Card;
