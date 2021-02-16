import React from 'react'
import {Link} from '@reach/router'

function AboutContent() {
    return (
        <div class="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
            <div class="about_box">
                <h2>About moon<br /><strong className="black"> Farm and company</strong></h2>
                <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                <Link to="#">Read More</Link>
            </div>
        </div>
    )
}

export default AboutContent
