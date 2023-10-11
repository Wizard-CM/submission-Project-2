import React, { useContext, useState } from "react";
import ProductItem from "./ProductItem";
import PRODUCTS from "../../ProductsData";
import "./Products.css";
import "./Responsive.css";
import { ShopContextWrapper } from "../../Context/ShopContext";
import { Link, useSearchParams } from "react-router-dom";

// Components
import Hero from "./ShopComponent/HeroSection/Hero";
import Offer from "./ShopComponent/OfferSection/Offer";
import Testimonial from "./ShopComponent/TestimonialSection/Testimonial";
import Footer from "../../Components/Footer/Footer";

function Products({ SearchButtonHandler }) {
  const [query, setQuery] = useSearchParams();
  const QueryData = query.get("q");
  // console.log(QueryData);
  const { cartItem, AddtoCart, RemovefromCart } =
    useContext(ShopContextWrapper);
  const [inputData, setInputdata] = useState();

  // Filtering Objects Based on Query data
  const QueryProducts = PRODUCTS.filter((proObj) =>
    proObj.title.toLocaleLowerCase().includes(QueryData)
  );

  return (
    <div class="home overflow-hidden" id="home">
      <Hero />
      <Offer />
      {/* Discount Message Section */}
      <div className="dis-message bg-black text-white py-5 mt-5">
        <div className="container">
          <div className="row justify-content-between align-items-center text-center text-sm-start">
            <div className="col-sm-7">
              <h3>GET 25% OFF ON YOUR FIRST PURCHASE</h3>
            </div>
            <div className="col-sm-4">
              <button className="message-btn btn btn-success">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container">
        <div className="row py-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="text-center display-6 fw-bold">Products For Sale</h2>
          </div>
          <div className="col-lg-6 pt-3 pt-lg-0">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-8">
                <input
                  type="text"
                  placeholder="...SearchProduct"
                  value={inputData}
                  onChange={(e) => {
                    setInputdata(e.target.value);
                  }}
                  className="form-control py-2 px-3"
                />
              </div>
              <div className="col-lg-3 col-md-3 col-4">
                <button
                  type="button"
                  className="btn btn-success py-2 px-3"
                  onClick={() => {
                    SearchButtonHandler(inputData)
                    setInputdata('')
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {QueryData ? (
          <div className="row">
            {QueryProducts.map((proObj) => {
              return (
                <div className="col-lg-4">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <Link>
                      <img
                        src={proObj.image}
                        alt=""
                        className="img-fluid  rounded-1"
                      />
                    </Link>
                    <p className="mb-0 my-2 text-center">{proObj.title}</p>
                    <p className="mb-0 my-2 ">
                      <b>${proObj.price}</b>
                    </p>
                      <h3 onClick={() => { AddtoCart(proObj.id);}} >
                        <i class="fa-solid fa-cart-plus py-3 text-danger"></i>
                        {cartItem[proObj.id] > 0 ? ( <>({cartItem[proObj.id]})</> ) : null}
                      </h3>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="row">
            {PRODUCTS.map((obj) => {
              return (
                <div className="col-lg-4 col-md-6 " key={obj.id}>
                  <ProductItem obj={obj} />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Testimonial />

      <Footer />
    </div>

  );
}

export default Products;
// (
//   <div>
//     {QueryProducts.map(proObj => {
//       return (
//          <div className="col-lg-4 col-md-6 "  key={obj.id}>
//         <div className="ProductItem m-3 d-flex justify-content-center align-items-center flex-column">
//         <Link to={`/product/${proObj.id}`}><img src={proObj.image} alt="" className="img-fluid rounded-1" /></Link>

//        </div>
//       )
//     })}
//   </div>
//   </div>
// )
