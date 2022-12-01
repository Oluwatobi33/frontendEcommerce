import React from 'react'
import woman from "../assest/images/woman.jpg"
const Together = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-5 ms-3">
                        <div className='surround mb-5'>
                            <h2>In this together.<br />
                                Keeping  you securely
                                connected  wherever you are.
                            </h2>
                        </div>
                        <div className='flip text-center mb-4'>
                            <input type="text" className='form-control bg-white ms-5 mb-4 border rounded rounded-3 me-3 shadow shadow-sm' style={{ width: "300px" }} placeholder='Enter your work email' />
                            <a className='sign-up ms-5' href='#' style={{ height: "50px" }}>Sign Up Free</a>
                        </div>
                        <div className='policy ms-5'>
                            <p className='out mx-2' style={{ color: "##5a5a5a" }}>Check out our </p>
                            <a href='/privacy' target="_blank" style={{ color: "#0956B5", textDecoration: "none" }}>Privacy Policy</a>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <img src={woman} className='img-responsive img-fluid border rounded rounded-4 shadow-md woman' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Together