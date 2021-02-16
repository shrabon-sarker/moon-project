import React from 'react'

function Indicators() {
    return (
        <ul className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className=""></li>
            <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="2" className=""></li>
        </ul>
    )
}

export default Indicators
