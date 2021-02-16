import React from 'react'
import LogoImage from '../../../../assets/images/logo.png'
import {Link} from '@reach/router'

function Logo() {
    return (
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col logo_section">
            <div className="full">
                <div className="center-desk">
                    <div className="logo">
                        <Link to="index.html"><img src={LogoImage} alt="logo" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logo
