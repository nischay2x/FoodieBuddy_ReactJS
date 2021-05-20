import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { worksData } from '../dataHolder';
import Package from './Package';
import { CameraFill } from '../Icons/bootstrapIcons';

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
        <main className='w-100' id='pricing-main'>
            <div style={{paddingTop : '5rem'}}>

                <Package packName='Digital Advertisement' packageTag={services[1].packageTag}/>

                {/* This will be removed */}
                <div className='pt-3 pb-2 bg-dark border-none text-white text-center'>
                    <h1 style={{fontFamily : 'Aclonica'}}>Browse Other Packages</h1>
                </div>

                <div className='d-flex flex-wrap border mx-2 justify-content-center' id="business-packages">
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
                                   <div>
                                       <CameraFill size='20'/>
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