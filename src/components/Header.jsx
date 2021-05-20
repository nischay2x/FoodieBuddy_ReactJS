import React from 'react';

import logo from '../Icons/logo.png';


const Header = () => {

    const currentLocation = () => {
        document.querySelector('.nav-link').classList.remove('active');
        const loc = window.location.pathname;
        switch(loc){
            case '/' : document.querySelector('#home').classList.add('active'); break;
            case '/about-us' : document.querySelector('#about').classList.add('active'); break;
            case '/contact' : document.querySelector('#contact').classList.add('active'); break;
            case '/business' : document.querySelector('#business').classList.add('active'); break;
            case '/portfolio' : document.querySelector('#portfolio').classList.add('active'); break;
            case '/pricing' : document.querySelector('#pricing').classList.add('active'); break;
            default : break;
        }
    }
    setTimeout(currentLocation, 500);

    return(
        <div className="sticky w-100 border-bottom" style={{ zIndex: 3 }} id="header">

            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">

                <a href="/" className='navbar-brand'>
                    <img src={logo} width='120vw' alt="" />
                </a>

                <button className="navbar-toggler mr-3" data-toggle='collapse' data-target='#navigation' aria-controls='navigation' aria-expanded='false' aria-label='Toggle Navigation'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>

                <div className="collapse navbar-collapse" id='navigation'>
                    <ul className='navbar-nav mr-auto nav-item-wrapper'>
                        <li className="nav-item">
                            <a href="/" className="nav-link mx-2" id='home'>HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link mx-2" id='contact'>CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <a href="/business" className="nav-link mx-2" id='business'>BUSINESS</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/pricing" className='nav-link mx-2' id='pricing'>PRICING</a>
                        </li>
                        <li className='nav-item'>
                            <a href="/about-us" className='nav-link mx-2' id='about'>ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link mx-2" id='portfolio'>PORTFOLIO</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;