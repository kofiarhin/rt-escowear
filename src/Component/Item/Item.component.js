import "./item.styles.css";
import Image from "../Image/Image.component";
const Item = ({ item = {}, type }) => {
  const { name, price } = item;
  return (
    <div className="item-wrapper">
      <div className="image">
        <Image name={name} type={type} />.
        <div className="image-wrapper">
          <div className="image-unit">
            <Image name={name} type={type} position={1} />
          </div>

          <div className="image-unit">
            <Image name={name} type={type} position={2} />
          </div>

          <div className="image-unit">
            <Image name={name} type={type} position={3} />
          </div>
        </div>
      </div>
      <div className="content">
        <h1> {name} </h1>
        <h2> $ {price.toFixed(2)} </h2>
        <div className="button-wrapper">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
