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

  const calcTotal = (data) => {
    let total = 0;

    data.forEach((item) => {
      total += parseInt(item.price);
    });

    return total;
  };

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
                  <h1 className="name"> {name} </h1>
                </Link>
                <p className="price"> ${price.toFixed(2)} </p>
              </div>
              <i
                className="fa fa-close"
                onClick={() => dispatch(removeCartItem(item))}
              ></i>
            </div>
          );
        })}
      </div>

      <div className="text-wrapper">
        <p className="total">Total: ${calcTotal(cartData).toFixed(2)} </p>
      </div>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default CartList;
