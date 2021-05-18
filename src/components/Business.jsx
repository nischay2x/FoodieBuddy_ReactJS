import React from 'react';
import { useDispatch } from 'react-redux';

import { worksData } from '../dataHolder';
import { YoutubeLogo, InfoFill } from '../Icons/bootstrapIcons';
import { PageHandler } from '../actions/PageHandler';
import { Link } from "react-router-dom";

const Business = () => {

    const {services} = worksData;
    const dispatch = useDispatch();

    const handleEnquire = (about) => {
        const page = {
            to : 'contact',
            from : 'works',
            query : `I would like to enquire more about ${about}.`
        }
        dispatch(PageHandler(page));
    }

    return(
        <main className='card-body' id='business-main'>
            <div style={{marginTop : '5rem'}}>
                <div className="jumbotron d-flex justify-content-center py-5 bg-warning bg-gradient">
                    <h1 style={{fontWeight : 'bold'}}>Business Details</h1>
                </div>
                <div>
                    {services.map((service, idx) => {
                        return (
                            <div key={idx} className="jumbotron d-flex justify-content-between align-items-center bg-img"
                            style={{backgroundImage : `url(${service.bgImg})`}}>
                                <div className="text-white glass">
                                    <h1 style={{fontWeight : 'bold'}}>{service.titleText}</h1>
                                    {service.texts.map((text, ind) => {return <p key={ind} style={{fontSize : 'large'}}>{text}</p>})}

                                    <div className="d-flex flex-row-reverse" style={{gap : '1rem'}}>
                                        <a href={`/packages#${service.packageTag}`} className='btn-outline-warning px-1 rounded' title='Package Info' style={{textDecoration : 'none'}}>
                                            <InfoFill size='20'/>
                                        </a>

                                        <a href={service.videoLink} className='btn-outline-danger rounded px-1' title='Watch Sample Video'>
                                            <YoutubeLogo size='30'/>
                                        </a>

                                        <Link to="/contact" onClick={() => handleEnquire(service.titleText)} className='btn-outline-info rounded px-1'>
                                            <span className='font-weight-bold'>Enquire</span>
                                        </Link>

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

export default Business;