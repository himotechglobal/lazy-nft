import React from "react";
import Header2 from '../header2'



const Signup = () => {
    return(
        <div>
       <Header2 />
       <section id="signup">
        <div className="container">
            <div className="signup-hding">
                <h1>Sign Up</h1>
            </div>
            <div className="signupbox">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <div className='signpubutn'>
                      <a href='#'>Sign Up</a>
                    </div>
                    <p className="sig-pr">Already have an account?<span><a href="/login"> Sign in.</a></span></p>
            </div>
        </div>
       </section>
    </div>
    )
}

export default Signup;