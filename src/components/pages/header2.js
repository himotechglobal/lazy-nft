import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'
import '../css/responsive.css'
 




const header2 = () => {
 

  return (
    <div className="border-b">
      <div className="container-fluid">
        <div className="header-box">
          <div className="header-c2">
            <div className="header-c1">
              <div className="logo-box">
                <Link to="/">Lazy</Link>
              </div>
            </div>
             


            
          </div>

        </div>
 

      </div>
    </div>
  );

}


export default header2;

