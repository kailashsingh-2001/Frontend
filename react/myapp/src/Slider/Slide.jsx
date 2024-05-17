import React from 'react';
import '../Slider/Slide.css'
import '../Media.css'
function Slide(){
    // const [status,setStatus]=React.useState(false);

    return(
       
        <div className="slider">
            <div className="banner1">
                <div className="innerslider1">
                    <p id="bestoffer">BEST OFFER</p>
                    <h1 id="newarrival">NEW ARRIVAL ON SALE</h1>
                </div> 
            </div>
         
            <div className="banner2">
                <div className="innerslider2">
                    <p id="bestoffer">FLASH DEALS </p>
                    <h1 id="newarrival">GET YOUR BEST PRODUCTS</h1>
                </div> 
            </div>
        
            <div className="banner3">
                <div className="innerslider3">
                    <p id="bestoffer">LAST MINUTE</p>
                    <h1 id="newarrival">GRAB LAST MINUTES DEALS</h1>
                </div> 
            </div>
            <div className="sliderbtn">
                <button id="btn1" onClick={()=>setStatus(!status)} ></button>
                <button id="btn2"  ></button>
                <button id="btn3"></button>
            </div>
        </div>
    
 
     
    )
}
export default Slide;

