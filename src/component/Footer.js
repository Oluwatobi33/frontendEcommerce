import React from 'react'
import logo from "../assest/images/logo.png"
import amazon from "../assest/images/amazon.webp"
import Slider from "../assest/images/Slider.png"
import blog2 from "../assest/images/online.jpg"
import blog3 from "../assest/images/card.jpg"
import big_banner from "../assest/images/big_banner.jpg"
import item from "../assest/images/payment-item.png"
const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <img src={big_banner} alt='big' className='img-fluid img-responsive w-100' />
                </div>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h3 className="h2 text-uppercase">From The Blog</h3>
                    </div>
                    <span style={{ borderBottom: '6px solid#7fad39', width: '74px', marginBottom: '23px' }}></span>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card border border-0" style={{ width: '22rem' }}>
                            <img src={Slider} className="card-img-top" alt="..." />
                            <div className="card-body border  border-0">
                                <ul className="ope">
                                    <li><i className="fa fa-calendar"></i></li>
                                    <li>May 4,2019 <i className="fa fa-comment-o"></i> <span>5</span></li>
                                </ul>
                                <h5 className="card-title">Welcome to the Oraimo Official Store on amazon Nigeria - Your Online Store for Authentic and Affordable Accessories</h5>
                                <p className="card-text">Are you in search of high-quality mobile accessories at prices that are very affordable? The Oraimo official store on the Jumia Platform is the perfect destination for you. The store has a wide range of products like wireless earphones, chargers, bluetooth speakers, Oraimo cord, powerbank and more. Enjoy the originality and affordability of the Oraimo official store today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border  border-0" style={{ width: '22rem' }}>
                            <img src={blog2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <ul className="ope">
                                    <li><i className="fa fa-calendar"></i></li>
                                    <li> May 4,2019 <i className="fa fa-comment-o"></i> <span>5</span></li>
                                </ul>
                                <h5 className="card-title">What Do You Mean By Flash Sale?</h5>
                                <p className="card-text"> A flash sale is a discount or promotion offered by amazon for a few hours. The opportunity only comes once since the products change according to seasonality. Be the first to discover our promotional catalog and make real savings on the latest products.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card border  border-0" style={{ width: '22rem' }}>
                            <img src={blog3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <ul className="ope">
                                    <li><i className="fa fa-calendar-o"></i></li>
                                    <li> May 4,2019 <i className="fa fa-comment"></i> <span>5</span></li>
                                </ul>
                                <h5 className="card-title">Get Best Deals During amazon Anniversary 2023</h5>
                                <p className="card-text">Shop during Jumia 11th anniversary and don’t worry about the prices because we offer discount coupons, flash sale, voucher codes, and amazing offers daily on different categories. You can also buy high-quality TV at the lowest prices without having to move from home. If you want to buy mens clothing, womens clothing, or even kids clothing, Jumia offers the most popular brands and the best fashion deals online, in addition to cosmetics and personal care products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 mt-2">
                            <img src={amazon} alt="logo" className="img-reponsive ms-4 img-fluid w-50" />
                            <ul className="text-white " style={{ listStyleType: "none" }}>
                                <li className="py-2 text-dark">Address: 60-49<br /> Road 11378 New York</li>
                                <li className="py-3 text-dark">Phone: +65 11.188.888</li>
                                <li className="text-dark">Email: hello@colorlib.com</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-4">
                            <h4 className="ms-4">Useful Links</h4>
                            <ul style={{ listStyleType: "none" }}>
                                <li>About Us</li>
                                <li>About Our Shop</li>
                                <li>Secure Shopping</li>
                                <li>Delivery infomation</li>
                                <li>Privacy Policy</li>
                                <li>Our Sitemap</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <ul style={{ listStyleType: "none" }}>
                                <li>Who We Are</li>
                                <li>Our Services</li>
                                <li>Projects</li>
                                <li>Contact</li>
                                <li>Innovation</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <h3>Join Our Newsletter Now</h3>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <div className="wrapper">
                                <input type="text" style={{ backgroundColor: 'white', border: '1px solid gainsboro', padding: '19px 20px', }} className="me-3 "
                                    placeholder="Enter the email" />
                                <a className="text-white mt-3" href="#"
                                    style={{ backgroundColor: 'rgb(0, 119, 255)', padding: '19px 50px', width: "200px", height: "50px", textDecoration: 'none', fontSize: "15px" }}>Subcribe</a>
                            </div>
                            <ul style={{ listStyleType: "none" }} className="media">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <p>Copyright ©2022 All rights reserved | This template is made with <i className="fa fa-heart"></i> by
                                <a href="#" className="text-decoration-none">Colorlib</a>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={item} className="img-reponsive img-fluid" />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Footer