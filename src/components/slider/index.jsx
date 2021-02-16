import React from 'react'
import Indicators from './Bainner/Indicators'
import ProvNext from './Bainner/ProvNext'
import Slide from './Bainner/Slide'

function Slider() {
    return (
        <section className="slider_section">
            <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
                {/* indicators  */}
                <Indicators />
                <div className="carousel-inner">
                    <Slide />
                    
                </div>
                <ProvNext />
            </div>
        </section>
    )
}

export default Slider
