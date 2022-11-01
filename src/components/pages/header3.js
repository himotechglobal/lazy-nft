import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css'
import '../css/responsive.css'





const header3 = () => {


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
                        <div>
                        <div class="header"></div>
                        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
                        <label for="openSidebarMenu" class="sidebarIconToggle">
                            <div class="spinner diagonal part-1"></div>
                            <div class="spinner horizontal"></div>
                            <div class="spinner diagonal part-2"></div>
                        </label>
                        <div id="sidebarMenu">
                            <ul class="sidebarMenuInner">
                                <li><a href="#explore">Explore</a></li>
                                <li><a href="#explore">My Settings</a></li>
                                <li><a href="#explore">My Portfolio</a></li>
                                <li><a href="#explore">Hidden NFTs</a></li>
                                <li><a href="#explore">Sign Out</a></li>
                            </ul>
                        </div>

                    </div>



                    </div>
                    

                </div>


            </div>
        </div>
    );

}


export default header3;

