import React from 'react'
import SectionTitle from '../SectoinTitle'
import Forms from './Forms'

function Contact() {
    return (
        <div>
            <div id="contact" className="contact">
                    <SectionTitle title="get in" subTitle="toucgh" />
                </div>
                <div className="container-fluid padddd">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 padddd">
                        <div className="map_section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

                                        <Forms />
                                    </div>
                                </div>
                            </div>
                            <div id="map">
                            </div>
                        </div>
                    </div>
                 </div>
        </div>
    )
}

export default Contact
