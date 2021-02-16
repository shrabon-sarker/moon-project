import React from 'react'
import Call from '../../../../assets/icon/call1.png';
import Email from '../../../../assets/icon/email1.png';
import Loc from '../../../../assets/icon/loc1.png';

function SubContact() {
    return (
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <div className="location_icon_bottum_tt">
                <ul>
                    <li>
                        <img src={Loc} alt='location' />
                        Location
                    </li>
                    <li>
                        <img src={Email} alt='Eamil address' />
                        demo@gmail.com
                    </li>
                    
                    <li>
                        <img src={Call} alt='phone number' />
                        (+71)9876543109
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SubContact
