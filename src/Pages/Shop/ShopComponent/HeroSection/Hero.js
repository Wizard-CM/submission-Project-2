import React from "react";
import '../../../Shop/Responsive.css'
import './Hero.css'

function Hero() {
  return (
    <div className="home" id="home">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className="home-banner home-banner-1">
              <div className="glass">
                <div className="home-banner-text">
                  <h3 className="heading-3">E-Shop</h3>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Error molestias necessitatibus possimus similique. Hic
                    laborum iste ab corporis maiores, debitis culpa facilis
                    itaque quia quos praesentium accusamus in earum quis!
                  </p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="home-banner home-banner-2">
              <div className="glass">
                <div className="home-banner-text">
                  <h3 className="heading-3 ">E-Shop</h3>
                  <p className="py-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Error molestias necessitatibus possimus similique. Hic
                    laborum iste ab corporis maiores, debitis culpa facilis
                    itaque quia quos praesentium accusamus in earum quis!
                  </p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <span className="customized-slider-icon">
              <i className="fa-solid fa-arrow-left"></i>
            </span>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <span className="customized-slider-icon">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
