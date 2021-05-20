import React from 'react';

import background9 from '../images/background9.jpg';
// import quotesBgFar from '../images/quotesBgFar.jpg';
// import randomBg from '../images/randomBg.jpg'
// import animatedShapes from '../images/animatedShapes.svg';

import { homeData } from '../dataHolder';


const Home = () => {

    const {welcomeText , works, clientWords} = homeData;
    
    setTimeout(() => {
        document.getElementById('quote-indicator-0').classList.add('active');
        document.getElementById('quote-0').classList.add('active');
    }, 1000)


    return(
        <main className='w-100'>
            <div className="bg-img-big" style={{backgroundImage : `url(${background9})`, backgroundRepeat : 'no-repeat'}}>
                <div className="bg-transparent px-2 pt-5">
                    <h1 id="welcome">{welcomeText}</h1>
                </div>
            </div>


            <div className="my-4 py-2 work-links-wrapper">
                {works.map((work, index) => {
                    return (
                    <a href={work.link} key={index} className="col-md-2 col-sm-5 col-10 workLinks">
                        <h4>The New Era</h4>
                        <h2>{work.displayText}</h2>
                        <div className="just-line w-50 mx-auto bg-warning my-3"></div>
                        <button className='btn-dark rounded'>Know More</button>
                    </a> )
                })}
            </div>


            <div>

                <div className='card-header bg-transparent'>
                    <h2 className='head-text'>WORDS FROM OUR CLIENTS</h2>
                    <div className='just-line bg-success' style={{width : '15%'}}></div>
                </div>
                <div className="carousel slide quotes-wrapper mb-4" id="quotesCarousel" data-pause='false' data-interval='5000' data-ride="carousel">

                    <ol className="carousel-indicators">
                        {clientWords.map((item, idx) => {
                            return (
                                <li key={idx} className='indicator-btn' data-target='#quotesCarousel' data-slide-to={idx} id={`quote-indicator-${idx}`}></li>
                            )
                        })}
                    </ol>

                    <div className="carousel-inner">
                        {clientWords.map((item, idx) => {
                            return (
                                <div key={idx} className="carousel-item quote-contents" id={`quote-${idx}`}>
                                    <div className="jumbotron bg-transparent">
                                        <h2 style={{ fontFamily: "'lucida handwriting', cursive", wordSpacing: '3px' }}>{item.quote}</h2>
                                        <div className="just-line bg-warning my-3 w-50"></div>
                                        <h5 style={{ fontFamily: "'courier new', monospace", fontWeight : 'bold'}}>{item.name} / {item.company}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </main>
    )   
}

export default Home;