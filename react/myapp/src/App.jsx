import { Routes , BrowserRouter , Link, Route  } from "react-router-dom";
import Home from "./assets/Components/Home/Home";
import About from "./assets/Components/Aboutus/Aboutus";
import Product from "./assets/Components/Ourproducts/Ourproducts";
import Contact from "./assets/Components/Contact us/Contact";


function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                   <Route path="/" element={ <Home/>}/>
                   <Route path="/product" element={<Product/>}/>
                   <Route  path="/about" element={<About/>}/>
                   <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
} 
 export default App;