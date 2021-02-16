import React from 'react'

function  SectionTitle(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="title">
                        <h2>{props.title} <strong className="black">{props.subTitle}</strong></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle 

