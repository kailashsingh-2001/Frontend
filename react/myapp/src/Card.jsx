import im from './images/product_01.jpg'


function Card(props){

  // const [cardData, setCardData] = useState({
  //   title: 'Card Title',
  //   imageUrl: 'https://example.com/image.jpg',
  //   content: 'This is the card content.',
  // });

  // const handleClick = (newTitle, newImageUrl, newContent) => {
  //   setCardData({ title: newTitle, imageUrl: newImageUrl, content: newContent });
  // };
    return(
      
          <> 
         
            <div className="card">
                  <div className="cardimage">
                      <img src={im} alt="" />
                  </div>
                  <div className="innercard">  
                    <div className="cardtitle">
                      <div className='title'><p>{props.title}</p></div>
                      <div className='rate'><p>{props.rate}</p></div>

                    </div>
                    <div className="carddiscription"> 
                      <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                    </div>
                    <div className="cardreviews">
                      <div className='innerreview'>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                     
                      </div>
                      <div className='innerreview'><p id='review'>{props.reviews}</p></div>
                    </div>
                  </div>
            </div>
                
          </> 
              
            

    )
}
 export default Card;