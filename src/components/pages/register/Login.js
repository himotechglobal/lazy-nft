import React from "react";
import Header2 from '../header2'



const Login = () => {
    return(
        <div>
       <Header2 />
       <section id="signup">
        <div className="container">
            <div className="signup-hding">
                <h1>Log In</h1>
            </div>
            <div className="signupbox">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <div className='signpubutn'>
                      <a href='#'>Login</a>
                    </div>
                    <p className="sig-pr">Don't have an account?<span><a href="/signup"> Sign up.</a></span></p>
                    <p className="sig-pr"><span><a href="/reset"> Forgot your password?</a></span></p>
            </div>
        </div>
       </section>
    </div>
    )
}

export default Login;