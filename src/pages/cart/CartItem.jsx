import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./cart.css";
const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItem, addToCart, removeFromCart } = useContext(ShopContext);
  const cartItemAmount = cartItem[id];
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input type="number" value={cartItemAmount} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
