import React from 'react'
import {Link} from '@reach/router'
import Logo from '../../../assets/images/logo.png';

function FooterLogo() {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="address">
                <Link to="index.html"> <img src={Logo} alt="logo"/> </Link>
                <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et sdolor sit amet, consectetur adipiscing elit, </p>
            </div>
        </div>
    )
}

export default FooterLogo
