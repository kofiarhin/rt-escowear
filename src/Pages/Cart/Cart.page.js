import "./cart.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeSideNav } from "../../redux/action/general.actions";
import CartList from "../../Component/CartList/CartList.component";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(removeSideNav());
  }, []);

  return (
    <div className="cart">
      <div className="container">
        <h1 className="title"> Your Cart</h1>

        {cartData && cartData.length > 0 ? (
          <CartList />
        ) : (
          <h1 className="title"> Empty Cart </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
