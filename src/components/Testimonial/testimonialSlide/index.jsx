import React from 'react'
import Cross1 from '../../../assets/icon/1.png';
import Cross2 from '../../../assets/icon/2.png';
import Tes from '../../../assets/images/tes.jpg';

function TestimonialSlide({tesName, subName, tesImg, Cross1, Cross2}) {
    return (
        <div className="carousel-item active">
            <div className="testomonial_section">
                <div className="full center">
                </div>
                <div className="full testimonial_cont text_align_center cross_layout">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 pa_right">
                            <div className="testomonial_img">
                                <i><img src={tesImg} alt="#"/></i>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 pa_left">
                            <div className="cross_inner">
                                <h3>{tesName}<br/><strong className="ornage_color">{subName}</strong></h3>
                                <p><img src={Cross1} alt="#" />ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                    <img src={Cross2} alt="#" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlide
