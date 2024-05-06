import Footer from "../../../Footer";
import Aboutmiddle from "../../../Aboutmiddle";
import Header from "../../../Header";
import Aboutsection from "../../../Aboutsection";
import Happypartners from "../../../Happypartners";


function About(){
    return(
        <>
        <Header/>
        <div className="aboutcont">
        <div className="aboutbanner">
                    <p>ABOUT US</p>
                    <h1>OUR COMPANY</h1>
            </div> 
        </div>
        <Aboutmiddle/>
        <Aboutsection/>
        <Happypartners/>
         
       <Footer/>
        </>
    )
}
export default About;