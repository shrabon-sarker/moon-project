import React from 'react'
import AboutImg from './aboutImage/AboutImg'
import AboutContent from './content/AboutContent'

function AboutSection() {
    return (
        <div id="about" class="about">
            <div class="container">
                <div class="row">

                    <AboutContent />
                    <AboutImg />
                </div>
            </div>
        </div>
    )
}

export default AboutSection
