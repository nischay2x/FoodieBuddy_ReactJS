import React from 'react';
import randomProfile from '../images/randomProfile.jpg'

const About = () => {
    return(
        <main className='card-body'>
            <div style={{marginTop : '5rem'}}>
                <div className='jumbotron bg-warning bg-gradient text-center'>
                    <h1 style={{fontWeight : 'bold'}}>Meet Our Team</h1>
                </div>
                <div className="card border">
                    <div className='card-header'>
                        <h2>Founder</h2>
                    </div>
                    <div className='border d-flex flex-wrap justify-content-center align-items-center'>
                        <div className='profile-pic'>
                            <img src={randomProfile} alt="" width='100%'/>
                        </div>
                        <div>
                            <h3>SHUBHAM TIWARI</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;