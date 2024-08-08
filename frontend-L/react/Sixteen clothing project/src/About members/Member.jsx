import '../About members/Member.css'
import Mancart from '../Aboutmancart/Mancart';
function Member(){
    return(
        <>
          <div className='membercont'>
            <div className="innermember">
                <h1>our team members</h1>
                <hr/>
                </div>
          </div>
          <div className='membercart'>
            <div className='innermembercart'>
                <Mancart/>
                

            </div>

          </div>
        </>
    )
}
export default Member;