import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItem } = useContext(ShopContext);
  const cartItemAmount = cartItem[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>$ {price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
