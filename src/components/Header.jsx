import React from 'react';
import { WebsiteLogo, HomeLogo } from "../Icons/bootstrapIcons";

const Header = () => {
    return(
        <div className="bg-warning p-2" style={{maxHeight : '4em'}}>
            <div className="d-flex align-items-center justify-content-between" >
                <WebsiteLogo/>
                <a href="/"  id="homeLogo">
                    <HomeLogo size='40'/>
                </a>
            </div>  
        </div>
    )
}

export default Header;