import Innersectionabout from "../innersectionabout/Innersectionabout";
import '../Aboutsection/Aboutsection.css'

 function Aboutsection(){
    return(
        <>
        <div className="aboutsection">
            <div className="inneraboutsection1">
               <Innersectionabout h2={"Product Management"} btn={"Read More"}/>
               <Innersectionabout  h2={"Customer Relations"} btn={"Details"}/>
               <Innersectionabout h2={"Global Collection"} btn={"Read More"}/>
            </div>
        </div>
        
        
        </>

    )



 }
 export default Aboutsection;