import Footer from "../../../Footer/Footer"
// import Happypartners from "../../../Happypartners"
import Header from "../../../Header/Header"
import Contactmap from "../../../Contact map/Contactmap"
import Contactform from "../../../Contact form/Contactform"
import Happypartners from "../../../Happypartner/Happypartners"

function Contact(){

    return(
        <>
        {/* <Header/> */}
        
        <div className="contactcont">
            <div className="contactbanner">
                <p>CONTACT US</p>
                <h1>LET'S GET IN TOUCH</h1>
            </div> 
        </div>
        
 
        <Contactmap/>
        <Contactform/>
        
         <Happypartners/>
        {/* <Footer/> */}
        </>
    )


}

export default Contact