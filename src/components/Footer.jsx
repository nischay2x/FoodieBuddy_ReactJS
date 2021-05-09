import React from 'react';

import { GeoLocateFill, FacebookLogo, InstagramLogo, YoutubeLogo, LinkedinLogo } from '../Icons/bootstrapIcons';
import logo from '../Icons/logo.png';

const Footer = () => {
    return(
        <div className="bg-dark py-2 text-center text-white d-flex flex-column align-items-center">
            <div className="glass-contain">
                <img src={logo} alt="" width="400vw" />
            </div>
            <span className="d-flex justify-content-center align-items-center " style={{gap : '1rem'}}>
                <FacebookLogo size='30'/>
                <InstagramLogo size='30'/>
                <YoutubeLogo size='30'/>
                <LinkedinLogo size='30'/>
            </span>
            <br/>
            <br/>
            <h5>FEEL FREE TO CONTACT US, ANYTIME, ANYWHERE</h5>
            <h5>+91 8319809996</h5>
            <br/>
            <p>
                <GeoLocateFill size='16'/>
                Building No 610 , Street No 8 , Gurunanak Nagar , Vaishali Nagar , Bhilai , C.G
            </p>
            <span className="m-2">© 2021. The New Era Foundation. All Rights Reserved.</span>
        </div>
    )
}

export default Footer;