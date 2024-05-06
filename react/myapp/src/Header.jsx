import { Link } from "react-router-dom";




function Header(){
    

    // document.getElementById('btn').addEventListener(click,function(){
    //     let a=document.getElementsByClassName('inner-menubar').innerHTML;
    //     a.style.display='block';


    // })



    return(
        <>
        <div className="navbar">
                <div className="logo">
                    <h2>SIXTEEN <span id="clothing">CLOTHING</span></h2>
                </div>
                <div className="innernav">
                    <ul>
                       <Link to="/" className="link"><li id="li1"> home </li></Link> 
                        <Link to="/product" className="link"><li id="li2">our products </li></Link>
                        <Link to="/about" className="link"><li id="li3"> About us</li></Link>
                        <Link to="/contact" className="link"><li id="li4">contact us </li></Link> 
                    </ul>

                    <div className="innernav2">
                     <button id='btn'>
                        <i className="fa-solid fa-bars"></i>
                     </button> 
                    </div>
                </div>
               
            </div>
            <div className="menubar">
                <div className="inner-menubar">
                    <ul>
                       <Link to="/" className="link"><li> home </li></Link> 
                       <Link to="/product" className="link"><li>our products </li></Link>
                       <Link to="/about" className="link"><li> About us</li></Link>
                       <Link to="/contact" className="link"><li>contact us </li></Link> 
                    </ul>
                </div>
            </div>
        </>    
    )
}
export default Header;