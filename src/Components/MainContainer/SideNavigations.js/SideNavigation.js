import React, { useState } from "react";
import "./Sidebar.css";

export default function SideNavigation() {
  const [activeButton, setActiveButton] = useState(null); 

  const handleClick = (buttonIndex) => {
    setActiveButton(activeButton === buttonIndex ? null : buttonIndex); 
  };
  return (
    <div className="side-nav-bar">
    <div className="side-nav">
      <h4>Categories</h4>

       {/* Women button */}
       <div className="side-nav">
        <button onClick={() => handleClick(0)} className={`women-btn ${activeButton === 0 ? "active" : ""}`}>
          Women
          <i className="fa fa-caret-down"></i>
        </button>
        {activeButton === 0 && (
          <div className="dropdown-options">
            <a href="#" className="nav-link">Coats</a>
            <a href="#" className="nav-link">Jackets</a>
            <a href="#" className="nav-link">Dresses</a>
            <a href="#" className="nav-link">Shirts</a>
            <a href="#" className="nav-link">T-Shirts</a>
            <a href="#" className="nav-link">Jeans</a>
          </div>
        )}
      </div>

      <hr />

      {/* Men button */}
      <div className="side-nav">
        <button onClick={() => handleClick(1)} className={`women-btn ${activeButton === 1 ? "active" : ""}`}>
          Men
          <i className="fa fa-caret-down"></i>
        </button>
        {activeButton === 1 && (
          <div className="dropdown-options">
            <a href="#" className="nav-link">Coats</a>
            <a href="#" className="nav-link">Jackets</a>
            <a href="#" className="nav-link">Dresses</a>
            <a href="#" className="nav-link">Shirts</a>
            <a href="#" className="nav-link">T-Shirts</a>
            <a href="#" className="nav-link">Jeans</a>
          </div>
        )}
      </div>

      <hr />

      {/* Kids button */}
      <div className="side-nav">
        <button onClick={() => handleClick(2)} className={`women-btn ${activeButton === 2 ? "active" : ""}`}>
          Kids
          <i className="fa fa-caret-down"></i>
        </button>
        {activeButton === 2 && (
          <div className="dropdown-options">
            <a href="#" className="nav-link">Coats</a>
            <a href="#" className="nav-link">Jackets</a>
            <a href="#" className="nav-link">Dresses</a>
            <a href="#" className="nav-link">Shirts</a>
            <a href="#" className="nav-link">T-Shirts</a>
            <a href="#" className="nav-link">Jeans</a>
          </div>
        )}
      </div>

      <hr />

      {/* Accessories button */}
      <div className="side-nav">
        <button onClick={() => handleClick(3)} className={`women-btn ${activeButton === 3 ? "active" : ""}`}>
          Accessories
          <i className="fa fa-caret-down"></i>
        </button>
        {activeButton === 3 && (
          <div className="dropdown-options">
            <a href="#" className="nav-link">Coats</a>
            <a href="#" className="nav-link">Jackets</a>
            <a href="#" className="nav-link">Dresses</a>
            <a href="#" className="nav-link">Shirts</a>
            <a href="#" className="nav-link">T-Shirts</a>
            <a href="#" className="nav-link">Jeans</a>
          </div>
        )}
      </div>

      <hr />

      {/* Cosmetic button */}
      <div className="side-nav">
        <button onClick={() => handleClick(4)} className={`women-btn ${activeButton === 4 ? "active" : ""}`}>
          Cosmetic
          <i className="fa fa-caret-down"></i>
        </button>
        {activeButton === 4 && (
          <div className="dropdown-options">
            <a href="#" className="nav-link">Coats</a>
            <a href="#" className="nav-link">Jackets</a>
            <a href="#" className="nav-link">Dresses</a>
            <a href="#" className="nav-link">Shirts</a>
            <a href="#" className="nav-link">T-Shirts</a>
            <a href="#" className="nav-link">Jeans</a>
          </div>
        )}
      </div>

      <h3>Shop By Price</h3>
    </div>
    </div>
    
  );
}
