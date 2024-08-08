  import '../Contact map/Contactmap.css'
  import '../Contact map/Contactmedia.css'
  function Contactmap(){
    return(
        <>
        <div className='location'>
            <div className='content'>
            <h1>Our location on maps</h1>
            <hr/>
            </div>
           
        </div>
<div className='container'>
        <div className='inner-container'>
        <div className='map'>
         <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"  frameborder="0"  allowFullScreen=""></iframe>
        </div>
            <div className='map-content'>
                <h2>About our office</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.
                                    </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</p>
                <hr/>
                <div className='map-btn'>
                    <button><i className="fa-brands fa-facebook"></i></button>
                    <button><i className="fa-brands fa-linkedin"></i></button>
                    <button><i className="fa-brands fa-twitter"></i></button>
                    <button><i className="fa-brands fa-behance"></i></button>
                </div>

            </div>
        </div>
        </div>
        </>

    )
  }
  export default Contactmap;