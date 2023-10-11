import React, { useContext } from "react";
import PRODUCTS from "../../ProductsData";
import { ShopContextWrapper } from "../../Context/ShopContext";
import CartItem from "./CartItem";
import "./Cart.css";
import "../Shop/Responsive.css";
import {Link} from 'react-router-dom'

function Cart() {
  const { cartItem, TotalAmountHandler } = useContext(ShopContextWrapper);
  let totalAmount = TotalAmountHandler();
  let Subtotal = totalAmount.toFixed(2);
  let taxAmount = (((13 / 100) * totalAmount)).toFixed(2)
  let totalAmtAfterTax = (+(Subtotal) + +(taxAmount)).toFixed(2)


  let CartFilteredArr = PRODUCTS.filter((proObj) => cartItem[proObj.id] > 0);
  return (
    <div className="mt-5">
      {CartFilteredArr.length == 0 ? (null):(
              <h2 className="text-center pt-5 pb-3">Cart Items</h2>
      )}
      {CartFilteredArr.map((proObj) => {
        return (
          <>
            <CartItem key={proObj.id} proObj={proObj} />
          </>
        )
      })}

      {CartFilteredArr.length == 0 ? (
        <div className="text-center">
        <h2 className="text-danger text-center pt-5 pb-3">Your Cart Is Empty</h2>
      <Link to="/" className="text-center"><button className="btn btn-success btn-lg">Go to Shop</button></Link>
        </div>
      ):
      (      
    <div className="totaling  text-center text-md-end my-5">
      <h4 className="mb-0 ">SubTotal : {`$${Subtotal}`}</h4>
      <h4 className="mb-0 py-3">Tax :{`$${taxAmount}`}</h4>
      <h4 className="mb-0 mb-5">Total Amount : <span className="text-danger">{`$${totalAmtAfterTax}`}</span></h4>
    </div>)}

    </div>
  );
}

export default Cart;