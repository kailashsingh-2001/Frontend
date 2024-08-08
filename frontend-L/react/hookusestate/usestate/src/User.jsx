import React, { useState } from "react"

function User(){

   let [content,setCount]=useState( ' ')
  
    function gettext(e){ 
   
       setCount(e.target.value)

    

   }
   let [text,settext]=useState(' ')
   function click(){
     settext(content )
   }
   
  
      
   
   


    return(
        <>
        <h1>{text}</h1>
            <input type="text"  onChange={gettext} />
            <button onClick={click}>submit</button>
        </>
    )
}
export default User