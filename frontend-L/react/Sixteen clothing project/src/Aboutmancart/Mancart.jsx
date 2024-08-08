import '../Aboutmancart/Mancart.css'
import '../Aboutmancart/Mancart-media.css'
import Mancartjs from '../Aboutmancart/Mancartjs'


function Mancart(){
    return(
        <>
        { 
          Mancartjs.map((item)=>
            <div className="mancart">
            <div className="innermancart">
                <img src={item.image} alt="" />
                <div className="overlay">
                   <div class="text">
                    <button><i className="fa-brands fa-facebook"></i></button>
                    <button><i className="fa-brands fa-linkedin"></i></button>
                    <button><i className="fa-brands fa-twitter"></i></button>
                    <button><i className="fa-brands fa-behance"></i></button>
                   </div>
                </div>

            </div>
            <div className='innerman-content'>
               <div className='innermanname'> <h2>{item.name}</h2></div>
               <div className='innermanoccupation'> <h4>{item.occupation}</h4></div>
               <div className='innermancontent'> <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p></div>

            </div>

        </div>
        )
        

        }
        
        
        </>
    )
}
export default Mancart