import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { Products } from "../../products";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItem, getTotalAmount } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1> your cart items</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          } else {
            return "";
          }
        })}
      </div>
      {getTotalAmount() >= 0 ? (
        <div className="checkout">
          <p>Subtotal: ${getTotalAmount()}</p>
          <button onClick={() => navigate("/")}>Continue Shoping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1> Your cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
