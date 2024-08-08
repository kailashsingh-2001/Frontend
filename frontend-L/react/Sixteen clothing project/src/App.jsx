import { Routes , BrowserRouter , Link, Route  } from "react-router-dom";
import Home from "./assets/Components/Home/Home";
import About from "./assets/Components/Aboutus/Aboutus";
import Product from "./assets/Components/Ourproducts/Ourproducts";
import Contact from "./assets/Components/Contact us/Contact";
import Lastminutes from "./Last minutes/Lastminutecard";
import Lastminutecard from "./Last minutes/Lastminutecard";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


function App(){
    return(
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                   <Route path="/" element={ <Home/>}/>
                   <Route path="/product" element={<Product/>}/>
                   <Route  path="/about" element={<About/>}/>
                   <Route path="/contact" element={<Contact/>}/>
                   <Route path="/allproducts" element={<Lastminutes/>}/>
                   <Route path="/featured" element={<Lastminutes/>}/>
                   <Route path="/flashdeals" element={<Lastminutes/>}/>
                   <Route path="/lastminute" element={<Lastminutecard/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
} 
 export default App;