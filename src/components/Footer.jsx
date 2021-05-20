import React from 'react';

import { FacebookLogo, InstagramLogo, YoutubeLogo, LinkedinLogo, CallFill } from '../Icons/bootstrapIcons';
import logo from '../Icons/logo.png';
import {contactInfo} from '../dataHolder.js';
import { WhatsappLogo } from '../Icons/bootstrapIcons';

const Footer = () => {
    return(
        <div className="text-center text-white d-flex flex-column align-items-center" style={{backgroundColor : '#4287f5'}}>
            <div className="jumbotron pt-2 bg-transparent">
                <img src={logo} alt="" width="400vw" />
                <br />

                <div id='footer-nav' className='d-flex flex-wrap justify-content-center'>
                    <a href="/" className=" mx-2" id='home'>HOME</a>
                    
                    <a href="/about-us" className=' mx-2' id='about'>ABOUT US</a>
                    
                    <a href="/contact" className=" mx-2" id='contact'>CONTACT</a>
                    
                    <a href="/business" className=" mx-2" id='business'>BUSINESS</a>
                    
                    <a href="/" className=" mx-2" id='portfolio'>PORTFOLIO</a>
                </div>
                <br />

                <h6>FEEL FREE TO CONTACT US, ANYTIME, ANYWHERE</h6>
                <a href={`tel:${contactInfo.call}`} className='text-white font-weight-bold'>
                    <CallFill size='16' /> {contactInfo.call}
                </a>

                <br />
                <br />
                <br />
                <span className="d-flex justify-content-center align-items-center social-links" style={{ gap: '1rem' }}>
                    <a href={contactInfo.facebook} className='text-white' title='Facebook'>
                        <FacebookLogo size='20' />
                    </a>

                    <a href={contactInfo.instagram} className='text-white' title='Instagram'>
                        <InstagramLogo size='20' />
                    </a>

                    <a href={contactInfo.youtube} className='text-white' title='YouTube'>
                        <YoutubeLogo size='20' />
                    </a>

                    <a href={contactInfo.linkedin} className='text-white' title='Linked In'>
                        <LinkedinLogo size='20' />
                    </a>
                </span>
            </div>

            <a href={contactInfo.whatsapp} id="wa-logo" title='WhatsApp'>
                <WhatsappLogo size='50'/>   
            </a>
            <span className="text-white w-100 py-2" style={{background : 'black'}}>&#169; {new Date().getFullYear()}. The New Era Foundation. All Rights Reserved.</span>
        </div>
    )
}

export default Footer;