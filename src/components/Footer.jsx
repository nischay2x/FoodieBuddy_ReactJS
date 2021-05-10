import React from 'react';

import { GeoLocateFill, FacebookLogo, InstagramLogo, YoutubeLogo, LinkedinLogo, CallFill, MailFill } from '../Icons/bootstrapIcons';
import logo from '../Icons/logo.png';
import {contactInfo} from '../dataHolder.js';

const Footer = () => {
    return(
        <div className="py-2 text-center text-white d-flex flex-column align-items-center" style={{backgroundColor : '#4287f5'}}>
            <div className="jumbotron bg-transparent">
                <img src={logo} alt="" width="400vw" />
                <br />
                <span className="d-flex justify-content-center align-items-center social-links" style={{ gap: '1rem' }}>
                    <a href={contactInfo.facebook} className='text-white'>
                        <FacebookLogo size='30' />
                    </a>

                    <a href={contactInfo.instagram} className='text-white'>
                        <InstagramLogo size='30' />
                    </a>

                    <a href={contactInfo.youtube} className='text-white'>
                        <YoutubeLogo size='30' />
                    </a>

                    <a href={contactInfo.linkedin} className='text-white'>
                        <LinkedinLogo size='30' />
                    </a>
                </span>
            </div>
            <h5>FEEL FREE TO CONTACT US, ANYTIME, ANYWHERE</h5>
            <a href={`tel:${contactInfo.call}`} className='text-white font-weight-bold'>
                <CallFill size='16'/> {contactInfo.call}
            </a>
            <br />
            <a href={`mailto:${contactInfo.mail}`} className='text-white'>
                <MailFill size='16' /> {contactInfo.mail}
            </a>
            <br/>
            <a href={contactInfo.location} className="text-white">
                <GeoLocateFill size='16'/>
                {contactInfo.address}
            </a>
            <br />
            <span className="m-2 font-weight-bold">© {new Date().getFullYear()}. The New Era Foundation. All Rights Reserved.</span>
        </div>
    )
}

export default Footer;