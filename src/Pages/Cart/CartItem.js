import React, { useContext } from "react";
import { ShopContextWrapper } from "../../Context/ShopContext";
import "./Cart.css";
import '../Shop/Responsive.css'

function CartItem({ proObj }) {
  const { cartItem, AddtoCart, RemovefromCart } =
    useContext(ShopContextWrapper);
  const { id, price, title, description, image } = proObj;

  return (
    <div className="container">
      <div className=" cartItem-con d-flex align-items-center justify-content-between flex-column flex-md-row gap-4 gap-md-0">
        <div className="left d-flex align-items-center gap-3">
        <img src={image} alt="" className="img-fluid" />
        <h6>{title}</h6>
        </div>
        <div className="mid d-flex align-items-center">
          <button
            className="addSubt add"
            onClick={() => {
              RemovefromCart(id);
            }}
          >
            -
          </button>
          <button className="addSubt">{cartItem[id]}</button>
          <button
            className="addSubt subt"
            onClick={() => {
              AddtoCart(id);
            }}
          >
            +
          </button>
        </div>
        <div className="right"><p className="IndiPrice">${price}</p></div>
      </div>
    </div>
  );
}

export default CartItem;
