import React from "react";
import Logo from "../../Assets/R.jpg"
import './Header.css'

const Header = () => (
    <div className="nav-wrapper">
    
      <div className="nav-logo">
      <img src={Logo} alt="logo" className="logo"></img>
      </div>

      <div className="nav-links">
      <div className="nav-links-items">
        <a href="#">Home</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Best Seller</a>
      </div>
      </div>

           <div className="nav-search">
            <div className="search-container">
              <input type="text" className="search" placeholder="search here any item..." />
              <button className="search-btn">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>

      <div className="nav-widget">
           <ul className="widget-items">
             <li className="search-li"><i className="fa fa-heart"></i></li>
             <li className="search-li"><i className="fa fa-shopping-cart"></i></li>
           </ul>
      </div>
    </div>
);

export default Header;