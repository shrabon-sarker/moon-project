import React from 'react'
import Bainner from '../../../assets/images/banner.jpg'
import {Link} from '@reach/router'

function Slide() {
    return (
        <div className="carousel-item active">
            <img className="first-slide" src={Bainner} alt="First slide" />
            <div className="container">
                <div className="carousel-caption relative">
                    <h1>Moon</h1>
                    <span>FARMING COMPANY</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                    <Link className="buynow" to="#about">About us</Link><Link className="buynow ggg" to="#">Get a quote</Link>
                </div>
            </div>
        </div>
    )
}

export default Slide
