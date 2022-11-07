import React from "react";
import Header from '../../components/Header/Header'



const Forget = () => {
    return(
        <div>
       <Header />
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

export default Forget;