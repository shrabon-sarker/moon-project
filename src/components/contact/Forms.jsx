import React from 'react'

function Forms() {
    return (
        <form className="main_form">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input className="form-control" placeholder="Name" type="text" name="Name" />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input className="form-control" placeholder="Email" type="text" name="Email" />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input className="form-control" placeholder="Phone" type="text" name="Phone" />
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <textarea className="textarea" placeholder="Message" type="text" name="Message"></textarea>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button className="send">Send</button>
                </div>
            </div>
        </form>
    )
}

export default Forms
