import React from 'react';

import background9 from '../images/background9.jpg';

import { homeData } from '../dataHolder';

const Home = () => {
    return(
        <main>
            <div className="bg-img-big" style={{backgroundImage : `url(${background9})`, backgroundRepeat : 'no-repeat'}}>
                <div className="bg-transparent pt-5 mx-3">
                    <h1 id="welcome">{homeData.welcomeText}</h1>
                </div>
            </div>

            <div className="bg-img-anim" id='tester-class'>
                <div className="jumbotron bg-transparent">
                    <h1>Helloooo</h1>
                </div>
            </div>
        </main>
    )   
}

export default Home;