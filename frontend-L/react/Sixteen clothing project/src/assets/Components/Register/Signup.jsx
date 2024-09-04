
import { useState } from 'react'
import './Signup.css'
import axios, { Axios } from 'axios'


function Signup(){
    const [name ,SetName]=useState()
    const [email ,SetEmail]=useState()
    const [password ,SetPassword]=useState()


    const handleSubmit= (e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/register',{name ,email ,password})
        .then(result=>{
            console.log(result);
            
        })
        .catch(err=>{
            console.log(err);
            
        })

    }

return(
<>
<div className="signup-flex">
<div className="signup-container">
        <h2>Sign Up</h2>
        <form id="signup-form" onSubmit={handleSubmit}>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required onChange={(e) => SetName(e.target.value)} />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required  onChange={(e) => SetEmail(e.target.value)}/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={(e) => SetPassword(e.target.value)} />

           

            <button type="submit">Sign Up</button>
        </form>
        <p id="error-message" class="error-message"></p>
    </div>
    </div>
</>
)

}

export default Signup

