import React from 'react'

import {contactInfo} from '../dataHolder.js';
import { GeoLocateFill, CallFill, MailFill } from '../Icons/bootstrapIcons';

const Contact = () => {
    return(
        <main className="card-body">
            <div className='jumbotron row justify-content-center align-items-center' style={{marginTop : '5rem'}}>
                <div className="col-md-6 col-sm-12 col-12 p-3 no-underline">
                    <h1>Reach Us</h1>
                    <hr width='50%'/>
                    <br />
                    <a href={`tel:${contactInfo.call}`} className='font-weight-bold'>
                        <CallFill size='16' /> {contactInfo.call}
                    </a>
                    <br />
                    <a href={`mailto:${contactInfo.mail}`} className=''>
                        <MailFill size='16' /> {contactInfo.mail}
                    </a>
                    <br />
                    <a href={contactInfo.location} className="">
                        <GeoLocateFill size='16' />
                        {contactInfo.address}
                    </a>
                    <br />
                </div>

                <div className="col-md-6 col-sm-12 col-12" id='contact-form'>
                    <div className="card-body">
                        <h1>Get Quote</h1>
                    </div>
                    <div className='card-body form-group'>
                        <input type="text" className="form-control my-2" placeholder='Full Name' required />
                        <input type="text" className="form-control my-2" placeholder='Phone Number' required />
                        <input type="text" className="form-control my-2" placeholder='Email' />
                        <textarea name="" id="" cols="30" rows="5" className="form-control my-2" placeholder='Write Your Query . . .'></textarea>
                    </div>

                    <div className="card-body">
                        <button className="form-control btn-dark">Submit</button>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Contact;