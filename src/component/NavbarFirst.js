import React from 'react'
// import Slider from './Slider'
import nazoom from "../assest/images/nazoom.png"
import { Link } from 'react-router-dom'

const NavbarFirst = () => {
    return (
        <>
            <div className='container-fluid  align-items-center py-2' style={{ backgroundColor: "#39394D" }}>
                <div className="row justify-content-end">
                    <div className='col-md-4 text-end'>
                        <div className='top'>
                            <a href="#"> Request a Demo</a>
                            <a href="#"> 1.888.799.9666</a>
                            <a href="#">Support</a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg  okay">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={nazoom} className='img-responsive img-fluid ms-5' style={{ width: "100px" }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav white">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    solution
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Plans  Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Sales</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Resources
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className=' navbar-nav ms-auto left'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">JOIN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOST</a>
                            </li>

                            <li className="nav-item">
                                <Link to="/signin">
                                    <a className="nav-link">SIGN IN</a>
                                </Link>
                            </li>

                            <li className="nav-item free">
                                <span><a className=" text-white" href="#"> SIGN UP, IT'S FREE</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <Slider /> */}

        </>
    )
}

export default NavbarFirst