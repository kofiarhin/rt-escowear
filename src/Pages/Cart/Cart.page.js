import "./cart.styles.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeSideNav } from "../../redux/action/general.actions";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeSideNav());
  }, []);

  return (
    <div className="cart">
      <h1 className="title">Cart</h1>
    </div>
  );
};

export default Cart;
