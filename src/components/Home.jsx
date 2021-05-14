import React from 'react';

import background9 from '../images/background9.jpg';
import randomBg from '../images/randomBg.png'
import animatedShapes from '../images/animatedShapes.svg';

import { homeData } from '../dataHolder';


const Home = () => {

    const {welcomeText , works, clientWords} = homeData;

    var current = 0; var total = clientWords.length;
    let prev;
    
    function slideShow() {
        if (current >= total) { current = 0 }
        if (current === 0) { prev = total-1 }
        else prev = current-1;
        // console.log(`quote${current}`);
        // console.log(prev);
        document.getElementById(`quote${current}`).classList.replace('hidden-lg', 'expanded-lg');
            document.getElementById(`quote${prev}`).classList.replace('expanded-lg', 'hidden-lg');
        current++;
        setTimeout(slideShow, 6000)
    }
    setTimeout(slideShow, 1000); //Giving time to load page


    return(
        <main>
            <div className="bg-img-big" style={{backgroundImage : `url(${background9})`, backgroundRepeat : 'no-repeat'}}>
                <div className="bg-transparent pt-5">
                    <h1 id="welcome">{welcomeText}</h1>
                </div>
            </div>

            {/* <div className="bg-img-anim" id='tester-class'>
                <div className="jumbotron bg-transparent">
                    <h1>Helloooo</h1>
                </div>
            </div> */}

            <div className="d-flex flex-wrap justify-content-center align-items-center my-4 py-2" style={{gap : '1vw', backgroundImage : `url(${randomBg})`, backgroundPosition : 'center center', backgroundSize : 'cover'}}>
                {works.map((work, index) => {return <a href={work.link} 
                    key={index} 
                    className="col-md-2 col-sm-6 col-8 workLinks">
                        <h4>The New Era</h4>
                        <h2>{work.displayText}</h2>
                        <hr />
                    </a>
                } )}
            </div>


            <div className="my-4 quotes-wrapper" style={{ backgroundImage: `url(${animatedShapes})` }}>
                {clientWords.map((item, idx) => {
                    return (
                        <div key={idx} className="jumbotron bg-transparent hidden-lg" id={`quote${idx}`}>
                            <h2 style={{ fontFamily: "'lucida handwriting',cursive", wordSpacing: '3px' }} className='changing'>" {item.quote}"</h2>
                            <hr width='100%' style={{ height: '1px' }} />
                            <h5 style={{ fontFamily: "'courier new', monospace", minWidth: 'fit-content', marginLeft: '0.5rem' }} className='changing'>{item.name} / {item.company}</h5>
                        </div>
                    )
                })}
            </div>

            {/* <div className='py-3 px-2' style={{backgroundImage : `url(${quotesBgFar})`, backgroundSize : 'contain'}}>
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
            </div> */}

        </main>
    )   
}

export default Home;