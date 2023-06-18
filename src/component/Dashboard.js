import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import { baseurl } from "./Endpoint";
import Navbar from './NavBar'
import Footer from './Footer';
import Home from './Home';
import ReactStars from "react-rating-stars-component"
import amazon from '../assest/images/amazon.webp'
import { Link } from 'react-router-dom';
const Dashboard = () => {
    const [productname, setproductname] = useState("")
    const [price, setprice] = useState("")
    const [des, setdes] = useState("")
    const [image, setimage] = useState("")
    const navigate = useNavigate();
    const [customers, setcustomers] = useState([])
    const [files, setfiles] = useState([])
    const [cart, setcart] = useState([])
    const [dash, setdash] = useState([])
    const [car, setcar] = useState("")
    const [ttrue, setttrue] = useState(false)
    const [searchInput, setsearchInput] = useState("")
    const [top, settop] = useState("")
    const [show, setshow] = useState(false)
    const [rating, setrating] = useState("")
    const customer = localStorage.customer;
    const customerId = localStorage.customerId;
    useEffect(() => {
        if (customer) {
            axios.get(`${baseurl}displaygood`,).then(res => {
                console.log(res.data.result);
                setdash(res.data.result)
            }).catch(err => {
                console.log(err);
            })
        } else {
            navigate('/registration')
        }

        // axios.post(`${baseurl}getaddtocart`, { id: customerId }).then((data) => {
        //     if (data) {
        //         setaddtocart(data.data.result)
        //     }
        // })

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

    }, [])

    const handleSearch = () => {
        const searchProduct = dash.filter((val) =>
            val.productname.includes(searchInput)
        );
        console.log(searchProduct);
        // setfilteredProducts(filteredProduct)
        settop(searchProduct.map((val, index) => {
            return (val.file)
        }));
        setshow(true)
    }

    const viewproduct = (val) => {
        if (customer) {
            axios.get(`${baseurl}dashboard`,
                {
                    headers: {
                        "Authorization": `Bearer ${customer}`,
                        "Content-type": "application/json",
                        "Accept": "application/json"
                    }
                }).then((data) => {
                    if (data) {
                        console.log(data);
                        let Err = data.data.message;
                        console.log(Err);
                        if (Err == "Valid Token") {
                            setcustomers(data.data.result[0]);
                            localStorage.customerId = data.data.result[0]._id
                            console.log(localStorage.customerId);
                            axios.post(`${baseurl}addtocart`, { val, customerId })
                            localStorage.Viewproduct = val
                            navigate("/viewproduct")
                        } else {
                            localStorage.removeItem('customer')
                            localStorage.removeItem('customerId')
                            navigate("/Registration")
                        }
                    }
                })
        } else {
            navigate("/registration")
        }
    }


    // const viewproduct = (val) => {
    //     if (val) {
    //         localStorage.Viewproduct = val
    //         navigate("/viewproduct")
    //     }
    // }

    const ratingChanged = (rating) => {
        let recrating = `you have given ${rating} star rating for us`
        setrating(rating)
        localStorage.rating = recrating
        alert(recrating)

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
                    <div className="input-group mb-3 me-3 py-3">
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
                        <input type="text" className="form-control form-control-md text-dark" placeholder='Enter the product you want to display' aria-label="Text input with dropdown button" onChange={(e) => setsearchInput(e.target.value)} />
                        <button type="submit" className='back'><i className="fa fa-search fs-4 " onClick={handleSearch}></i></button>
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
                    <li class=" position-relative me-5">
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
                    </li>
                    {/* <li className="nav-item mx-2">
                        <Link to='/addtocart'><a href="#about" className="nav-link text-white"><i className="fas fa-shopping-cart fs-2"> <span class="badge text-bg-secondary">
                            {ttrue && (
                                <div className="">
                                    {car}
                                </div>
                            )}
                        </span>
                        </i></a></Link>
                    </li> */}
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

            {/* // Navbar End */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Product</h1>
                        <hr style={{ backgroundColor: "black" }} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {dash.map((item, index) => (
                        <div className="col-md-4 d-flex flex-column justify-content-center ">
                            <div className="card my-5 py-4" key={item._id
                            } style={{ width: '18rem' }}>
                                <img src={item.setFile} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productname}</h5>
                                    <h3 className="card-text">Price: {item.price}</h3>
                                    <ReactStars
                                        activeColor="yellow" size={50} count={5} isHalf={true} onChange={ratingChanged} />
                                    <h5>Description: {item.description}</h5>
                                    <a href="#" className="btn btn-outline-primary" onClick={() => viewproduct(item._id)}>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {dash.map((item, index) => (
                            < div className="tobi" >
                                <div className="card" style={{ width: "19rem" }}>
                                    <img src={item.setFile} className='img-fluid img-responsive w-100 card-img-top' />
                                    <h3>{item.productname}</h3>
                                    <h1 className='price'>Price: {item.price}</h1>
                                    <h2>Description: {item.description}</h2>
                                    <button type="button" className="btn btn-secondary" onClick={() => viewproduct(item._id)} title="view product">
                                        <i className="fa fa-eye"></i>
                                    </button>
                                    <p className='para'><button className="btn btn-secondary" onClick={() => addtocart(item._id)}>Add to cart <i className="fa fa-shopping-cart"></i></button></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* <div className="container-fluid mt-5 pt-4 mb-4 p-0 m-0"> */}
            {/* <div id="carouselExampleDark" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></button>
                        <button data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="1000">
                            <img src={house3} className="w-100 h-50" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={house4} className="w-100 h-50" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={house5} className="w-100 h-50" alt="..." />
                        </div>
                    </div>
                </div> */}
            {/* <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" id='clicked'></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <div className="imggi">
                                <img src={house3} className="w-100" alt="..." />
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="imggi">
                                <img src={house4} className="w-100" alt="..." />
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="imggi">
                                <img src={house5} className="w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <section className="feature-categories">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={go2} />
                                </div>
                                <div className="col-md-4">
                                    <img src={go4} />
                                </div>
                                <div className="col-md-4">
                                    <img src={SouthKorea} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className=" onsale">
                    <section className="on-sale">
                        <div className="container">
                            <div className="title-box">
                                <h2>On Sale</h2>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={go4} className="h-100" />
                                            <div className="overlay-right">
                                                <button type="button" className="btn btn-secondary" title="view product">
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                                <button type="button" onClick={addtocart} className="btn btn-secondary" title="Add to Cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="product-botttom text-center">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half"></i>
                                        <h3>Female Dress</h3>
                                        <h5>$40.00</h5>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={go5} />
                                            <div className="overlay-right">
                                                <button type="button" className="btn btn-secondary" title="view product">
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                                <button type="button" onClick={addtocart} className="btn btn-secondary" title="Add to Cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-botttom text-center">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <h3>Men Dress</h3>
                                        <h5>$70.00</h5>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={sidebarbanner} />
                                            <div className="overlay-right">
                                                <button type="button" className="btn btn-secondary" title="view product">
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                                <button type="button" onClick={addtocart} className="btn btn-secondary" title="Add to Cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-botttom text-center">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <h3>Women Dress</h3>
                                        <h5>$60.00</h5>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-top">
                                        <div className="imgBx">
                                            <img src={shopbanner2} />
                                            <div className="overlay-right">
                                                <button type="button" className="btn btn-secondary" title="view product">
                                                    <i className="fa fa-eye"></i>
                                                </button>
                                                <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                    <i className="fa fa-heart"></i>
                                                </button>
                                                <button type="button" onClick={addtocart} className="btn btn-secondary" title="Add to Cart">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-botttom text-center">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half"></i>
                                        <h3>Women Black Jins Shirt</h3>
                                        <h5>$50.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="new-product">
                    <section className="new-product">
                        <div className="container">
                            <div className="title-box">
                                <h2>New Arrivals</h2>
                            </div>
                            <div className="row">
                                {files.map((item, index) => (
                                    <div className="col-md-3">
                                        <div className="product-top">
                                            <div className="imgBx">
                                                <img src={item.file} className="h-100" />
                                                <div className="overlay-right">
                                                    <button type="button" className="btn btn-secondary" onClick={() => viewproduct(item._id)} title="view product">
                                                        <i className="fa fa-eye"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-secondary" title="Add to wish list">
                                                        <i className="fa fa-heart"></i>
                                                    </button>
                                                    <button type="button" onClick={() => addtocart(item._id)} className="btn btn-secondary" title="Add to Cart">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product-botttom text-center">
                                                <h3>{item.product}</h3>
                                                <h5>{item.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
                <div className="website-feature">
                    <section className="website-feature">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 feature-box">
                                    <div className="imgBx">
                                        <img src={footballboots} />
                                        <div className="feature-text">
                                            <p><b>100% Original items </b>are available at our company.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 feature-box">
                                    <div className="imgBx">
                                        <img src={footballboots} />
                                        <div className="feature-text">
                                            <p><b>Return within 30 days </b>of recieving your order.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 feature-box">
                                    <div className="imgBx">
                                        <img src={footballboots} />
                                        <div className="feature-text">
                                            <p><b>Get free delivery, on every </b>order your make.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 feature-box">
                                    <div className="imgBx">
                                        <img src={footballboots} />
                                        <div className="feature-text">
                                            <p><b>Pay Online through multiple </b>options (card/Net banking)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            {/* </div> */}
            <Footer />
        </>
    )
}

export default Dashboard