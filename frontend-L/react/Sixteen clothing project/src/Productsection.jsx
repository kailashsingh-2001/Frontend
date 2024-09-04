import { useEffect, useState } from "react";
import Card from "../src/Card/Card.jsx";
import { NavLink } from "react-router-dom";
import Cardproduct from "./Card/Cardproduct.js";

function Productsection() {
  const [Product, setProduct] = useState([]);
  

  useEffect(() => {
    setProduct(Cardproduct);
  }, []);

  function All() {
    setProduct(Cardproduct);
  }

  function kk(filter) {
    setProduct(Cardproduct.filter((item) => item.category === filter));
  }

  return (
    <>
      <div className="productsection">
        <div className="productinnersection">
          <a onClick={() => All()}> ALL PRODUCTS</a>
          <a onClick={() => kk("featured")}>FEATURED</a>
          <a onClick={() => kk("flash deals")}>FLASH DEALS</a>
          <a onClick={() => kk("lastminute")}>LAST MINUTE</a>
        </div>
      </div>
      <div className="innersection1">
        <div className="intersection">
          {Product.map((item) => (
            <div className="card">
              <div className="cardimage">
                <img src={item.image} alt="" />
              </div>
              <div className="innercard">
                <div className="cardtitle">
                  <div className="title">
                    <p>{item.title}</p>
                  </div>
                  <div className="rate">
                    <p>{item.rate}</p>
                  </div>
                </div>
                <div className="carddiscription">
                  <p>{item.content}</p>
                </div>
                <div className="cardreviews">
                  <div className="innerreview">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="innerreview">
                    <p id="review">{item.reviews}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Productsection;
