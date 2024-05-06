import Card from "./Card" 
 
 
 function Productsection(){
       return(


        <>
         <div className="productsection">
            <div className="productinnersection">
                
                <ul className="productsec"> 
                    <li>ALL PRODUCTS</li>
                    <li>FEATURED</li>
                    <li>FLASH DEALS</li>
                    <li>LAST MINUTE</li>
                </ul>
                
            </div>
        </div>
        <div className="innersection1">
            <div className="intersection">
                <Card title={"Title goes here"} rate={"$25.75"} reviews={"Reviews(24)"}/>
                <Card title={"Title goes here"} rate={"$30.25"}reviews={"Reviews(21)"}/>
                <Card title={"Title goes here"} rate={"$20.45"} reviews={"Reviews(36)"}/>
                <Card title={"Title goes here"} rate={"$15.25"} reviews={"Reviews(48)"} />
                <Card title={"Title goes here"}  rate={"$12.50"} reviews={"Reviews(16)"}/>
                <Card title={"Title goes here"} rate={"$22.50"} reviews={"Reviews(32)"}/>
            </div>
        </div>
        
        </>
       )



}
export default Productsection