import React from 'react'
import signimage from "../assest/images/signimage.png"
import { FaApple } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FaKey } from 'react-icons/fa'
import { useRef } from 'react'
import NavbarFirst from './NavbarFirst'
const Signin = () => {
    const toggle = useRef()
    const i = useRef()
    const password = useRef()
    const showHide = () => {
        if (password.current.type == "password") {
            password.current.setAttribute("type", "text");
            toggle.current.classList.add("hide")
            i.current.class = "fa fa-eye-slash";
        } else {
            password.current.setAttribute('type', "password");
            i.current.classList = "fa fa-eye";
            toggle.current.classList.remove('hide');
        }
    };
    return (
        <>
            <NavbarFirst />
            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-7 '>
                        <div className='under'>
                            <img src={signimage} className='img-responsive img-fluid change' alt='size' />
                        </div>
                    </div>
                    <div className="col-md-3 mt-5">
                        <div className='resize'>
                            <h2 className='fw-bold text-center in mb-4'>Sign In</h2>
                            <form action="">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control " style={{ borderRadius: "9px" }} id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" ref={password} style={{ borderRadius: "9px" }} id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                    <span id='toggle' href={toggle} onClick={showHide} className='translated float-end me-4'>
                                        <i href={1} className="fa fa-eye text-dark face" arial-hidden="true"></i>
                                    </span>
                                </div>
                                <span className='mt-3' style={{ color: "#0956b5" }}> Forgot password? </span>
                                <div className="d-grid mt-3">
                                    <button type='submit' className="btn btn-primary"> Sign In</button>
                                </div>
                                <p className='by mt-2'>By signing in, I agree to the <a href='https://explore.zoom.us/en/privacy/' target="_blank">Zoom's Privacy Statement</a> and<a href='https://explore.zoom.us/en/terms/'>Terms of Service.</a></p>
                                <span> Stay signed in <i className='zm-icon-info-outline'></i></span>
                            </form>
                            <small className='mb-3 text-center'><span className='first'>Or sign in  with</span></small>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-12 icon mt-5">
                                        <div className='col-sm-3'>
                                            <h3 className='wrap'><FaKey style={{ fontSize: "29px", textAlign: "center" }} /></h3>
                                            <span>SSO</span>
                                        </div>
                                        <div className='col-sm-3'>
                                            <h3 className='wrap'><FaApple className='wrap' style={{ fontSize: "29px", textAlign: "center" }} /></h3>
                                            <span className=''>Apple</span>
                                        </div>
                                        <div className='col-sm-3'>
                                            <h3 className='wrap' >< FcGoogle className='wrap' style={{ fontSize: "29px", textAlign: "center" }} /></h3>
                                            <span>Google</span>
                                        </div>
                                        <div className='col-sm-3 '>
                                            <h3 className='wrap'>< FaFacebook className='wrap' style={{ fontSize: "29px", textAlign: "center" }} /></h3>
                                            <span>Facebook</span>
                                        </div>
                                    </div>
                                    <p className='zoom mt-5'>Zoom is protected by reCAPTCHA and the<a href='https://policies.google.com/privacy'>Privacy Policy</a> and <a href='https://policies.google.com/terms'>Terms of Service apply.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin