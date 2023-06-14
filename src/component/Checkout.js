import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import { baseurl } from "./Endpoint";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSelector } from 'react-redux';
const Checkout = () => {
    const customer = localStorage.customer;
    // const state = useSelector((state) => state.addtocart)
    const navigate = useNavigate()
    const [productname, setproductname] = useState("")
    const [price, setprice] = useState("")
    const [des, setdes] = useState("")
    const [image, setimage] = useState("")
    const [loader, setloader] = useState("")
    const [customers, setcustomers] = useState([])
    const [Error, setError] = useState("")
    const [files, setfiles] = useState([])
    const [cart, setcart] = useState([])
    const [dash, setdash] = useState([])
    const signup = useFormik({
        initialValues: {
            firstName: "",
            lastname: "",
            email: "",
            address: "",
            country: "",
            state: "",
        },
        onSubmit: (values) => {
            setloader(prev => true)
            axios.post(`${baseurl}payment`, values).then((credentials) => {
                if (credentials) {
                    let Err = credentials.data.message;
                    if (Err == "it didn't send") {
                        setError(Err)
                        setloader(prev => false)
                        setError("it didn't send");
                    } else {
                        setloader(prev => false)
                        setError(" Saved successfully")
                        // return stripe.charges.create({
                        //     amount: 2500,	 // Charging Rs 25
                        //     description: 'Web Development Product',
                        //     currency: 'INR',
                        //     customer: customer.id
                        // })
                        // .then((charge) => {
                        //     res.send("Success") // If no error occurs
                        // })
                        // .catch((err) => {
                        //     res.send(err)	 // If some error occurs
                        // })
                    }
                }

                // if (credentials) {
                //     let Err = credentials.data.message;
                //     if (Err == "Email already used") {
                //         setError(Err)
                //         setloader(prev => false)
                //         setError("Email already used");
                //     } else {
                //         setloader(prev => false)
                //         setfirst(prev => true)
                //     }
                // }
            })
        },
        validationSchema: yup.object({
            firstName: yup
                .string()
                .required("This field is required")
                .min(3, "must be greater than three"),
            lastName: yup
                .string()
                .required("This field is required")
                .min(3, "must be greater than three"),
            email: yup
                .string()
                .required("This field is required")
                .email("must be a valid email"),
            address: yup
                .string()
                .required("This field is required")
                .email("must be a valid addres"),
            country: yup
                .string()
                .required("This field is required")
                .email("must be a valid email"),
            state: yup
                .string()
                .required("This field is required")
                .email("must be a valid email"),
        }),
    });
    const viewproduct = (val) => {
        // if (customer) {
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
                        axios.post(`${baseurl}payment`).then((data) => {
                            let accept = data.data.result
                            if (accept) {

                            }
                        })
                        localStorage.Viewproduct = val
                        navigate("/viewproduct")
                    } else {
                        localStorage.removeItem('customer')
                        localStorage.removeItem('customerId')
                        navigate("/Registration")
                    }
                }
            })
        // } else {
        //     navigate("/registration")
        // }

    }
    return (
        <>
            {/* <div className="container">
                <div className="row g-5"> */}
            {/* <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Second product</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Third item</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span className="text-success">−$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div> */}
            {/* <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" novalidate=""> */}
            {/* <div className="row g-3">
                                <div className="col-sm-6">
                                    <label for="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" name="firstName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                                </div>

                                <div className="col-md-5">
                                    <label for="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label for="state" className="form-label">State</label>
                                    <input type="text" className="form-control" placeholder="Enter your state" />
                                </div>
                            </div> */}

            {/* <hr className="my-4"> */}

            {/* <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" for="save-info">Save this information for next time</label>
                            </div> */}

            {/* <hr className="my-4"> */}

            {/* <h4 className="mb-3">Payment</h4>
                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label for="cc-name" className="form-label">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label for="cc-number" className="form-label">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label for="cc-expiration" className="form-label">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label for="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div> */}


        </>
    )
}

export default Checkout