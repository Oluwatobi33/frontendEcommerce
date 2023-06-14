import React from 'react'
import amazon from '../assest/images/amazon.webp'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  col-lg-12" style={{ backgroundColor: "#131921" }}>
                <a href="#" className="navbar-brand px-5 text-white"><img src={amazon} width="50" height="20" className="img-responsive img-fluid" /></a>
                <div className='me-4'>
                    <span className='' style={{ color: "#ccc", fontSize: "16px" }}>
                        Deliver to
                    </span>
                    <span className='text-white'>
                        Nigeria
                    </span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white text-white"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-" id="navbarSupportedContent">
                    <div className="input-group mb-3 me-3">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">All Departments</a></li>
                            <li><a className="dropdown-item" href="#">Arts & Crafts</a></li>
                            <li><a className="dropdown-item" href="#">Automotive</a></li>
                            <li><a className="dropdown-item" href="#">Beauty & Personal Care</a></li>
                            <li><a className="dropdown-item" href="#">Books</a></li>
                            <li><a className="dropdown-item" href="#">Boys' Fashion</a></li>
                            <li><a className="dropdown-item" href="#">Computers</a></li>
                            <li><a className="dropdown-item" href="#">Electronics</a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"><i className="fa fa-search"></i></a></li>
                        </ul>
                        <input type="text" className="form-control text-dark" placeholder='Enter the product you want to display' aria-label="Text input with dropdown button" />
                        <button type="submit" className='back'><i className="fa fa-search fs-4"></i></button>
                    </div>
                    <li className="nav-item dropdown mx-2">
                        <a className="nav-link dropdown-toggle text-uppercase text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            EN
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown mx-3">
                        <span className='text-white'> Hello, sign in/signup</span>
                        <a className="nav-link dropdown-toggle text-uppercase text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Account & Lists
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#"> <Link to='/registration'>Sign-up</Link></a></li>
                            <li><a className="dropdown-item" href="#"><Link to="/contact">Contact</Link></a></li>
                        </ul>
                    </li>
                    <li className='nav-item mx-3'>
                        <span className='text-white'>Returns </span>
                        <span className='text-white'>&Orders</span>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to='/addcart'><a href="#about" className="nav-link text-white"><i className="fas fa-shopping-cart fs-3"></i></a></Link>
                    </li>
                </div>
            </nav>
            <nav className="navbar navbar-expand-md bg-dark whole">
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 today ps-5">
                        <li><a href="#" className='text-white'>Today's Deals</a></li>
                        <li><a href="#" className='text-white'>Customer Service</a></li>
                        <li><a href="#" className='text-white'>Gift Cards</a></li>
                        <li><a href="#" className='text-white'>Registry</a></li>
                        <li><a href="#" className='text-white'>Sell</a></li>
                    </ul>
                    <ul className=' navbar mx-auto mb-lg-0'>
                        <a className="nav-link dropdown-toggle text-uppercase text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            create account
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#"> <Link to='/registration'>Sign-up</Link></a></li>
                            <li><a className="dropdown-item text-dark" href="#"><Link to="/contact">Contact</Link></a></li>
                            <li><a className="dropdown-item" href="#">Login</a></li>
                        </ul>
                    </ul>
                </div>
            </nav>

        </>
    )
}
export default NavBar