import React from 'react';

import background9 from '../images/background9.jpg';
import quoteBackground from '../images/quoteBackground.svg';
import quotesBgFar from '../images/quotesBgFar.jpg'

import { homeData } from '../dataHolder';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {

    const {welcomeText , works, clientWords} = homeData;

    const [client, setClient] = useState(clientWords[0]);
    var index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            if(index >= clientWords.length) { index = 0; }
            setClient(clientWords[index]);
            index++;
        }, 4000)
        return () => {
            clearInterval(interval);
        }
    }, [])

    return(
        <main>
            <div className="bg-img-big" style={{backgroundImage : `url(${background9})`, backgroundRepeat : 'no-repeat'}}>
                <div className="bg-transparent pt-5 mx-3">
                    <h1 id="welcome">{welcomeText}</h1>
                </div>
            </div>

            {/* <div className="bg-img-anim" id='tester-class'>
                <div className="jumbotron bg-transparent">
                    <h1>Helloooo</h1>
                </div>
            </div> */}

            <div className="d-flex flex-wrap justify-content-center align-items-center my-4 py-2" style={{gap : '1vw' , backgroundImage : `url(${quoteBackground})`, backgroundSize : 'cover'}}>
                {works.map((work, index) => {return <a href={work.link} 
                    key={index} 
                    className="col-md-2 col-sm-6 col-8 workLinks">
                        <h4>The New Era</h4>
                        <h2>{work.displayText}</h2>
                        <hr />
                    </a>
                } )}
            </div>

            <div className='py-3 px-2' style={{backgroundImage : `url(${quotesBgFar})`, backgroundSize : 'contain'}}>
                <h3 style={{fontWeight : 'bold', fontFamily: "'georgia', serif"}} className='changing'>WHAT OUR CLIENTS SAY ?</h3>
                <br />
                <div style={{backgroundImage : `url(${quoteBackground})`}} className="jumbotron quotes-wrapper">
                    <h2 style={{fontFamily : "'lucida handwriting',cursive", wordSpacing : '3px'}} className='changing'>" {client.quote} "</h2>
                    <br />
                    <div className="d-flex align-items-center">
                        <hr width='95%' style={{height : '1px'}}/>
                        <h5 style={{fontFamily : "'courier new', monospace", minWidth : 'fit-content', marginLeft : '0.5rem'}} className='changing'>{client.name} / {client.company}</h5>
                    </div>
                </div>
            </div>

        </main>
    )   
}

export default Home;