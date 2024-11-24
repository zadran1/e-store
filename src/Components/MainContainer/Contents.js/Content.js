import React from "react";
import "./Content.css";


export default function Content() {

  const products = [
    require("./img/shop-1.jpg"),
     require("./img/shop-2.jpg"),
     require("./img/shop-3.jpg"),
     require("./img/shop-4.jpg"),
     require("./img/shop-5.jpg"),
     require("./img/shop-6.jpg"),
     require("./img/shop-7.jpg"),
     require("./img/shop-8.jpg"),
]
  return (
      <div className="content-container">
      {products.map((item, index) => (



          <div className="product-container">
              <div className="product__item__pic">
                              <img className="product__item__pic" src={item} />
                              <ul className="product__hover">
                                  <li>
                                      <a href={item}>
                                          <span className="fa fa-arrows-alt" />
                                      </a>
                                  </li>
                              </ul>
              </div>
                <div className="product-text">
                  <h6>Beutiful Coat</h6>
                  
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </div>
                    <div className="product-price">55$</div>
                </div>
          </div>    
      ))}
      </div>
     
  );
}

