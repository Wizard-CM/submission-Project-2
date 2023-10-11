import React from 'react'
import './Testimonial.css'
import '../../../Shop/Responsive.css'

// Images
import user1 from "../../../../Assets/user.png"
import user2 from "../../../../Assets/user2.png"

function Testimonial() {
  return (
    <div>
      <section className="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-sm-12"><h3 className="text-center testi-heading pb-3 mb-5">Testimonials</h3></div>
          <div className="col-lg-8 col-sm-12 offset-lg-2 text-center">
            <div id="carouselExampleIndicatorsTwo" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsTwo"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicatorsTwo"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="testimonial-wrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <img
                          src={user1}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="username">
                        <h3>User1</h3>
                        <p className="">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sunt rem aperiam fuga aut, eaque veniam labore
                          enim magnam voluptates nulla nam, vel inventore omnis!
                          Cumque laboriosam eum pariatur quia assumenda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-wrapper">
                    <div className="row">
                      <div className="col-sm-12">
                        <img
                          src={user2}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="username">
                        <h3>User2</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Sunt rem aperiam fuga aut, eaque veniam labore
                          enim magnam voluptates nulla nam, vel inventore omnis!
                          Cumque laboriosam eum pariatur quia assumenda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicatorsTwo"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true">
                  <span className="customized-slider-icon">  <i className="fa-solid fa-arrow-left"></i></span>
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicatorsTwo"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true">
                  <span className="customized-slider-icon">  <i className="fa-solid fa-arrow-right"></i></span>
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Testimonial