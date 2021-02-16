import React from 'react'
import CounterItems from './CounterItems'


function ProductCounter() {
    return (
        <div className="for_box_bg">
            <div className="container">
                <div className="row">
                    <CounterItems />
                    <CounterItems />
                    <CounterItems />
                    <CounterItems />
                    
                </div>
            </div>
        </div>
    )
}

export default ProductCounter
