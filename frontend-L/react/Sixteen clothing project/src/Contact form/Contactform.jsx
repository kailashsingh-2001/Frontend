import '../Contact form/Contactform.css'
import '../Contact form/Contactformmedia.css'
import Button from '../Button'

function Contactform(){
    return(
        <>
        <div className='contactform'>
            <div className='inner-contactform'>
                <h1>Send us a message</h1>
                <hr/>
            </div>
        </div>
        <div className='form-container'>
          <div className='form'>
            <div className='inner-form1'>
               <input type="text" name="" id=""  placeholder='Full Name'/>
               <input type="email" name="" id=""  placeholder='E-mail address'/>
               <input type="text" name="" id=""  placeholder='Subject'/>
               <textarea name="" id=""  rows='' placeholder='your message'></textarea>
               <Button ns="Send message"/>
            </div>
            <div className='inner-form2'>
             <div className='insideform1'>
                <hr className='hrgray'/>
               <h3>Accordion Title One</h3>
             </div>
                <div className='insideform2'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                </div>        
                <div  className='insideform3'>
                    <hr className='hrgray'/>
                    <h4>Second Title here</h4>
                    <hr className='hrgray'/>
                    <h4>Accordion title three</h4>
                    <hr className='hrgray'/>
                    <h4>Fourth Accordion Title</h4>
                    <hr className='hrgray'/>
                </div>  
                    
            </div>

          </div>
        </div>
        </>
    )
}
export default Contactform;