import React, { useState } from "react"

function User(){

   let [content,setCount]=useState( ' ')
   
   function gettext(e){
       setCount(e.target.value)
   }


    return(
        <>
        <h1>{content}</h1>
            <input type="text"  onChange={gettext} />
        </>
    )
}
export default User