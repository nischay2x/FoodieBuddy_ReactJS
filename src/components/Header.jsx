import React from 'react';
import { useState } from 'react';

import logo from '../Icons/logo.png'

// import { GeoLocateFill, CallFill, MailFill } from "../Icons/bootstrapIcons";

const Header = () => {

    const [sidebar , setSidebar] = useState('hidden');
    const toggleSidebar = () => {
        if(sidebar === 'hidden') setSidebar('expanded');
        else setSidebar('hidden');
    }

    return(
        <div className="sticky w-100" style={{ zIndex: 2 }} id="header">
            <div className="card-header d-flex justify-content-between align-items-center">

                <div id="company-logo">
                    <img src={logo} width="110vw" alt="" />
                </div>

                <div className="d-flex justify-content-between align-items-center" style={{ gap: '3vw' }}>
                    <button className="btn-md rounded btn-outline-dark" id="navbar-toggle" style={{ zIndex: 3 }} onClick={toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>

            </div>

            <div className={'bg-dark col-md-3 col-sm-5 col-6 ' +sidebar} id="navbar" onBlur={toggleSidebar} style={{height : '100vh', position : 'fixed', zIndex : 1, top : 0}}>
                <div style={{marginTop : '25%', width : '100%'}} className="text-white d-flex flex-column mx-1 justify-content-between">
                    <h4 className="nav-items">HOME</h4>
                    <h4 className="nav-items">ABOUT US</h4>
                    <h4 className="nav-items">PORTFOLIO</h4>
                    <h4 className="nav-items">SERVICES</h4>
                    <h4 className="nav-items">CLIENTS</h4>
                    <h4 className="nav-items">CONTACT</h4>
                </div>
                {/* <div className="text-white text-wrap mt-2 text-warning text-center">
                    <p>
                        <GeoLocateFill size='16'/>
                        Building No 610 , Street No 8 , Gurunanak Nagar , Vaishali Nagar , Bhilai , C.G
                    </p>
                    <p>
                        <CallFill size='16'/>
                        +91 8319809996
                    </p>
                    <p>
                        <MailFill size='16'/>
                        contact.newerafoundation@gmail.com
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Header;