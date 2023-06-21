import React from 'react'
import { useEffect, useState } from "react";
import Footer from './Footer'
import axios from 'axios';
import { baseurl } from "./Endpoint";
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './NavBar'
import * as yup from "yup";
import { useFormik } from "formik";

const Addtocart = () => {
    var totalPrice = 0;
    const userprofile = localStorage.userprofile
    const customer = localStorage.customer;
    const customerId = localStorage.customerId;
    console.log(customerId);
    const navigate = useNavigate();
    const [first, setfirst] = useState(true);
    const [Num, setNum] = useState(0)
    const [Quantity, setQuantity] = useState("")
    const [together, settogether] = useState("")
    const [Err, setErr] = useState("")
    const [loader, setloader] = useState(false)
    const [addtocart, setaddtocart] = useState([]);
    const [remove, setremove] = useState([])
    const [ERR, setERR] = useState(true)
    const [Location, setLocation] = useState("")
    const [copied, setcopied] = useState("")
    const [Copied, setCopied] = useState(false)
    const [dis, setdis] = useState(false)
    const [sum, setsum] = useState(0)
    const [ifo, setifo] = useState([])


    useEffect(() => {
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
                        let Err = data.data.message;
                        if (Err == "Valid Token") {
                            axios.post(`${baseurl}getaddtocart`, { id: customerId }).then((data) => {
                                if (data) {
                                    setaddtocart(data.data.result)
                                    setifo(userprofile)
                                }
                            })
                        } else {
                            localStorage.removeItem('customer')
                            localStorage.removeItem('customerId')
                            navigate("/registration")
                        }
                    }
                })
        } else {
            navigate("/registration")
        }
    }, [])

    const handleClose = (val) => {
        axios.post(`${baseurl}removeaddtocart`, { id: val }).then((data) => {
            let message = data.data.message
            if (message == "Remove cart was successful") {
                setremove(message)
                window.location.reload()
            }
        })
    }

    // const Formik = useFormik({
    //     initialValues: {
    //         Quantity: "",

    //     },
    //     onSubmit: (values) => {
    //         setloader(true);
    //         let userdata = {
    //             Quantity: values.Quantity,
    //         };
    //         console.log(userdata);
    //     },

    // })

    // const Quant = (e) => {
    //     let amt = e.target.value;
    //     if (amt > 0) {
    //         setQuantity(amt);
    //         let Er = "";
    //         setErr(Er);
    //     } else {
    //         let Er = "minimum amount is 0";
    //         setErr(Er);
    //     }
    // }

    const display = () => {
        if (totalPrice > 0) {
            if (Location != "") {
                setdis(prev => true)
                setERR(prev => false)
                setTimeout(() => {
                    setdis(prev => false)
                }, 60500);
            } else {
                setERR(prev => true)
            }
        }
    };


    const total = addtocart.forEach((val, index) => {
        totalPrice = totalPrice + parseFloat(val.price)
        console.log(totalPrice);
    });


    const handleSelectChange = (e) => {
        let selectedOpt = document.getElementById("selectOptions");
        setLocation(selectedOpt.value);
    };

    const handleClick = () => {
        const textToCopy = 9039343220;
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    // const handleClick = () => {
    //     const textToCopy = 0210452342;
    //     navigator.clipboard.writeText(textToCopy);
    //     setCopied(true);
    //     setTimeout(() => {
    //         setCopied(false);
    //     }, 2000);
    // };

    const mailler = () => {
        if (customer) {
            const Name = ifo.Name
            const email = ifo.email
            const id = ifo._id
            let ordered = addtocart.map((val) => {
                let price = (val.price);
                let product = (val.productname);
                let description = (val.description);
                let income = { price, product, description }
                return (income)
            });
            const allinfor = { Name, email, ordered, Location, id };
            axios.post(`${baseurl}mail`, allinfor).then((data) => {
                if (data) {
                    let mes = data.data.message
                    if (mes == "Mailed send") {

                        // axios.post(`${baseurl}removecart`, { id }).then((data) => {
                        //     if (data) {
                        //         console.log(data);
                        //     }
                        // })
                    }
                }
            })
        }
    }

    // let incNum = () => {
    //     if (Num < 10) {
    //         setNum((Num) + 1);
    //     }
    // }

    // let decNum = () => {
    //     if (Num > 0) {
    //         setNum((Num) - 1);
    //     }
    // }
    // console.log(Num);

    return (
        <>
            <Navbar />
            <div style={{ overflowX: "auto" }}>
                <div className='mt-5 '>
                    <p className={remove ? "alert alert-danger" : " alert"}>{remove}</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col fw-bold fs-3">Products</th>
                                <th scope="col fw-bold fs-3">Price </th>
                                <th scope="col fw-bold fs-3">Quantity</th>
                                <th scope="col fw-bold fs-3">TotalPrice</th>
                                <th scope="col fw-bold fs-3">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addtocart.map((item) => (
                                // totalPrice = item.price,
                                // localStorage.totalPrice,
                                <>
                                    {!loader && (<tr>
                                        <td><img src={item.setFile} width="100px" height='100px' />{item.productname}</td>
                                        <td>{"#" + item.price}</td>
                                        <td>
                                            <div className="col-md-3">
                                                <div className="input-group">
                                                    {/* <div className="input-group-prepend">
                                                         <button className="btn btn-outline-primary fw-bold " type="button" onClick={() => decNum(item.i)}> <span className='text-dark fs-2'>-</span></button>
                                                     </div> */}
                                                    {/* <div className='product_quantity' onChange={() => settogether(Num)}>{item.balance}</div> */}
                                                    {/* <form action="" onSubmit={Formik.handleSubmit}>
                                                        <input type="text" className="form-control ms-4" placeholder='Enter the quantity value ' onChange={(e) => Quant(e)} />
                                                    </form> */}
                                                    {/* <div className="input-group-prepend">
                                                         <button className="btn btn-outline-primary ms-4 " type="button" onClick={() => incNum(item.i)}><span className='text-dark fs-2'>+</span></button>
                                                  </div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{"#" + item.price}</td>
                                        <button className='btn-close float-end' aria-label='Close' onClick={() => handleClose(item._id)}></button>
                                    </tr>
                                    )}
                                    {loader && (
                                        <div className="spin">
                                            <div className="loader"></div>
                                        </div>
                                    )}
                                </>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* {first && (
                <div className="fis spine justify-content-center">
                    <div className="pageloader"></div>
                </div>
            )} */}
            {/* <div className='container'>
                <div className="row">
                    <div className="col-lg-12 col-md-12 aos-init aos-animate" data-aos data-aos-delay="100" >
                        {!first && (<div className='background mt-5 '>
                            <table className='table table-all table table-responsive'>
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: "18px" }}> Products </th>
                                        <th style={{ fontSize: "18px" }}>Price </th>
                                        <th style={{ fontSize: "18px" }}>Quantity</th>
                                    </tr>
                                </thead>
                                {addtocart.map((item) => (
                                    <tbody>
                                        <tr>
                                            <td style={{ fontSize: "18px" }}><p className=' d-flex'> <img src={item.setFile} width="180px" height='200px' /> <h4> {item.productname}</h4></p></td>
                                            <td style={{ fontSize: "18px" }}>{item.price}</td>
                                            <td style={{ fontSize: "18px" }}>Quantity</td>
                                            <td style={{ fontSize: "18px" }}>Total</td>display
                                            <button className='btn-close float-end' aria-label='Close' onClick={() => handleClose(item._id)}></button>
                                        </tr>
                                    </tbody>
                                ))}

                            </table>
                        </div>
                        )}
                        {first && (
                            <div className="fis spine">
                                <div className="pageloader"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-6 col-md-4" >
                        <div className="wrapper">
                            <input type="text" style={{ backgroundColor: 'white', border: '1px solid gainsboro' }} className="py-2 mx-2 mb-3 coupon"
                                placeholder="Enter your coupon code" />
                            <a className="text-white coupbtn" href="#"
                                style={{ textDecoration: 'none', fontSize: "25px", width: "240px", height: "50px", padding: "1px 30px" }}>Subcribe</a>

                        </div>
                    </div>
                    <div className="col-lg-6 justify-content-end ">
                        <div className="shoping__checkout ">
                            <h5>Cart Total</h5>
                            <ul>
                                <li>Subtotal <span>{totalPrice}</span></li>
                                <li>Total <span>{totalPrice}</span></li>
                            </ul>
                            <button type="button" className="default-btn btn-bg-two" onClick={display}>CHECKOUT (₦ {totalPrice})</button>
                            {/* <Link to="/checkout"><a href="#" className="primary-btn">PROCEED TO CHECKOUT</a></Link> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card p-2">
                                <h4>CART SUMMARY</h4>
                            </div>
                            <div className="card p-2">
                                <div className="row">
                                    <div className="col-5">
                                        <h5>Subtotal</h5>
                                    </div>
                                    <div className="col-7">
                                        <h4 style={{ float: 'right', }}><b>₦</b> {totalPrice}</h4>
                                    </div>
                                </div>
                                <p>Delivery fees not included yet.</p>
                                <label for="locations">Select your location:</label>
                                {ERR && (
                                    <p>
                                        <b className="text-danger"><marquee className="card">Please Select your location</marquee></b>
                                    </p>
                                )}
                                <select id="selectOptions" className="select" value={Location} onChange={(e) => handleSelectChange(e)}>
                                    <option value="">Select your location</option>
                                    <option value="Stadium">Isokoun</option>
                                    <option value="Sabo">Sabo</option>
                                    <option value="Lautech">Sha sha Junction</option>
                                    <option value="Under-G gate">Aralopon</option>
                                    <option value="Under-G">Under-G</option>
                                    <option value="Lautech main gate">Lautech main gate</option>
                                    <option value="Yoacco">Yoacco</option>
                                    <option value="Akowonjo">Isare</option>
                                    <option value="Adenike">Borlunduro</option>
                                </select>
                            </div>
                            <div className="card p-2">
                                <button type="button" className="btn btn-lg btn-primary" onClick={display}>CHECKOUT (₦ {totalPrice})</button>
                                {dis && (
                                    <div className="card mt-1 p-1">
                                        <h4>0210452342 <span style={{ float: 'right' }}><button className='butt mx-1' onClick={handleClick}>
                                            {copied ? 'Copied!' : <i class="fa fa-copy"></i>}
                                        </button></span> <br />GTB BANK<br />BAKARE OLUWATOBI.E</h4>
                                        <p>
                                            <b className="text-danger"><marquee className="card">Please click on the button below, (only) after payment to Confirm transaction</marquee></b>
                                        </p>
                                        <button type="button" className=" btn btn-success" onClick={mailler}><a href="https://wa.me/2347032437182" className='text-white'>Confirm transaction</a></button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="card p-2 mt-1">
                            <h5>Returns are easy</h5>
                            <p>Free return within 24 hours for other eligible items</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// const emptyCart = () => {
//     return (
//         <>
//             <div className='px-4 my-5 bg-light rounded-3'>
//                 <div className="container py-4">
//                     <div className="row">
//                         <h3>Your Cart is Empty</h3>
//                     </div>
//                 </div>
//             </div>
//             {addtocart.length === 0 && emptyCart()}
//             {addtocart.length !== 0 && state.map(item._id)}
//         </>
//     );
// }


export default Addtocart