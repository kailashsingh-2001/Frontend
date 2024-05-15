import '../Contact form/Contactform.css'
import '../Contact form/Contactformmedia.css'

function Contactform(){
    return(
        <>
        <div className=''>
            <div>
                <h1>Send us a message</h1>
                <hr/>
            </div>
        </div>
        <div className='form-container'>
          <div className='form'>
            <div className='inner-form'>
               <input type="text" name="" id=""  placeholder='Full Name'/>
               <input type="email" name="" id=""  placeholder='E-mail address'/>
               <input type="text" name="" id=""  placeholder='Subject'/>
               <textarea name="" id="" placeholder='your message'></textarea>
               <button>Send message</button>
            </div>
            <div>
                <div>
                    <h3>Accordion Title One</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti elite.</p>
                    <h3>Second Title here</h3>
                    <h3>Accordion title three</h3>
                    <h3>Fourth Accordion Title</h3>
                </div>


            </div>

          </div>
        </div>
        </>
    )
}
export default Contactform;