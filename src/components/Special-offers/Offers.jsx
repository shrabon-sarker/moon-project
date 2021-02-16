import React from 'react'


function Offers({offerName, offerImage}) {
    return (
        <div className="offer_box">
            <h3>{offerName}</h3>
            <figure><img src={offerImage} alt={offerName} /></figure>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

        </div>
    )
}

export default Offers
