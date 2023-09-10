
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { baseurl } from "./Endpoint";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify'
const Reset = () => {
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const [Error, setError] = useState("")
    const sendLink = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: (values) => {
            let userdata = {
                email: values.email,
            };
            axios.post(`${baseurl}sendpasswordlink`, userdata).then((credentials) => {
                if (credentials) {
                    let Err = credentials.data.message;
                    if (Err == "Enter your email") {
                        setError(Err)
                        setemail("")
                    } else {
                        setmessage(message)
                    }
                }
            })
        }
    });
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className='mx-auto'>
                            <div className="form_data">
                                <div className="form_heading">
                                    <h1>Enter Your Email</h1>
                                </div>
                            </div>
                            {message ? <p style={{
                                color: "green", fontWeight: 'bold'
                            }}>Password reset link send successfully in your Email</p> : ""}
                            <form action="" onSubmit={sendLink.handleSubmit}>
                                <div className="form_input">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control"
                                        onBlur={sendLink.handleBlur} onChange={sendLink.handleChange} placeholder='email' name='email' />
                                </div>
                                <button className='btn btn-primary w-100' onClick={sendLink}>Send</button>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Reset
