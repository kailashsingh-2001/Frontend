import '../innersectionabout/Innersectionabout.css'
// import './media.css'

function Innersectionabout(props){
    return(
        <>
        <div className="inneraboutsection">
                <div className="gearicon">
                   <div className="inner-gear"> 
                   <i className="fa-solid fa-gear"></i>
                   </div>
                </div>
                <div className="gearicon1">
                    <h2>{props.h2}</h2>
                </div>
                <div className="gearicon2">
                    <h4>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</h4>
                </div>
                <div className="gearicon3">
                    <button className="gearbtn">{props.btn}</button>
                </div>
            </div>
            </>
    )
}
export default Innersectionabout