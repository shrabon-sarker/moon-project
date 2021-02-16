import React from 'react'
import {Link} from '@reach/router'

import Call from '../../../assets/icon/call.png';
import Email from '../../../assets/icon/email.png';
import Loc from '../../../assets/icon/loc.png';


function Contactus() {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="address">
                <h3>Contact Us</h3>

                <ul className="loca">
                    <li>
                        <Link to="#"><img src={Loc} alt="#" /></Link>London 145
                        <br />United Kingdom </li>
                    <li>
                        <Link to="#"><img src={Email} alt="#" /></Link>demo@gmail.com </li>
                    <li>
                        <Link to="#"><img src={Call} alt="#" /></Link>+12586954775 </li>
                </ul>
            </div>
        </div>
    )
}

export default Contactus
