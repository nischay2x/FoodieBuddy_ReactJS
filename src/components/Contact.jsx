import React from 'react'
import { useState } from 'react';

import {contactInfo} from '../dataHolder.js';

const Contact = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    const collectAndSend = (e) => {
        const message = {
            name : name,
            phone : phone,
            email : email,
            query : query
        }
        console.log(message); //Development Only
        // e.preventDefault();
    }

    return(
        <main className="card-body">
            <div className='mx-4 row justify-content-between' style={{marginTop : '5rem'}}>
                <div className="col-md-6 col-sm-10 col-12 no-underline">
                    <div className="mx-2 mt-4 border-bottom border-success" style={{maxWidth : 'fit-content'}}>
                        <h1 style={{fontFamily : 'sans-serif', fontWeight : 'bolder'}}>Reach Us</h1>
                    </div>
                    <div className="mx-2 mt-4 mb-5">
                        <br />
                        <h5>Bhilai (Durg)</h5>
                        <br />
                        <h6 style={{fontWeight : 'normal'}}>
                            <a href={contactInfo.location}>{contactInfo.address}</a>
                        </h6>

                        <br />
                        <br />

                        <h6 style={{fontWeight : 'normal'}}>
                            <a href={`mailto:${contactInfo.mail}`}>
                                {contactInfo.mail}
                            </a>
                        </h6>
                        <br />
                        <h6 style={{fontWeight : 'normal'}}>
                            <a href={`tel:${contactInfo.call}`}>
                                {contactInfo.call}
                            </a>
                        </h6>

                    </div>
                    
                </div>

                <form className="col-md-4 col-sm-10 col-12" id='contact-form'>
                    <div className="mx-4 mt-4 border-bottom border-success" style={{maxWidth : 'fit-content'}}>
                        <h1 style={{fontFamily : 'sans-serif', fontWeight : 'bolder'}}>Get Quote</h1>
                    </div>
                    <div className='card-body form-group'>
                        <input type="text" className="form-control my-2" placeholder='Full Name' name='name' onChange={(e) => setName(e.target.value)} required />
                        <input type="tel" className="form-control my-2" placeholder='Phone Number' name='phone' onChange={(e) => setPhone(e.target.value)}  required />
                        <input type="email" className="form-control my-2" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} />
                        <textarea cols="30" rows="5" className="form-control my-2" name='query' onChange={(e) => setQuery(e.target.value)} placeholder='Write Your Query . . .' required></textarea>
                    </div>

                    <div className="mx-4 mb-4">
                        <button className="form-control btn-dark" type='submit' onClick={collectAndSend}>Submit</button>
                    </div>
                </form>

            </div>
        </main>
    )
}

export default Contact;