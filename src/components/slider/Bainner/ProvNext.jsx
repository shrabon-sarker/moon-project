import React from 'react'
import {Link} from '@reach/router'

function ProvNext() {
    return (
        <>
           <Link className="carousel-control-prev" to="#myCarousel" role="button" data-slide="prev">
                <i className='fa fa-angle-left'></i>
            </Link>
            <Link className="carousel-control-next" to="#myCarousel" role="button" data-slide="next">
                <i className='fa fa-angle-right'></i>
            </Link> 
        </>
    )
}

export default ProvNext
