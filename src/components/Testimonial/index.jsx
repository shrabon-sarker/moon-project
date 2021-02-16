import React from 'react'
import SectionTitle from '../SectoinTitle'
import Indicators from '../slider/Bainner/Indicators'
import Tes from '../../assets/images/tes.jpg';
import Cross1 from '../../assets/icon/1.png';
import Cross2 from '../../assets/icon/2.png';
import TestimonialSlide from './testimonialSlide';

function Testimonial() {
    return (
        <>
            <div id="testimonial" className="clients">
                <SectionTitle title="Testimonial" subTitle="" />
            </div>
            <div className="clients_red">
                <div className="container">
                    <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                        
                        <Indicators />
                        
                        <div className="carousel-inner">
                            <TestimonialSlide tesName="johndue" subName="farm & co" tesImg={Tes} Cross1={Cross1} Cross2={Cross2} />

                            
                        </div>
                    </div>
                </div>
            </div>
        </>    
    )
}

export default Testimonial
