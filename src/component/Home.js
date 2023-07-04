import React from 'react'
import NavBar from './NavBar'
import Product from './Product'
import axios from 'axios'
import { baseurl } from '../component/Endpoint'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Slide } from 'react-slideshow-image';
import Footer from './Footer'
import 'react-slideshow-image/dist/styles.css'
import product1 from "../assest/images/product1.jpg"
import product2 from "../assest/images/product2.jpg"
import product3 from "../assest/images/product3.jpg"
import product4 from "../assest/images/product4.jpg"
import samsung from "../assest/images/Samsung-Galaxy.jpg"
import product7 from "../assest/images/product7.jpg"
import product8 from "../assest/images/product8.jpg"
import product5 from "../assest/images/product5.jpg"

// import Rating from 'react-simple-star-rating'
const customer = localStorage.customer;
const Home = () => {
    // let token = localStorage.token
    // const [rating, setRating] = useState(0)
    // const [success, setsuccess] = useState("")
    // const [sign, setsign] = useState("")
    const navigate = useNavigate()
    const display = () => {
        if (customer) {
            navigate('/register')
        } else {
            navigate('/register')
        }

    }

    const slideImages = [
        {
            url: 'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
            alt: "kdkdkdkd",
        },
        {
            url: 'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg',
            alt: "kdkdkdkd",
        },
        {
            url: 'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg',
            alt: "kdkdkdkd",
        },
        {
            url: 'https://m.media-amazon.com/images/I/61um60VOoeL._SX3000_.jpg',
            alt: "kdkdkdkd",
        },
        {
            url: ' https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg',
            alt: "kdkdkdkd",
        },

    ];

    return (
        <>
            <NavBar />
            <div className="slide-container">
                <Slide className="">
                    {slideImages.map((slideImage, index) => (
                        <div className="each-slide" key={index}>
                            <div style={{
                                'backgroundImage': `url(${slideImage.url})`, backgroundAttachment: 'fixed', background: 'repeat:no-repeat',
                                backgroundSize: 'cover',
                            }} className=" expand" />
                            <span>{slideImage.caption}</span>
                        </div>
                    ))}
                </Slide >
            </div >
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {dash.map((item, index) => (
                            <Link to={`productdescription/${index}`}>
                                < div className="tobi" >
                                    <div className="card" style={{ width: "19rem" }}>
                                        <img src={item.setFile} className='img-fluid img-responsive w-100 card-img-top' />
                                        <h3>{item.name}</h3>
                                        <h1 className='price'>Price: {item.price}</h1>
                                        <h2>Description: {item.description}</h2>
                                        <p className='para'><button>Add to cart</button></p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div> */}
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <table className="table-responsive table" id='#ope'>
                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Name of product</th>
                                    <th>Quantity</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Total price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}

            <div onClick={() => display()}>
                <div className="container-fluid  py-5 mx-5">
                    <div className='text-center'>
                        <h2 className='recent h1'>New Arrivals</h2>
                    </div>
                    <div className="row py-5">
                        <div className="col-md-3">
                            <div className="card border border-0" style={{ width: "18rem" }}>
                                <img src={product1} className="card-img-top img-responsive img-fluid" alt="..." />
                                <div className="card-body">
                                    <p className="card-text text-center">Hp 15 Intel Celeron N4020 15.6" 8GB RAM/1TB HDD Win 10 + Mouse</p>
                                    <h5 className="card-title text-center">₦ 177,000</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border border-0" style={{ width: "18rem" }}>
                                <img src={product2} className="card-img-top img-responsive img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Thinkpad X1 Refurbished Carbon14" 256GB SSD 8GB RAM</h5>
                                    <p className="card-text text-center">₦ 238,900</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border border-0" style={{ width: "18rem" }}>
                                <img src={product8} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text text-center">Ipason MaxBook P1 Pro-AMD R5 3500U Quad-Core 8G RAM 512G SSD 15.6 Inch IPS-Grey</p>
                                    <h5 className="card-title text-center">₦ 593,999</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border border-0" style={{ width: "18rem" }}>
                                <img src={product5} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text text-center">samsung</p>
                                    <h5 className="card-title text-center">#1000000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <p className='fw-bold text-center h1'>Top Phones Deals</p>
                </div>
            </div>

            <div className='container-fluid mb-5'>
                <div className="row">
                    <div onClick={() => display()}>
                        <div className="col-md-12">
                            <div className="straight">
                                <div className="card border border-0 ">
                                    <div className="card-body item">
                                        <h2 className="card-title right">Choose what you want</h2>
                                        <p className="card-text select">Select items from your favorite  <br /> grocery stores or local markets.</p>
                                        <img src={product7} className='card-img-top top1' style={{ width: "300px" }} alt="jjj" />
                                    </div>
                                </div>
                                <div className="card border border-0 ">
                                    <div className="card-body item">
                                        <h2 className="card-title right">Choose what you want</h2>
                                        <p className="card-text select">Select items from your favorite  <br /> grocery stores or local markets.</p>
                                        <img src={product8} className='card-img-top top1' style={{ width: "300px" }} alt="jjj" />
                                    </div>
                                </div>
                                <div className="card border border-0 ">
                                    <div className="card-body item">
                                        <h2 className="card-title right">Choose what you want</h2>
                                        <p className="card-text select">Select items from your favorite  <br /> grocery stores or local markets.</p>
                                        <img src={product4} className='card-img-top top1' style={{ width: "300px" }} alt="jjj" />
                                    </div>
                                </div>
                                <div className="card border border-0 ">
                                    <div className="card-body item">
                                        <h2 className="card-title right">Choose what you want</h2>
                                        <p className="card-text select">Select items from your favorite  <br /> grocery stores or local markets.</p>
                                        <img src={product5} className='card-img-top top1' style={{ width: "300px" }} alt="jjj" />
                                    </div>
                                </div>
                                <div className="card border border-0">
                                    <div className="card-body item">
                                        <h2 className="card-title  right">Choose what you want</h2>
                                        <p className="card-text select">Select items from your favorite <br /> grocery stores or local markets.</p>
                                        <img src={samsung} className='card-img-top top1' style={{ width: "300px" }} alt="favpurite" />
                                    </div>
                                </div>
                                <div className="card border border-0 flow">
                                    <div className="card-body item">
                                        <h2 className="card-title  right">Samsung Galaxy A14 6.6" 4GB RAM/128GB ROM Android 13 - Black</h2>
                                        <p className="card-text select">₦ 106,000</p>
                                        <img src={product2} className='card-img-top top1' style={{ width: "300px" }} alt="from" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home