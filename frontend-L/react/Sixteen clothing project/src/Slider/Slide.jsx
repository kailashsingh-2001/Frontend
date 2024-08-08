
import React, { useState } from 'react';
import '../Slider/Slide.css'
import '../Media.css'
function Slide() {
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleSlideChange = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    return (
        <div className="slider">
            <div className={`banner1 ${currentSlide === 1 ? 'active' : ''}`}>
                <div className="innerslider1">
                    <p id="bestoffer">BEST OFFER</p>
                    <h1 id="newarrival">NEW ARRIVAL ON SALE</h1>
                </div>
            </div>

            <div className={`banner2 ${currentSlide === 2 ? 'active' : ''}`}>
                <div className="innerslider2">
                    <p id="bestoffer">FLASH DEALS</p>
                    <h1 id="newarrival">GET YOUR BEST PRODUCTS</h1>
                </div>
            </div>

            <div className={`banner3 ${currentSlide === 3 ? 'active' : ''}`}>
                <div className="innerslider3">
                    <p id="bestoffer">LAST MINUTE</p>
                    <h1 id="newarrival">GRAB LAST MINUTE DEALS</h1>
                </div>
            </div>

            <div className="sliderbtn">
                <button id="btn1" onClick={() => handleSlideChange(1)}></button>
                <button id="btn2" onClick={() => handleSlideChange(2)}></button>
                <button id="btn3" onClick={() => handleSlideChange(3)}></button>
            </div>
        </div>
    );
}

export default Slide;


