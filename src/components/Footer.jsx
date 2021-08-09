import React from 'react';

import { InstagramLogo } from '../Icons/bootstrapIcons';

const Footer = () => {
    return(
        <div className="bg-warning row justify-content-center align-items-center py-2">
            <a href="https://www.instagram.com/high_on_meme.02" className="mx-2">
                Get in Touch : <InstagramLogo size='20'/> 
            </a>
            <span className="mx-1">:)</span>
            <a href="https://www.edamam.com/" className="mx-2">
                Made with Edamam
            </a>
        </div>
    )
}

export default Footer;