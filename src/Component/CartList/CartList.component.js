import { useSelector } from "react-redux";
import Image from "../Image/Image.component";
import "./cartList.styles.css";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/action/cart.actions";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../redux/action/cart.actions";

const CartList = () => {
  const { cartData } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  return (
    <div className="main-cart-wrapper">
      <div className="cart-wrapper">
        {cartData.map((item, index) => {
          const { name, type, price } = item;
          return (
            <div className="cart-unit" key={index}>
              <Image name={item.name} type={type} />

              <div className="text-wrapper">
                <Link to={`/details/${type}/${name}`}>
                  <h1> {name} </h1>
                </Link>
                <h2> {price.toFixed(2)} </h2>
              </div>
              <i
                className="fa fa-close"
                onClick={() => dispatch(removeCartItem(item))}
              ></i>
            </div>
          );
        })}
      </div>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default CartList;
