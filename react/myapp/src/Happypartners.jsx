                                                 
 import kk from './images/client1.png'
 
 function Happypartners(){
   
    return(
        <>
        <div className="client-container">
            {/* <div className=""></div> */}
            <div className="client-innercont1">
                <div className="client-image-cont">
                   <img src={kk} alt="Client Logo" />
                </div>
                <div className="client-image-cont">
                    <img src={kk} alt="" />
                </div>
                <div className="client-image-cont">
                    <img src={kk} alt="" />
                </div>
                <div className="client-image-cont" id='client-img-none1'>
                    <img src={kk} alt="" />
                </div>
                <div className="client-image-cont" id='client-img-none2'>
                    <img src={kk} alt="" />
                </div>
            </div>

        </div>
        
        
        </>

    )
}
export default Happypartners;