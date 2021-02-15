import React, { Component } from 'react';
import Call from '../../assets/icon/call1.png';
import Email from '../../assets/icon/email1.png';
import Loc from '../../assets/icon/loc1.png';
import About from '../../assets/images/about.png';
import Bainner from '../../assets/images/banner.jpg';
import Logo from '../../assets/images/logo.png';
import SearchIcon from '../../assets/images/search_icon.png';
import One from '../../assets/images/1.png';
import Tow from '../../assets/images/2.png';
import Three from '../../assets/images/3.png';
import Four from '../../assets/images/4.png';
import Offer1 from '../../assets/images/offer1.png';
import Offer2 from '../../assets/images/offer2.png';
import Offer3 from '../../assets/images/offer3.png';
import Product1 from '../../assets/images/product_img1.jpg';
import Product3 from '../../assets/images/product_img3.jpg';
import Product2 from '../../assets/images/product_img2.jpg';
import Product4 from '../../assets/images/product_img4.jpg';
import Product5 from '../../assets/images/product_img5.jpg';
import Tes from '../../assets/images/tes.jpg';
import Cross1  from '../../assets/icon/1.png';
import Cross2  from '../../assets/icon/2.png';
import RightArrow from '../../assets/icon/3.png'

//coutom css linke
import '../../assets/styles/style.css';



export class HomePage extends Component {
    render() {
        return (
            <div className='main-layout'>
                {/* loader annimation  */}
                {/* <div className="loader_bg">
                    <div className="loader"><img src="images/loading.gif" alt="#" /></div>
                </div> */}
                {/* header area  */}
                <header>
                    {/* header inner */}
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col logo_section">
                                    <div className="full">
                                        <div className="center-desk">
                                            <div className="logo">
                                                <a href="index.html"><img src={Logo} alt="#" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                    <div className="location_icon_bottum_tt">
                                        <ul>
                                            <li>
                                                <img src={Loc} alt='location' />
                                                Location
                                            </li>
                                            <li>
                                                <img src={Email} alt='Eamil address' />
                                                demo@gmail.com
                                            </li>

                                            <li>
                                                <img src={Call} alt='phone number' />
                                                (+71)9876543109
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 location_icon_bottum">
                                <div className="row">
                                        <div className="col-md-8 ">
                                            <div className="menu-area">
                                                <div className="limit-box">
                                                    <nav className="main-menu">
                                                        <ul className="menu-area-main">
                                                            <li className="active"> <a href="index.html">Home</a> </li>
                                                            <li> <a href="#about">About</a> </li>
                                                            <li><a href="#product">Products</a></li>
                                                            <li><a href="#testimonial">Testimonial</a></li>
                                                            <li><a href="#contact">Contact Us</a></li>

                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                            <form className="search">
                                                <input className="form-control" type="text" placeholder="Search" />
                                                <button><img src={SearchIcon} alt='search icons' /></button>
                                            </form>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* slider section  */}
                <section className="slider_section">
                    <div id="myCarousel" class="carousel slide banner-main" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class=""></li>
                            <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="2" class=""></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="first-slide" src={Bainner} alt="First slide" />
                                <div className="container">
                                    <div className="carousel-caption relative">
                                        <h1>Moon</h1>
                                        <span>FARMING COMPANY</span>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                        <a className="buynow" href="#about">About us</a><a className="buynow ggg" href="#">Get a quote</a>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="second-slide" src={Bainner} alt="Second slide" />
                                <div className="container">
                                    <div className="carousel-caption relative">
                                        <h1>Moon</h1>
                                        <span>FARMING COMPANY</span>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                        <a className="buynow" href="#about">About us</a><a className="buynow ggg" href="#">Get a quote</a>

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="third-slide" src={Bainner} alt="Third slide" />
                                <div className="container">
                                    <div className="carousel-caption relative">
                                        <h1>Moon</h1>
                                        <span>FARMING COMPANY</span>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                        <a className="buynow" href="#about">About us</a><a className="buynow ggg" href="#">Get a quote</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <i className='fa fa-angle-left'></i>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <i className='fa fa-angle-right'></i>
                        </a>
                    </div>
                </section>
                {/* About section working */}
                <div id="about" class="about">
                    <div class="container">
                        <div class="row">

                            <div class="col-xl-5 col-lg-5 col-md-5 co-sm-l2">
                                <div class="about_box">
                                    <h2>About moon<br /><strong className="black"> Farm and company</strong></h2>
                                    <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-7 co-sm-l2">
                                <div class="about_img">
                                    <figure><img src={About} alt="img" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About section working end*/}
                {/* for counter box working start  */}
                <div className="for_box_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
                                <div className="for_box">
                                    <i><img src={One} alt="#"/></i>
                                    <span>1996923</span>
                                    <h3>Harvesta</h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
                                <div className="for_box">
                                    <i><img src={Tow} alt="#"/></i>
                                    <span>8000</span>
                                    <h3>Units of Cattle</h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
                                <div className="for_box">
                                    <i><img src={Three} alt="#"/></i>
                                    <span>60002</span>
                                    <h3>Farm</h3>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 co-sm-l2">
                                <div className="for_box">
                                    <i><img src={Four} alt="#"/></i>
                                    <span>1623</span>
                                    <h3>Units of Technic</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* for counter box end  */}
                {/* offer products working start  */}
                <div className="offer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h2>Special <strong class="black"> Offers</strong></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
                                    <div className="offer_box">
                                        <h3>Agriculture Products</h3>
                                        <figure><img src={Offer1} alt="img" /></figure>
                                        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin_ttt">
                                    <div className="offer_box">
                                        <h3>Fresh Vegatables</h3>
                                        <figure><img src={Offer2} alt="img" /></figure>
                                        <p>consectetur adipiscing elit, sed do eiusmodmpor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin-lkk">
                                    <div className="offer_box">
                                        <h3>Farm Factory</h3>
                                        <figure><img src={Offer3} alt="img" /></figure>
                                        <p>consectetur adipiscing elit, sed do eiusmodmpor incididunt ut labore et dolore magna</p>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <a className="read-more">See More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* end offer products  */}
                {/* products items show */}
                <div id="product" className="product">
                    <div className="container">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title">
                                        <h2>Moon <strong className="black"> products</strong></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="product_box">
                                            <figure><img src={Product1} alt="#" />
                                                <h3>Fresh Apple </h3></figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="product_box">
                                            <figure><img src={Product2} alt="#" />
                                                <h3>Fresh Aalu  </h3>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="product_box">
                                            <figure><img src={Product3} alt="#" />
                                                <h3>Rice Field </h3></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="product_box">
                                            <figure><img src={Product4} alt="#" />
                                                <h3>Vegetables</h3></figure>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="product_box">
                                            <figure><img src={Product5} alt="#" />
                                                <h3>Field Wheat </h3></figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End products working */}
                {/* Testimonial  */}
                <div id="testimonial" className="clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h2>testimonial</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clients_red">
                    <div className="container">
                        <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                            
                            <ul className="carousel-indicators">
                                <li data-target="#testimonial_slider" data-slide-to="0" class=""></li>
                                <li data-target="#testimonial_slider" data-slide-to="1" class="active"></li>
                                <li data-target="#testimonial_slider" data-slide-to="2" class=""></li>
                            </ul>
                            
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <div className="testomonial_section">

                                        <div className="full testimonial_cont text_align_center cross_layout">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 pa_right">
                                                    <div className="testomonial_img">
                                                        <i><img src={Tes} alt="#"/></i>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 pa_left">
                                                    <div className="cross_inner">
                                                        <h3>Johndue<br/><strong className="ornage_color">Farm & CO</strong></h3>
                                                        <p><img src={Cross1} alt="#" />ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                            <img src={Cross2} alt="#" />
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item active">

                                    <div className="testomonial_section">
                                        <div className="full center">
                                        </div>
                                        <div className="full testimonial_cont text_align_center cross_layout">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 pa_right">
                                                    <div className="testomonial_img">
                                                        <i><img src={Tes} alt="#"/></i>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 pa_left">
                                                    <div className="cross_inner">
                                                        <h3>Johndue<br/><strong className="ornage_color">Farm & CO</strong></h3>
                                                        <p><img src="icon/1.png" alt="#" />ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                            <img src="icon/2.png" alt="#" />
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="carousel-item">

                                    <div className="testomonial_section">
                                        <div className="full center">
                                        </div>
                                        <div className="full testimonial_cont text_align_center cross_layout">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 pa_right">
                                                    <div className="testomonial_img">
                                                        <i><img src={Tes} alt="#"/></i>
                                                    </div>
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 pa_left">
                                                    <div className="cross_inner">
                                                        <h3>Johndue<br/><strong className="ornage_color">Farm & CO</strong></h3>
                                                        <p><img src="icon/1.png" alt="#" />ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                            <img src="icon/2.png" alt="#" />
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {/* End Testimonial */}
                {/* contact section start */}
                <div id="contact" className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h2>Get In <strong className="black"> Toucgh</strong></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid padddd">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 padddd">
                        <div className="map_section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">

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
                                    </div>
                                </div>
                            </div>
                            <div id="map">
                            </div>
                        </div>
                    </div>
                 </div>
                {/* end contact  */}
                {/* footer  */}
                <footer>
                    <div className="footer top_layer ">
                        <div className="container">

                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <div className="address">
                                        <a href="index.html"> <img src={Logo} alt="logo" /></a>
                                        <p>dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et sdolor sit amet, consectetur adipiscing elit, </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <div className="address">
                                        <h3>Quick links</h3>
                                        <ul className="Links_footer">
                                            <li><img src={RightArrow} alt="#" /> <a href="#"> Join Us</a> </li>
                                            <li><img src={RightArrow} alt="#" /> <a href="#">Maintenance</a> </li>
                                            <li><img src={RightArrow} alt="#" /> <a href="#">Language Packs</a> </li>
                                            <li><img src={RightArrow} alt="#" /> <a href="#">LearnPress</a> </li>
                                            <li><img src={RightArrow} alt="#" /> <a href="#">Release Status</a> </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <div className="address">
                                        <h3>Subcribe email</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                        <input className="form-control" placeholder="Your Email" type="type" name="Your Email" />
                                        <button className="submit-btn">Submit</button>
                                    </div>
                                </div>

                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <div className="address">
                                        <h3>Contact Us</h3>

                                        <ul className="loca">
                                            <li>
                                                <a href="#"><img src={Loc} alt="#" /></a>London 145
                                                <br />United Kingdom </li>
                                            <li>
                                                <a href="#"><img src={Email} alt="#" /></a>demo@gmail.com </li>
                                            <li>
                                                <a href="#"><img src={Call} alt="#" /></a>+12586954775 </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="copyright">
                        <div className="container">
                            <p>© 2019 All Rights Reserved. Design By<a href="https://html.design/"> Free Html Templates</a></p>
                    
                    </div>
                    </div>
                </footer>

                

            </div>
        )
    }
}

export default HomePage
