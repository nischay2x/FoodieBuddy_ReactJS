import React from 'react';
import { packages } from '../dataHolder';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PageHandler } from '../actions/PageHandler';

const Package = (props) => {

    const {packName} = props;
    const {digitalAdvertisement} = packages;
    const packs = digitalAdvertisement;
    const dispatch = useDispatch();
    const handleEnquire = (type) => {
        const page = {
            to : 'contact',
            from : 'package',
            query : `I would like to enquire more about ${type} scheme of your ${packName} package.`
        }
        dispatch(PageHandler(page))
    }

    const enquireBtn = {
        position : 'absolute',
        bottom : '5%',
        left : '50%',
        transform : 'translateX(-50%)'
    }

    return(
        <div className='rounded border-none'>
            <div className='pt-3 pb-2 bg-dark border-none text-white text-center'>
                <h1 style={{fontFamily : 'Aclonica'}}>{packName} Package</h1>
            </div>

            <div className='d-flex py-5 px-2 flex-wrap bg-primary  justify-content-center' style={{ gap: '1rem' }}>

                {packs.map((pack, idx) => {
                    return(
                        <div key={idx} className='col-md-3 col-sm-6 col-9 pack'>
                            <div className='text-center'>
                                <h1>&#x20B9; {pack.price}</h1>
                                <p style={{textTransform : 'uppercase', letterSpacing : '5px', marginTop : '1rem'}}>{pack.duration}</p>
                            </div>

                            <div className="just-line bg-warning w-25 mx-auto mt-2 mb-5"></div>

                            <div className='providings'>
                                {pack.providings.map((providing, indx) => {
                                    return(
                                        <li key={indx}>
                                            <span>✔</span>
                                            <span style={{textTransform : 'capitalize'}}>{providing}</span>
                                        </li>
                                    )
                                })}
                            </div>
                            
                            <div className='d-flex justify-content-center mt-5' style={enquireBtn}>
                                <Link to='/contact'>
                                    <button className="btn-dark rounded btn-lg" onClick={() => handleEnquire(pack.type)}>Enquire</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}   

export default Package;