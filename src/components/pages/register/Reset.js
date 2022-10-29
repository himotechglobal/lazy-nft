import React from "react";
import Header2 from '../header2'



const Reset = () => {
    return(
        <div>
       <Header2 />
       <section id="signup">
        <div className="container">
            <div className="signup-hding">
                <h1>Reset Password</h1>
            </div>
            <div className="signupbox">
              <input type="text" placeholder="Email" />
              <div className='signpubutn'>
                      <a href='#'>Reset Password</a>
                    </div>
                     
            </div>
        </div>
       </section>
    </div>
    )
}

export default Reset;