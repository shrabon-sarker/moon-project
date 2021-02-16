import React, { Component } from 'react';

//coutom css linke
import '../../assets/styles/style.css';

//costom components
import Header from '../../components/header'
import Slider from '../../components/slider';
import AboutSection from '../../components/about'
import ProductCounter from '../../components/Product-counter';
import SpecialOffers from '../../components/Special-offers';
import Products from '../../components/products';
import Testimonial from '../../components/Testimonial';
import Contact from '../../components/contact';
import Footer from '../../components/footer';



export class HomePage extends Component {
    render() {
        return (
            <div className='main-layout'>
                {/* loader annimation  */}
                {/* <div className="loader_bg">
                    <div className="loader"><img src="images/loading.gif" alt="#" /></div>
                </div> */}
                {/* header area  */}
                <Header />
                
                {/* slider section  */}
                <Slider />
                {/* About section working */}
                <AboutSection />
                {/* About section working end*/}
                {/* for counter box working start  */}
                <ProductCounter />
                {/* for counter box end  */}
                {/* offer products working start  */}
                <SpecialOffers />
                {/* end offer products  */}
                {/* products items show */}
                <Products />
                {/* End products working */}
                {/* Testimonial  */}
                <Testimonial />
                {/* End Testimonial */}
                {/* contact section start */}
                <Contact />
                {/* end contact  */}
                {/* footer  */}
                <Footer />
            </div>
        )
    }
}

export default HomePage
