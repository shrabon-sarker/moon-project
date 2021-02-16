import React from 'react'
import Copyright from './Copyright'
import Contactus from './footer4com/Contactus'
import Footerlink from './footer4com/Footerlink'
import FooterLogo from './footer4com/FooterLogo'
import SubcribeEamil from './footer4com/SubcribeEamil'

function Footer() {
    return (
        <footer>
            <div className="footer top_layer ">
                <div className="container">

                    <div className="row">
                        <FooterLogo />
                        <Footerlink />

                        <SubcribeEamil />
                        <Contactus />

                        
                    </div>
                </div>
            </div>
        
            <Copyright />
        </footer>
    )
}

export default Footer
