import React from 'react'
import {Link} from '@reach/router'

function MenuItems() {
    return (
        <div className="col-md-8 ">
            <div className="menu-area">
                <div className="limit-box">
                    <nav className="main-menu">
                        <ul className="menu-area-main">
                            <li className="active"> <Link to="index.html">Home</Link> </li>
                            <li> <Link to="#about">About</Link> </li>
                            <li><Link to="#product">Products</Link></li>
                            <li><Link to="#testimonial">Testimonial</Link></li>
                            <li><Link to="#contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default MenuItems
