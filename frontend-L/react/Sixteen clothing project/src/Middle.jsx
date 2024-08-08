// import Header from './Header'
import Button from './Button'
import cd from './images/feature-image.jpg'  
  
function Middle(){
    return(


        <>
        {/* <Header/> */}
        <div className="middle">
            <div className="innermiddle1">
             <div className='middleheading'>
                <h1>About Sixteen Clothing</h1>
             </div>
               

            </div>
            <div className="innermiddle2">
                <div className='middle2content'>
                    <div>
                        <h2>Looking for the best products?</h2>
                    </div>
                    <div>
                        <p>This template is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. Contact us for more info</p>
                    </div>
                    <div>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur an adipisicing elit</li>
                            <li>It aquecorporis nulla aspernatur</li>
                            <li>Corporis,omnis doloremque</li>
                            <li>Non cum id reprehenderit</li>
                            
                        </ul>
                    </div>
                    <div className='middlebutton'><Button ns="Read More" /></div>

                </div>
                <div className="middleimage">
                    <img src={cd} alt="" />
                </div>
             


            </div>






















        </div>
        
        </>
    )
}
export default Middle ;