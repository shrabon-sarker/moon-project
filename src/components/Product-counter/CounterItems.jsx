import React from 'react'
import One from '../../assets/images/1.png'

function CounterItems() {
    return (
        <div className="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
            <div className="for_box">
                <i><img src={One} alt="#"/></i>
                <span>1996923</span>
                <h3>Harvesta</h3>
            </div>
        </div>
    )
}

export default CounterItems
