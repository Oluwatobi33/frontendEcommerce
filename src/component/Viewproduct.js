import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import { baseurl } from "./Endpoint";
import Navbar from './NavBar'
import Footer from './Footer';
import amazon from '../assest/images/amazon.webp'
import { Link } from 'react-router-dom';
// import slider1 from '../assest/images/slider1.jpg'
const Viewproduct = () => {
    const customer = localStorage.customer;
    const customerId = localStorage.customerId;
    const ViewproductId = localStorage.Viewproduct;
    const productRating = localStorage.rating
    const [ttrue, setttrue] = useState(false)
    const [searchInput, setsearchInput] = useState("")
    const [product, setproduct] = useState([])
    const [accept, setaccept] = useState('')
    const [car, setcar] = useState("")
    // const [setrating, setsetrating] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        if (ViewproductId) {
            axios.post(`${baseurl}Viewproduct`, { ViewproductId }).then((data) => {
                let accept = data.data.message
                if (data) {
                    if (accept == "view product was successful") {
                        setproduct(data.data.result);
                        // setsetrating(productRating)
                    }
                }
            })
        } else {
            navigate("/registration")
        }
    }, []);

    const addtocart = (val) => {
        if (customer) {
            console.log(val);
            if (val) {
                let cart = "Addtocart was sucessful"
                setaccept(cart)
            }
            axios.post(`${baseurl}getaddtocart`, { id: customerId }).then((data) => {
                if (data) {
                    const getcart = data.data.result
                    setcar(getcart.length)
                    if (getcart.length > 0) {
                        setttrue(true)
                    }
                }
                else {
                    localStorage.removeItem('customer')
                    localStorage.removeItem('customerId')
                    navigate("/registration")
                }

            })
        } else {
            navigate("/Registration")
            localStorage.removeItem('customer')
            localStorage.removeItem('customerId')
        }

    }

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
                        <input type="text" className="form-control text-dark" placeholder='Enter the product you want to display' aria-label="Text input with dropdown button" onChange={(e) => setsearchInput(e.target.value)} />
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
                        <span className='text-white'> Hello, sign in</span>
                        <a className="nav-link dropdown-toggle text-uppercase text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Account & Lists
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Account & Lists</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className='nav-item mx-3'>
                        <span className='text-white'>Returns </span>
                        <span className='text-white'>&Orders</span>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to='/addtocart'><i className="fas fa-shopping-cart fs-2 text-white"></i>
                            <span class="position-absolute  translate-middle badge rounded-pill bg-primary">
                                {ttrue && (
                                    <div className="">
                                        {car}
                                    </div>
                                )}
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </Link>
                        {/* <Link to='/addtocart'><a href="#about" className="nav-link text-white"><i className="fas fa-shopping-cart fs-3">
                            {ttrue && (
                                <div className="">
                                    {car}
                                </div>
                            )}
                        </i></a></Link> */}
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
                    <ul className=' end navbar mx-auto mb-lg-0'>
                        <Link to='/registration'><button type="button" className="btn btn-outline-light me-2">Sign-up</button></Link>
                        <button type="button" className="btn btn-warning">Login</button>
                        <li><a href="#" className='text-white mx-3'>Shop great deals now</a></li>
                        <Link to="/contact"><button type="button" className="btn btn-primary">Contact</button></Link>
                        {/* <li><a href="#" className='text-white'>contact</a></li> */}
                    </ul>
                </div>
            </nav>

            <div className="container-fluid" style={{ marginLeft: '45px' }}>
                <p className={accept ? 'alert alert-success' : " "}>{accept}</p>
                <div className="row mt-5">
                    {product.map((item) => (
                        <>
                            <div className=" col-lg-6 col-md-6 d-flex justify-content-center mx-auto product">
                                <img src={item.setFile} className='adjust img-responsive img-fluid' />
                            </div>
                            <div className="col-md-6 col-lg-6 d-flex flex-column justify-content-center">
                                <h5 className='fw-bold text-break'> {item.productname}</h5>
                                <hr className='fw-bold fw-500' />
                                <div className="d-flex px-2" style={{ color: 'rgb(113, 113, 24)' }}>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <span className="text-danger">{productRating}</span>
                                <h2 className='my-4'>#{item.price}</h2>
                                <div className='w-50'>
                                    <p
                                        style={{ color: '#6f6f6f', fontSize: '16px', fontWeight: '400', fontFamily: 'Cairo sans-serif', lineHeight: "29px" }} className='lead'>
                                        {item.description}.
                                    </p>
                                </div>
                                <div className="my-5">
                                    <div className="my-4" style={{ marginBottom: '5px', display: 'inline-block' }}>
                                        {/* <input type="text" value="-" id="sub" style="cursor: pointer; width: 23px;" onclick="cart('-')" />
                                    <input type="text" value="1" id="ch" className="border-0 tt" />
                                    <input type="text" value="+" id="add" style="cursor: pointer; width: 23px;" onclick="cart('+')" /> */}
                                        <button className='btn btn-outline-primary btn-block px-auto' onClick={() => addtocart(item._id)}>ADD TO CART</button>
                                        {/* <a className="primary-btn mt-5 mx-5" href="#" style={{ backgroundColor: '#7fad39', padding: '13px 12px', textDecoration: 'none', color: 'white' }}
                                            >ADD TO CART</a> */}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div >
            <Footer />
        </>
    )
}
export default Viewproduct