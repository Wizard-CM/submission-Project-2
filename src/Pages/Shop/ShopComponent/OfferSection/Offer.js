import React from "react";
import './Offer.css'
import '../../../Shop/Responsive.css'

// Images
import offer1 from "../../../../Assets/offer1.jpg"
import offer2 from "../../../../Assets/offer2.jpg"
import offer3 from "../../../../Assets/offer3.jpg"
import offer4 from "../../../../Assets/offer4.jpg"


function Offer() {
  return (
<section className="offer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="display-5 text-center py-5 fw-bold">
                Discount Offers
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-3 mb-md-0">
              <div className="box">
                <div className="img-con">
                  <img src={offer1} alt="" className="img-fluid" />
                  <div className="overlay"></div>
                </div>
                <div className="offer-text">
                  <h3>Shop Now</h3>
                  <p>
                    <b>At 50% discount</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  mb-3 mb-md-0 d-flex flex-column justify-content-between">
              <div className="box mb-1">
                <div className="img-con">
                  <img src={offer2} alt="" className="img-fluid" />
                  <div className="overlay"></div>
                </div>
                <div className="offer-text">
                  <h3>Shop Now</h3>
                  <p>
                    <b>At 60% discount</b>
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="img-con">
                  <img src={offer3} alt="" className="img-fluid" />
                  <div className="overlay"></div>
                </div>
                <div className="offer-text">
                  <h3>Shop Now</h3>
                  <p>
                    <b>At 30% discount</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 mt-md-4 mt-lg-0 m-0 ">
              <div className="box">
                <div className="img-con">
                  <img src={offer4} alt="" />
                  <div className="overlay"></div>
                </div>
                <div className="offer-text">
                  <h3>Shop Now</h3>
                  <p>
                    <b>At 10% discount</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Offer;
