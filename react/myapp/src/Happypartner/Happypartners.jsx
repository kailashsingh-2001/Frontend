                                                 
 
 import '../Happypartner/Happypartners.css'
 import Happypartner from '../Happypartner/Happypartner.js';
 
 function Happypartners(){
   
    return(
        <>
        <div className="client-container">
           
            <div className="client-innercont1">
              {
                Happypartner.map((item)=>
                <div className="client-image-cont">
                   <img src={item.image} alt="Client Logo" />
                </div>
                )
              }
                
                
            </div>

        </div>
        
        
        </>

    )
}
export default Happypartners;