import React from 'react'
import SectionTitle from '../SectoinTitle'
import ProductItems from './ProductItems'
import Product1 from '../../assets/images/product_img1.jpg';
import Product2 from '../../assets/images/product_img2.jpg';
import Product3 from '../../assets/images/product_img3.jpg';
import Product4 from '../../assets/images/product_img4.jpg';
import Product5 from '../../assets/images/product_img5.jpg';

function Products() {
    return (
        <div id="product" className="product">
            <SectionTitle title="Moon" subTitle="products" />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <ProductItems productImage={Product1} productName="Fresh Apple" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="product_box">
                                    <ProductItems productImage={Product2} productName="Fresh Aalu" />
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="product_box">
                                    <ProductItems productImage={Product3} productName="Rice Field" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="product_box">
                                    <ProductItems productImage={Product4} productName="Vegetables" />
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="product_box">
                                    <ProductItems productImage={Product5} productName="Field Wheat" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
