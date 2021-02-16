import React from 'react'
import {Link} from '@reach/router'
import SectionTitle from '../SectoinTitle'
import Offers from './Offers'
import Offer1 from '../../assets/images/offer1.png'
import Offer2 from '../../assets/images/offer2.png'
import Offer3 from '../../assets/images/offer3.png'

function SpecialOffers(props) {
    return (
        <div className="offer">
            {/* title  */}
            <SectionTitle title="Special" subTitle="Offers" />
            <div className="offer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
                            <Offers offerImage={Offer1} offerName="Agriculture Products" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin_ttt">
                            <Offers offerImage={Offer2} offerName="Fresh Vegatables" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin-lkk">
                            <Offers offerImage={Offer3} offerName="Farm Factory" />
                        </div>

                        <div className="col-md-12">
                            <Link to="#" className="read-more">See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffers
