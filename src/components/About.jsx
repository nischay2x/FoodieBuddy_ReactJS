import React from 'react';

//Development Only
import randomProfile from '../images/randomProfile.jpg';

import { about } from '../dataHolder';
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "../Icons/bootstrapIcons";

const About = () => {

    const {founder, co_founder, others} = about;

    return(
        <main className='card-body' id='about-main'>
            <div style={{ marginTop: '5rem' }}>
                <div className="rounded jumbotron mb-5 bg-dark text-white d-flex flex-wrap align-items-center">
                    <div className="col-md-6">
                        <h1>Our Achievements</h1>
                        <p>
                            The New Era Foundation has won <strong>4th</strong> position in <strong>SCF National Level Film Expo 2019 </strong>
                            and has also been appreciated in most of the State ans well as in National platforms for their creative and innovative ideas.
                        </p>
                        <p>* Listed as TOP 8 in CG Film Festival 2018</p>
                        <p>
                            <strong>Read : &nbsp;</strong>
                            <a href="https://www.deccanchronicle.com/nation/current-affairs/120119/short-film-by-chhattisgarh-kids-win-hearts-in-hosur.html" style={{color : 'cyan'}}>Deccan Chronicle </a>
                        </p>
                    </div>
                    <div className="col-md-6">
                        {/* <iframe seamless src="https://www.deccanchronicle.com/nation/current-affairs/120119/short-film-by-chhattisgarh-kids-win-hearts-in-hosur.html" width='100%' height='400' frameBorder="0" id='articleFrame'></iframe> */}
                        <img src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-m6k3b0b2lqvtci76ecahos92d4-20190112013348.Medi.jpeg" alt="" width='100%' className='rounded'/>
                    </div>
                </div>


                <div className='jumbotron bg-warning bg-gradient text-center'>
                    <h1 style={{ fontWeight: 'bold' }}>Meet Our Team</h1>
                </div>


                <div className='row mx-auto'>

                    <div className="col-md-6 my-2">
                        <div className='profile-wrapper'>
                            <div className='card-header bg-dark text-white'>
                                <h2 style={{ textTransform: 'uppercase', fontWeight: 'bolder', letterSpacing: '2px' }}>Founder</h2>
                            </div>
                            <div className='d-flex flex-wrap align-items-center py-2' style={{ gap: '1rem' }}>
                                <div className='profile-pic mx-auto'>
                                    <img src={randomProfile} alt="" width='100%' />
                                </div>
                                <div className='mx-auto'>
                                    <h3 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{founder.name}</h3>
                                    <div className='just-line bg-primary' style={{width : '40%'}}></div>
                                    <div className='d-flex my-1' style={{ gap: '1rem' }}>
                                        <a href={founder.socialMedia.instagram}>
                                            <InstagramLogo size='20' />
                                        </a>
                                        <a href={founder.socialMedia.facebook}>
                                            <FacebookLogo size='20' />
                                        </a>
                                        <a href={founder.socialMedia.linkedin}>
                                            <LinkedinLogo size='20' />
                                        </a>
                                    </div>
                                    <br />
                                    <div style={{ textTransform: 'capitalize' }}>
                                        {founder.texts.map((text, idx) => {
                                            return <p key={idx}>{text}</p>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 my-2">
                        <div className="profile-wrapper">
                            <div className='card-header bg-dark text-white'>
                                <h2 style={{ textTransform: 'uppercase', fontWeight: 'bolder', letterSpacing: '2px' }}>CO - Founder</h2>
                            </div>
                            <div className='d-flex flex-wrap align-items-center py-2' style={{ gap: '1rem' }}>
                                <div className='profile-pic mx-auto'>
                                    <img src={randomProfile} alt="" width='100%' />
                                </div>
                                <div className='mx-auto'>
                                    <h3 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{co_founder.name}</h3>
                                    <div className='just-line bg-primary' style={{width : '40%'}}></div>
                                    <div className='d-flex my-1' style={{ gap: '1rem' }}>
                                        <a href={co_founder.socialMedia.instagram}>
                                            <InstagramLogo size='20' />
                                        </a>
                                        <a href={co_founder.socialMedia.facebook}>
                                            <FacebookLogo size='20' />
                                        </a>
                                        <a href={co_founder.socialMedia.linkedin}>
                                            <LinkedinLogo size='20' />
                                        </a>
                                    </div>
                                    <br />
                                    <div style={{ textTransform: 'capitalize' }}>
                                        {co_founder.texts.map((text, idx) => {
                                            return <p key={idx}>{text}</p>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row justify-content-between align-items-center my-4 mx-auto">
                    {others.map((person, idx) => {
                        return (
                            <div key={idx} className='col-md-3 my-3'>
                                <div className="profile-wrapper d-flex flex-column align-items-center">
                                    <div className='profile-pic-sm mx-2 my-2'>
                                        <img src={randomProfile} alt="" width='100%' />
                                    </div>
                                    <div className='w-100 text-center bg-dark text-white pt-3'>
                                        <h4 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{person.name}</h4>
                                        <div className='just-line bg-warning mx-auto my-1'></div>
                                        <p>{person.position}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default About;