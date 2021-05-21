import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PageHandler } from '../actions/PageHandler';
import { worksData} from '../dataHolder';
import Package from './Package';
import { CameraFill, VideoReel, Calculator, CreditCard, Wifi, VideoCamera, InfoFill } from '../Icons/bootstrapIcons';
import { useState } from 'react';

const Pricing = () => {

    const [currentPackage, setCurrentPackage] = useState(0);
    const {services, packages} = worksData;
    const pageData = useSelector(state => state.PageHandler);

    const getPackageLogo = (tag) => {
        switch(tag){
            case 'weddingCarousel' : return <CameraFill size='40'/>;
            case 'digitalAdvertisment'  : return <Wifi size='40'/>;
            case 'editingDesigning' : return <VideoReel size='40'/>;
            case 'eventManagement' : return <Calculator size='40'/>;
            case 'shootArtWork' : return <VideoCamera size='40'/>;
            case 'designDevelopment' : return <CreditCard size='40'/>;
            default : return <CameraFill size='40'/>;
        }
    }

    const dispatch = useDispatch();
    const handlePackageInfoClick = (packageTag) => {
        const page = {
            to : 'pricing',
            from : 'works',
            show : packageTag
        }
        dispatch(PageHandler(page));
    }
    
    useEffect(() => {
        if(pageData){
            
            // document.getElementById(pageData.show).style.display = 'block';
            setCurrentPackage(packages.find((pack) => {
                if(pack.tag === pageData.show) return pack;
                else return 0;
            }));
            document.body.scroll = 0;
            document.documentElement.scrollTop = 0;
        }
    }, [pageData, packages]);

    return(
        <main className='w-100' id='pricing-main'>
            <div style={{paddingTop : '5rem'}}>

                {(currentPackage)?
                    <Package packName={currentPackage.name} packs={currentPackage.packs}/>
                    :
                    <div className='pt-3 pb-2 bg-dark border-none text-white text-center'>
                        <h1 style={{fontFamily : 'Aclonica'}}>We Offer</h1>
                    </div>
                }

                <div className='px-2' id="business-packages">
                   {services.map((service, idx) => {
                       return(
                           <div key={idx} id={service.packageTag} className='glass col-md-6 my-2 py-3 col-sm-10 col-12 d-flex flex-wrap align-items-center justify-content-center' style={{textDecoration  : 'none'}}>
                               
                               <Link to='/pricing' onClick={() => handlePackageInfoClick(service.packageTag)} className='border border-dark p-4 btn-outline-dark rounded-circle'>
                                   {getPackageLogo(service.packageTag)}
                               </Link>

                               <div className='col-md-8 my-3 col-sm-10 col-12 text-center'>
                                   <div>
                                        <h3 style={{fontFamily : 'Aclonica'}}>{service.titleText}</h3>
                                   </div>
                                   <div style={{color : 'darkblue'}}>
                                       <p>{service.packageBrief}</p>
                                   </div>
                                   <div className='bg-dark text-white pt-2 d-flex justify-content-between rounded flex-row-reverse px-3'>
                                       <div className='d-flex' style={{gap : '5px'}}>
                                           <h5>&#x20B9;</h5>
                                           <h5>{service.price.from}</h5><span>{service.price.unit}</span>
                                           <h5> - </h5>
                                           <h5>{service.price.to}</h5><span>{service.price.unit}</span>
                                       </div>
                                       <Link to='/pricing' onClick={() => handlePackageInfoClick(service.packageTag)}>
                                           <InfoFill size='20'/>
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

export default Pricing;