import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'
import '../css/responsive.css'
 




const Header = () => {
 

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
             


            <ul className="menu-list-d">
              <li>
                <ul className='nav-list'>
                  <li>
                    <div className='connect-wallet'>
                      <Link to='/signup'>Get Started</Link>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
 

      </div>
    </div>
  );

}


export default Header;

