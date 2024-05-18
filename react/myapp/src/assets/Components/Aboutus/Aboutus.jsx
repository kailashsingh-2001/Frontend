import Footer from "../../../Footer/Footer";
import Aboutmiddle from "../../../Aboutmiddle/Aboutmiddle";
import Header from "../../../Header/Header";
import Aboutsection from "../../../Aboutsection/Aboutsection";
// import Happypartners from '../../../Happypartner/Happypartners';
import Member from "../../../About members/Member";
import Happypartners from "../../../Happypartner/Happypartners.jsx";


function About(){
    return(
        <>
        {/* <Header/> */}
        <div className="aboutcont">
        <div className="aboutbanner">
                    <p>ABOUT US</p>
                    <h1>OUR COMPANY</h1>
            </div> 
        </div>
       
        <Aboutmiddle/>
        <Member/>
        <Aboutsection/>
        <Happypartners/>
         
       {/* <Footer/> */}
        </>
    )
}
export default About;