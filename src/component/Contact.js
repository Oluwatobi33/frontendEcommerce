
import React from 'react'
import slider1 from '../assest/images/slider1.jpg'
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { baseurl } from "./Endpoint";
import { useFormik } from "formik";
import axios from "axios";

const Contact = () => {
    const [Error, setError] = useState("");
    const [message, setmessage] = useState("");
    const [loader, setloader] = useState(false);
    const navigate = useNavigate();

    let year = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let DateCreated = `${year}  ${time}`;
    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    const Formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
            tele: "",

        },
        onSubmit: (values) => {
            let errors = {}
            if (values.name == "") {
                errors.name = "This field is required"
            }
            if (values.email == "") {
                errors.email = "This field is required"
            }
            if (values.message == "") {
                errors.message = "This field is required"
            }
            if (values.tele == "") {
                errors.tele = "This field is required"
            }
            setloader(true);
            console.log(values);
            axios.post(`${baseurl}contact`, values).then((credentials) => {
                if (credentials) {
                    let Err = credentials.data.message;
                    console.log(Err);
                    setmessage(Err);

                }
            });
        },

    })
    return (
        <>
            <div className="container33">
                <div className={message ? 'alert alert-success' : ""}>{message}</div>
                <div className="form33">
                    <div className="contact-info">
                        <h3 className='title'>Let's get in touch</h3>
                        <div className="info">
                            <div className="information">
                                <i className='fa-solid fa-map-location-dot icon'></i>
                                <p>Demurin ketu, Lagos State</p>
                            </div>
                            <div className="information">
                                <i className='fa-solid fa-envelope icon'></i>
                                <p>bakareoluwatobi22@gmail.com</p>
                            </div>
                            <div className="information">
                                <i className='fa-solid fa-phone-volume icon'></i>
                                <p>07032437182</p>
                            </div>
                        </div>
                        <div className="social-media">
                            <p>Connect with us</p>
                            <div className="social-icons">
                                <a href="http://"><i className='fa fa-facebook'></i></a>
                                <a href="http://"><i className='fa fa-instagram'></i></a>
                                <a href="http://"><i className='fa fa-twitter'></i></a>
                                <a href="http://"><i className='fa fa-linkedin'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="circle one"></div>
                        <div className="circle two"></div>
                        <form action="" onSubmit={Formik.handleSubmit}>
                            <h3 className="title">Contact Us</h3>
                            <div className="input-container">
                                <input type='text' name='name' placeholder='name' className='input'
                                    onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur} />
                                <div className='text-danger'>{Formik.errors.name}</div>
                            </div>
                            <div className="input-container">
                                <input type='email' name='email' className='input' placeholder='email' onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur} />
                                <div className='text-danger'>{Formik.errors.email}</div>
                            </div>
                            <div className="input-container">
                                <input type='telephone' name='tele' className='input' placeholder='telephone' onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur} />
                                <div className='text-danger'>{Formik.errors.tele}</div>
                            </div>
                            <div className="input-container textarea">
                                <textarea name='message' className='input' placeholder='message' onChange={Formik.handleChange}
                                    onBlur={Formik.handleBlur}></textarea>
                                <div className='text-danger'>{Formik.errors.message}</div>

                            </div>
                            <input type="submit" value="Send" className='btn1' />
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Have Some Question</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src={slider1} alt='contact Us' height='400px' width='400px' />
                    </div>
                    <div className="col-md-6">
                        <div className="form-horizontal">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <input type="text" name="name" className="form-control mt-3 mb-3" id="fname" placeholder="Your Name" />
                                    <div className="error1"></div>
                                </div>
                                <div className="col-md-6 ">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                                    <div className="error22"></div>
                                </div>
                            </div>
                            <div className="row justify-content-center my-2">
                                <div className="col-md-12 text-center">
                                    <input type="text" className="form-control mb-3" name="subject" id="subject" placeholder="Subject" />                        <div className="error33"></div>
                                    <textarea className="form-control" name="area" rows="5" id="area" placeholder="Message"></textarea>
                                    <div className="error44"></div>
                                    <button type="submit" className="btn btn-danger  mt-3" onclick="send()">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Contact
//         <section className="section" style="background-image:url(./image/breadcrumb.jpg); background-size: cover; height: 205px;">
//             <div className="container">
//                 <div className="row justify-content-center pt-5">
//                     <div className="col-md-12 text-center">
//                         <h3 className="text-white" style="font-size: 53px;">Contact</h3>
//                         <a href="index.html" className="text-white text-decoration-none fs-5">Home-----    </a><span className="text-white">Contact us</span>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         <div className="container">
//             <div className="second bg-light shadow-md">
//                 <div className="row my-5" id="contact">
//                     <div className="col-md-3">
//                         <div className="icon ink ">
//                             <i className="bi bi-geo-alt"></i>
//                         </div>
//                         <div className="another mx-5">
//                             <h4>Location:</h4>
//                             <p> ketu,lekki<br></p>
//                         </div>
//                     </div>
//                     <div className="col-md-3">
//                         <div className="icon ink ">
//                             <i className="bi bi-clock"></i>
//                         </div>
//                         <div className="another mx-5">
//                             <h4>Open Hours:</h4>
//                             <p>Monday-Saturday:<br>08:00 AM - 05:00 PM</p>
//                         </div>
//                     </div>
//                     <div className="col-md-3">
//                         <div className="icon ink ">
//                             <i className="bi bi-envelope"></i>
//                         </div>
//                         <div className="another mx-5">
//                             <h4>Email Address:</h4>
//                             <p>bakareoluwatobi22@gmail.com<br></p>
//                         </div>
//                     </div>
//                     <div className="col-md-3">
//                         <div className="icon ink">
//                             <i className="bi bi-phone"></i>
//                         </div>
//                         <div className="another mx-5">
//                             <h4>Call:</h4>
//                             <p>+2347032437182<br>+2349039343220</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="container">
//             <div  className="form-horizontal">
//                 <div className="row justify-content-center">
//                     <div className="col-md-6">
//                         <input type="text" name="name" className="form-control mt-3 mb-3" id="fname" placeholder="Your Name">
//                         <div className="error1"></div>
//                     </div>
//                     <div className="col-md-6 ">
//                         <input type="email" className="form-control" name="email" id="email" placeholder="Your Email">
//                         <div className="error22"></div>
//                     </div>
//                 </div>
//                 <div className="row justify-content-center my-2">
//                     <div className="col-md-12 text-center">
//                         <input type="text" className="form-control mb-3" name="subject" id="subject" placeholder="Subject">
//                         <div className="error33"></div>
//                         <textarea className="form-control" name="area" rows="5" id="area" placeholder="Message"></textarea>
//                         <div className="error44"></div>
//                         <button type="submit" className="btn btn-danger  mt-3" onclick="send()">Send Message</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//