import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { worksData } from '../dataHolder';

const Pricing = () => {

    const {services} = worksData;
    const pageData = useSelector(state => state.PageHandler);
    //console.log(pageData);
    
    // useEffect(() => {
    //     if(pageData){
    //         document.getElementById(pageData.show).style.display = 'block';
    //     }
    // }, [pageData]);

    return(
        <main className='card-body w-100' id='package-main'>
            <div style={{paddingTop : '5rem'}}>


                <div className='card'>
                    <div className='card-header bg-dark text-white text-center'>
                        <h1>Current Enquired Package</h1>
                    </div>
                <div className='row card-body justify-content-center' style={{gap : '1rem'}}>
                    <div className='col-md-3 jumbotron text-center'>
                        <h2>&#x20B9; 15,000</h2>
                        <p>Duration</p>
                        <div className="just-line bg-dark w-25 mx-auto my-3"></div>
                        <div>
                            <li>Work - 1</li>
                            <li>Work - 2</li>
                            <li>Work - 3</li>
                        </div>
                    </div>
                    <div className='col-md-3 jumbotron text-center'>
                        <h2>&#x20B9; 25,000</h2>
                        <p>Duration</p>
                        <div className="just-line bg-dark w-25 mx-auto my-3"></div>
                        <div>
                            <li>Work - 1</li>
                            <li>Work - 2</li>
                            <li>Work - 3</li>
                        </div>
                    </div>
                    <div className='col-md-3 jumbotron text-center'>
                        <h2>&#x20B9; 35,000</h2>
                        <p>Duration</p>
                        <div className="just-line bg-dark w-25 mx-auto my-3"></div>
                        <div>
                            <li>Work - 1</li>
                            <li>Work - 2</li>
                            <li>Work - 3</li>
                        </div>
                    </div>
                </div>
                </div>


                <div className='d-flex flex-wrap mx-2 justify-content-center' id="business-packages">
                   {services.map((service, idx) => {
                       return(
                           <div key={idx} id={service.packageTag} className='col-md-6 col-sm-6 col-10'>
                               <div className="my-3 card bg-transparent">
                                   <div className='card-header text-center text-white' style={{background : '#000'}}>
                                       <h3 style={{ fontFamily: 'Aclonica' }}>{service.titleText}</h3>
                                   </div>
                                   <div className="my-2 mx-3" style={{ gap: '5px' }}>
                                       <span className='display-4'>{service.price.from}</span>
                                       <span>{service.price.unit}</span>
                                       <span> - </span>
                                       <span className='display-4'>{service.price.to}</span>
                                       <span>{service.price.unit}</span>
                                   </div>
                                   <div className='mx-3 mb-3'>
                                       {service.providings.map((providing, idx) => {
                                           return (
                                               <li key={idx} style={{listStyle : 'none'}}>{providing}</li>
                                           )
                                       })}
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

export default Pricing;