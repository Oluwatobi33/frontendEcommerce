import React from 'react'
import { Link } from 'react-router-dom'
import slider1 from '../assest/images/slider1.jpg'
const About = () => {
    return (
        <>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>About Us</h2>
                        <p className='lead mb-4 text-break'>
                            djjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjsjjjdjjdjjjdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                        </p>
                        <Link to='/contact' className='btn btn-outline-primary px-3'>Contact Us</Link>
                    </div>
                    <div className="col-md-6 justify-content-center">
                        <img src={slider1} alt='About us' height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About