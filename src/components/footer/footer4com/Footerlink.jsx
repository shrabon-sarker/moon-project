import React from 'react'
import {Link} from '@reach/router'

import RightArrow from '../../../assets/icon/3.png';

function Footerlink() {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="address">
                <h3>Quick links</h3>
                <ul className="Links_footer">
                    <li><img src={RightArrow} alt="#" /> <Link to="#"> Join Us</Link> </li>
                    <li><img src={RightArrow} alt="#" /> <Link to="#">Maintenance</Link> </li>
                    <li><img src={RightArrow} alt="#" /> <Link to="#">Language Packs</Link> </li>
                    <li><img src={RightArrow} alt="#" /> <Link to="#">LearnPress</Link> </li>
                    <li><img src={RightArrow} alt="#" /> <Link to="#">Release Status</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Footerlink
