import React from 'react'

function ProductItems({productName, productImage}) {
    return (
        <div className="product_box">
            <figure><img src={productImage} alt="#" />
                <h3>{productName}</h3></figure>
        </div>
)
}

export default ProductItems
