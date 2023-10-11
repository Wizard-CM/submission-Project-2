import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PRODUCTS from "../../ProductsData";
import {ShopContextWrapper } from '../../Context/ShopContext';
import './Responsive.css'

function SingleProduct() {
  const paramId = useParams();

  const { cartItem, AddtoCart, RemovefromCart } = useContext(ShopContextWrapper);
  let filteredObj = PRODUCTS.find((proObj) => proObj.id == paramId.ProductId);
  let {image,title,id,price,description} = filteredObj

  return(
    <div className="singleProduct text-center text-md-start">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 left">
          <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>{title}</h3>
            <h5 className="py-3"><b>Price : <span className="text-warning">{`$${price}`}</span></b></h5>
          <span onClick={()=>{AddtoCart(id)}}><i class="fa-solid fa-cart-plus  cart"></i></span>
          <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default SingleProduct;
