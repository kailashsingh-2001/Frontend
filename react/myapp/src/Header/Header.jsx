import { Link ,NavLink} from "react-router-dom";

import '../Header/Header.css'
import '../Header/Media.css'
// import { useState } from "react";


function Header(){
    

    // document.getElementById('btn').addEventListener('click',function(){
    //     let a=document.getElementsByClassName('inner-menubar').innerHTML;
    //     a.style.display='flex';


    // })



    return(
        <>
        <div className="navbar">
                <div className="logo">
                    <h2>SIXTEEN <span id="clothing">CLOTHING</span></h2>
                </div>
                <div className="innernav">
                    <ul>
                    <li id="li1"><NavLink to="/"className="link" > home </NavLink> </li>
                    <li id="li2"> <NavLink to="/product" className="link" >our products </NavLink></li>
                    <li id="li3"> <NavLink to="/about" className="link" > About us</NavLink></li>
                    <li id="li4">  <NavLink to="/contact"className="link" >contact us</NavLink></li>
                    </ul>

                    <div className="innernav2">
                     <button id='btn' >
                        <i className="fa-solid fa-bars"></i>
                     </button> 
                    </div>
                </div>
               
            </div>
            <div className="menubar">
                <div className="inner-menubar">
                    <ul>
                    <li><NavLink to="/"className="menubarlink" > home </NavLink> </li>
                    <li><NavLink to="/product" className="menubarlink" >our products </NavLink></li>
                    <li><NavLink to="/about" className="menubarlink" > About us</NavLink></li>
                    <li><NavLink to="/contact"className="menubarlink" >contact us</NavLink></li>
                      
                    </ul>
                </div>
            </div>
        </>    
    )
}
export default Header;