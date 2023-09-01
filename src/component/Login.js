import React from 'react'
import * as yup from "yup";
import { useFormik } from "formik";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { baseurl } from "./Endpoint";
import NavBar from "./NavBar";
import bg from "../assest/images/bg.svg"
import avatar from "../assest/images/avatar.svg"
import wave from "../assest/images/wave.png";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';
const Login = () => {

    const Notify = () => {
        toast("Default Notification !", {
            position: toast.POSITION.TOP_CENTER
        });
        toast.success("Sucess !!!", {
            position: toast.POSITION.TOP_LEFT
        })
    }


    const navigate = useNavigate();
    const [Error, setError] = useState("");
    const [first, setfirst] = useState(true)
    const [loader, setloader] = useState(false)
    const [mailErr, setmailErr] = useState("")
    const [mail, setmail] = useState("")
    const [passwor, setFpasswor] = useState(false)

    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    const signin = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            setloader(true)
            axios.post(`${baseurl}signin`, values).then((credentials) => {
                if (credentials) {
                    let Err = credentials.data.message;
                    if (Err == "Email not found") {
                        setloader(false)
                        setError("Email not found");
                    } else if (Err == "Invaild password") {
                        setloader(false)
                        setError("Invaild password");
                    }
                    else {
                        if (Err == "Token generated") {
                            localStorage.customer = credentials.data.token
                            console.log(credentials.data.token);
                            <ToastContainer />
                            navigate("/dashboard")
                        } else {
                            localStorage.removeItem("customer")
                            navigate("/registration")
                            setloader(false)
                        }

                    }
                }
            })
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .required("This field is required")
                .email("must be a valid email"),
            password: yup
                .string()
                .required("This field is required")
                .matches(lower, "Must include lowerCase letter")
                .matches(upper, "Must include upperCase letter")
                .matches(number, "Must include a number")
                .min(5, "password is weak, must be greater than 5 charaters"),
        }),
    });

    const ForgetPwd = () => {
        // setloaders(prev => true)
        if (mail != "") {

            axios.post(`${baseurl}forgetpassword`, { mail }).then((data) => {
                if (data) {
                    console.log(data.data);
                    let mes = data.data.message;
                    if (mes != "Email not found") {
                        // setloaders(prev => false)
                        setmailErr("Check your mail to rest your password")
                        setTimeout(() => {
                            setFpasswor(false)
                        }, 9000);
                    } else {
                        // setloaders(prev => false)
                        setmailErr("Email not found")
                    }
                }
            })
        } else {
            // setloaders(prev => false)
            setmailErr("Please provide your email address below")
        }
    }
    return (
        <>
            <NavBar />
            <img className="wave1" src={wave} />
            <div className="container66">
                <div className="img66">
                    <img src={bg} />
                </div>
                <div className="login-content">
                    <form className="form66" onSubmit={signin.handleSubmit}>
                        <h3 className={Error ? "alert alert-danger" : ""}>{Error}</h3>
                        <img src={avatar} />
                        <h2 className="title66">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div66">
                                <input type="text" className="input66" name="email" placeholder="email" onChange={signin.handleChange} onBlur={signin.handleBlur} />
                            </div>
                        </div>
                        <div className="validate">
                            {signin.touched.email && (
                                <div style={{ color: "red" }} className="my-2">
                                    {signin.errors.email}
                                </div>
                            )}
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div66">

                                <input type="password" name="password" className="input66" placeholder="Password" onChange={signin.handleChange} onBlur={signin.handleBlur} />
                            </div>
                        </div>
                        <div>
                            <div className="validate">
                                {signin.touched.password && (
                                    <div style={{ color: "red" }} className="my-2">
                                        {signin.errors.password}
                                    </div>
                                )}
                            </div>
                        </div>
                        <a href="#" className="mt-4" onClick={ForgetPwd}>Forgot Password?</a>
                        <button type="submit" className="btn66" value="Login" onClick={e => Notify()}
                        >Login{loader && (
                            <div className="spinner">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>
                        )}</button>
                        <div className="row mt-3 text-white mt-4">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <p style={{ opacity: "0.9", color: "black" }}>Don't have an account?</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>
                                            <Link to="/register"> <b className=" btn btn-block btn-primary">
                                                Sign-Up
                                            </b></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login