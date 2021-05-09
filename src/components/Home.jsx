import React from 'react';

import background9 from '../images/background9.jpg'

const Home = () => {
    return(
        <main>
            <div className="l-section-img" style={{backgroundImage : `url(${background9})`, backgroundRepeat : 'no-repeat'}}>
                <div className="bg-transparent pt-5 px-4 mx-3">
                    <h1 id="what">Welcome to the New Era of Everything.</h1>
                </div>
            </div>

            {/* <div class="testerClass bg-img-anim">
                <div class="jumbotron bg-transparent">
                    <h1>Helloooo</h1>
                </div>
            </div> */}
        </main>
    )   
}

export default Home;