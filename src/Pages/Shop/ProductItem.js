import React from "react";
import "./Products.css";
import { ShopContextWrapper } from "../../Context/ShopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function ProductItem({ obj }) {
  const { cartItem, AddtoCart, RemovefromCart } =
    useContext(ShopContextWrapper);
  const { id, price, title, description, image } = obj;

  return (
    <div className="ProductItem m-3 d-flex justify-content-center align-items-center flex-column">
     <Link to={`/product/${id}`}><img src={image} alt="" className="img-fluid rounded-1" /></Link>
        <p className="mb-0 my-2 text-center">{title}</p>
      <p className="mb-0 my-2 ">
        <b>${price}</b>
      </p>

      <h3
        onClick={() => {
          AddtoCart(id);
        }}
      >
        <i class="fa-solid fa-cart-plus py-3 text-danger"></i>
        {cartItem[id] > 0 ? <>({cartItem[id]})</> : null}
      </h3>
    </div>
  );
}

export default ProductItem;
