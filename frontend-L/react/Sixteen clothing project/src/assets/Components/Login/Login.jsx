import React from 'react';
import './Logini.css'

function Login() {
    return (
    <>
    <div className="section-login">
        <div className="container-login">
            <center>
                <h1>Sign In With</h1>
            </center>
            <div className="buttons">
                <button className="facebook">
                    <i className="fa-brands fa-square-facebook"/>
                    Facebook
                </button>
                <button className="google">
                    <i className="fa-brands fa-google" />
                    Google
                </button>
            </div>
            <form id="login-form">
                <div className="form-group">
                    <label for="name">Username</label>
                    <input type="text" id="name" name="name" required placeholder="Enter your username" />
                </div>

                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required placeholder="Enter your password" />
                </div>
                <button type="submit">Sign in </button>

            </form>
            <div className="account">
                <p>Not a member?<a href="">Sign up Now</a></p>
            </div>
        </div>

        

    </div>
    </>
    );
  }
  
  export default Login;
  