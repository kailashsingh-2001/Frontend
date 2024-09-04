import { Link ,NavLink} from "react-router-dom";
import React, { useState } from "react";
import '../Header/Header.css'
import '../Header/Media.css'



function Header(){
    
  const [status,setStatus]=React.useState(false)
    return(
        
        <>
        <div className="navbar">
                <div className="logo">
                    <h2>SIXTEEN <span id="clothing">CLOTHING</span></h2>
                </div>
                <div className="innernav">
                    <ul>
                    <li id="li1"><NavLink to="/home"className="link" > home </NavLink> </li>
                    <li id="li2"> <NavLink to="/product" className="link" >our products </NavLink></li>
                    <li id="li3"> <NavLink to="/about" className="link" > About us</NavLink></li>
                    <li id="li4">  <NavLink to="/contact"className="link" >contact us</NavLink></li>
                    </ul>

                    <div className="innernav2">
                   
                     <button id='btn' onClick={()=>setStatus(!status)}>
                        <i className="fa-solid fa-bars"></i>
                     </button> 
                    
                    </div>
                </div>
               
        </div>
                   {
                     status ?
                        
                     <div className="menubar">
                   
                    
                     <div className="inner-menubar">
                     <ul>
                     <li className="menulist"><NavLink to="/home"className="menubarlink" > home </NavLink> </li>
                     <hr />
                     <li className="menulist"><NavLink to="/product" className="menubarlink" >our products </NavLink></li>
                     <hr/>
                     <li className="menulist"><NavLink to="/about" className="menubarlink" > About us</NavLink></li>
                     <hr/>
                     <li className="menulist"><NavLink to="/contact"className="menubarlink" >contact us</NavLink></li>
                       
                     </ul>
                   </div>
                   
                 
                
                   </div>
                   :null

                   }
                 
            
           
        
        
            
        </>    
    )
}
export default Header;