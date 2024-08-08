import Card from "../src/Card/Card.jsx";


function Section(){
   
    return(
       <>
        <div className="section">
            <div className="innersection">
                <div className="innersec">
                <h1>Latest Products</h1>
                <p><a href="">VIEW ALL PRODUCT </a></p>
                </div>
            </div>
        </div>
        <div className="innersection1">
            <div className="intersection">
               <Card/>
               

               
            </div> 
        </div>
  
        </>
    )

}
export default   Section;