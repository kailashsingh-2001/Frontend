import React from 'react';
import '../Card/Card.css';
import '../Card/Card-media.css';
import Cardproduct from '../Card/Cardproduct';

function Lastminutecard() {
  return (
    <>
      {Cardproduct.slice(0, 3).map((item, index) => (
        <div className="card" key={index}>
          <div className="cardimage">
            <img src={item.image} alt="" />
          </div>
          <div className="innercard">  
            <div className="cardtitle">
              <div className='title'><p>{item.title}</p></div>
              <div className='rate'><p>{item.rate}</p></div>
            </div>
            <div className="carddiscription"> 
              <p>{item.content}</p>
            </div>
            <div className="cardreviews">
              <div className='innerreview'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className='innerreview'><p id='review'>{item.reviews}</p></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Lastminutecard;
