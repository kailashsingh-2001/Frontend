
import '../Slider/Slide.css'
import '../Media.css'
function Slide(){


    // let sliders = document.getElementsByClassName('slider');
    // let a=document.getElementsByClassName('banner1');
    // let b=document.getElementsByClassName('banner2');
    // let c=document.getElementsByClassName('banner3');
    
    
    // document.querySelector("#btn1").addEventListener('click', function(){
       
        
    //     for (var i = 0; i < sliders.length; i++) {
    //         sliders[i].a.value.style.display=block;
    //     }
    // });
    
    // document.querySelector("#btn2").addEventListener('click', function(){
       
    //     for (var i = 0; i < sliders.length; i++) {
    //         sliders[i].b.value.style.display=block;
    //     }
    // });
     
    // document.querySelector("#btn3").addEventListener('click', function(){
       
    //     for (var i = 0; i < sliders.length; i++) {
    //         sliders[i].c.value.style.display=block;
    //     }
    // });






    return(
       
        <div className="slider">
        <div className="banner1">
            <div className="innerslider1">
                    <p id="bestoffer">BEST OFFER</p>
                    <h1 id="newarrival">NEW ARRIVAL ON SALE</h1>
            </div> 
            <div className="sliderbtn">
                <button id="btn1"></button>
                <button id="btn2"></button>
                <button id="btn3"></button>
            </div>
            
        </div>
        <div className="banner2">
            <div className="innerslider2">
                <p id="bestoffer">FLASH DEALS </p>
                <h1 id="newarrival">GET YOUR BEST PRODUCTS</h1>
            </div> 
            <div className="sliderbtn">
                {/* <button id="btn1" ></button>
                <button id="btn2" ></button>
                <button id="btn3" ></button> */}
            </div>
        
        </div>
        <div className="banner3">
            <div className="innerslider3">
             <p id="bestoffer">LAST MINUTE</p>
             <h1 id="newarrival">GRAB LAST MINUTES DEALS</h1>
            </div> 
            <div className="sliderbtn">
                {/* <button id="btn1" onclick="prevSlide()"></button>
                <button id="btn2" onclick="nextSlide()"></button>
                <button id="btn3" onclick="next()"></button> */}
            </div>
            
        </div>


        
       
    </div>
    
 
     
    )
}
export default Slide;

