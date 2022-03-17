import "./item.styles.css";
import Image from "../Image/Image.component";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/action/cart.actions";
import { useNavigate } from "react-router-dom";

// item
const Item = ({ item = {}, type }) => {
  const { name, price, size } = item;
  const [position, setPosition] = useState(1);
  const navigate = useNavigate();
  //   rredux
  const { cartData } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const itemToSubmit = {
      name,
      price,
      type,
    };
    dispatch(addItemToCart(itemToSubmit));
    navigate("/cart");
  };
  return (
    <div className="item-wrapper">
      <div className="image">
        <Image name={name} type={type} position={position} />

        <div className="image-wrapper">
          <div className="image-unit" onClick={() => setPosition(1)}>
            <Image name={name} type={type} position={1} />
          </div>

          <div className="image-unit" onClick={() => setPosition(2)}>
            <Image name={name} type={type} position={2} />
          </div>

          <div className="image-unit" onClick={() => setPosition(3)}>
            <Image name={name} type={type} position={3} />
          </div>
        </div>
      </div>
      <div className="content">
        <h1> {name} </h1>
        <p> $ {price.toFixed(2)} </p>
        <div className="button-wrapper">
          <button onClick={() => handleAddItem()}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
