import React from 'react';

import { worksData } from '../dataHolder';

const Packages = () => {

    const {services} = worksData;

    return(
        <main classNamea='card-body w-100' id='package'>
            <div style={{paddingTop : '5rem'}}>
                <div className='d-flex flex-wrap mx-2 justify-content-center' id="business-packages">
                   {services.map((service, idx) => {
                       return(
                           <div key={idx} id={service.packageTag} className='col-md-6'>
                               <div className="my-3 card bg-transparent">
                                   <div className='card-header text-center text-white' style={{background : '#000'}}>
                                       <h3 style={{ fontFamily: 'Aclonica' }}>{service.titleText}</h3>
                                   </div>
                                   <div className="d-flex align-items-center" style={{ gap: '5px' }}>
                                       {/* <h5 className='mr-2'>Price : </h5> */}
                                       <h4>{service.price.from}</h4>{service.price.unit} - <h4>{service.price.to}</h4>{service.price.unit}
                                   </div>
                                   <div className=''>
                                       {service.providings.map((providing, idx) => {
                                           return (
                                               <li key={idx}>{providing}</li>
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

export default Packages;