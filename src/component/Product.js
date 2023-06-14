import React from 'react';
import '../App.css';
import Rating from 'react-rating'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { baseurl } from "../component/Endpoint"
import amazon from "../assest/images/amazon.webp"
// import Rating from 'react-rating';
import axios from 'axios';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
const Product = () => {
    const navigate = useNavigate();
    const customer = localStorage.customer;
    const ViewproductId = localStorage.Viewproduct;
    const [productname, setproductname] = useState("")
    const [dash, setdash] = useState([])
    const [price, setprice] = useState("")
    const [des, setdes] = useState("")
    const [image, setimage] = useState("")
    useEffect(() => {
        if (ViewproductId) {
            axios.post(`${baseurl}displaygood`).then((res) => {
                console.log(res.data.result);
                setdash(res.data.result)
            }).catch(err => {
                console.log(err);
            })
        } else {
            navigate('/')
        }

    }, [])

    const addtocart = (val) => {
        if (customer) {
            console.log(val);
        } else {
            navigate("/Registration")
        }
    }

    // useEffect(() => {
    //     axios.post(`${ baseurl }displayPro`).then((message) => {
    //         let details = message.data.message
    //         if (details) {
    //             setproductname(message.data.message.name)
    //             setprice(message.data.message.price)
    //             setdes(message.data.message.description)
    //             setimage(message.data.message.setFile)
    //         }
    //     })
    // }, [])

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {dash.map((item, index) => (
                            <Link to={`productdescription / ${index}`}>
                                < div className="tobi" >
                                    <div className="card" style={{ width: "19rem" }}>
                                        <img src={item.setFile} className='img-fluid img-responsive w-100 card-img-top' />
                                        <h3>{item.name}</h3>
                                        <h1 className='price'>Price: {item.price}</h1>
                                        <h2>Description: {item.description}</h2>
                                        <p className='para'><button className="btn btn-secondary" onClick={addtocart}>Add to cart <i className="fa fa-shopping-cart"></i></button></p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className='container'>
                <div className="row">
                    {
                        <div className="col-md-4">
                            <img src={image} alt='sjdhdjh' className='img-fluid img-responsive' />
                            <h2>{price}</h2>
                            <p>{productname}</p>
                            <textarea name="" id="" cols="30" rows="10">{des}</textarea>
                        </div>
                    }
                </div>
            </div> */}

        </>
    )
}

export default Product