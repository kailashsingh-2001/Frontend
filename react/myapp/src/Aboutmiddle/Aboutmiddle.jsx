
import  '../Aboutmiddle/Aboutmiddle.css'
import jj from '../images/feature-image.jpg'  

  
  function Aboutmiddle(){

    return(
        <>
        <div className="middlecontainer">
            <div className='upperaboutmiddle'>  
               <div className="inneraboutmiddle1">
                  <h2>OUR BACKGROUND</h2>
                  <hr/>
                </div>
                <div className="inneraboutmiddle2">
                    <div className="aboutmiddleimage">
                        <img src={jj} alt="" />
                    </div>
                    <div className="aboutmiddlecontent">
                        <h2>Who we are & What we do?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
                        <hr/>
                        <div className='aboutmiddlecontentbtn'>
                            <button><i className="fa-brands fa-facebook"></i></button>
                            <button><i className="fa-brands fa-linkedin"></i></button>
                            <button><i className="fa-brands fa-twitter"></i></button>
                            <button><i className="fa-brands fa-behance"></i></button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        
        
        </>
    )

}
export default Aboutmiddle