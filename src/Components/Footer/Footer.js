import React from 'react'

function Footer() {
  return (
    <footer className='py-3 bg-black text-white mt-3 position-relative bottom-0'>
    <div className='container'>
    <div className="row text-center text-md-start">
        <div className="col-lg-4 col-md-6 ">
            <h4 className='py-3'>Get to know us</h4>
            <ul className='list-unstyled'>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Store</li>
                <li>Investors</li>
            </ul>
        </div>
        <div className="col-lg-4 col-md-6 ">
            <h4 className='py-3'>Payment Products</h4>
            <ul className='list-unstyled'>
                <li>Business Card</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Currency Converter</li>
            </ul>
        </div>
        <div className="col-lg-4 col-md-6">
        <h4 className='py-3'>Make Money with Us</h4>
            <ul className='list-unstyled'>
                <li>Sell products</li>
                <li>Sell Business</li>
                <li>Self-Publish with Us</li>
                <li>See More Make Money with Us</li>
            </ul>
        </div>
    </div>

    </div>
    </footer>
  )
}

export default Footer