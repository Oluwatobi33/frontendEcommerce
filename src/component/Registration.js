import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { baseurl } from "./Endpoint";
import NavBar from "./NavBar";
import bg from "../assest/images/bg.svg"
import avatar from "../assest/images/avatar.svg"
import wave from "../assest/images/wave.png"
const Registration = () => {
    const navigate = useNavigate();
    const [Error, setError] = useState("");
    const [first, setfirst] = useState(true)
    const [loader, setloader] = useState(false)
    const [mailErr, setmailErr] = useState("")
    const [mail, setmail] = useState("")
    const [passwor, setFpasswor] = useState("")

    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);

    const login = () => {
        setfirst(prev => true)
    }

    const register = () => {
        setfirst(prev => false)
    }

    const signup = useFormik({
        initialValues: {
            Name: "",
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            setloader(true)
            axios.post(`${baseurl}signup`, values).then((credentials) => {
                if (credentials) {
                    let Err = credentials.data.message;
                    if (Err == "Email already used") {
                        setError(Err)
                        setloader(prev => false)
                        setError("Email already used");
                    } else {
                        setloader(prev => false)
                        setfirst(prev => true)
                    }
                }
            })
        },
        validationSchema: yup.object({
            Name: yup
                .string()
                .required("This field is required")
                .min(5, "must be greater than three"),
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
                .min(5, "must be greater than 5 charaters"),
        }),
    });

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
                        setloader(prev => false)
                        setError("Email not found");
                    } else if (Err == "Invaild password") {
                        setloader(prev => false)
                        setError("Invaild password");
                    } else {
                        if (Err == 'Token generated') {
                            localStorage.customer = credentials.data.token
                            console.log(credentials.data.token);
                            setloader(prev => false)
                            navigate("/dashboard")
                        } else {
                            if (Err == "Invalid Token") {
                                localStorage.removeItem("customer")
                                navigate("/registration")
                                setloader(false)
                            }
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
            setmailErr()
            axios.post(`${baseurl}forgetpassword`, { mail }).then((data) => {
                if (data) {
                    console.log(data.data);
                    let mes = data.data.message;
                    if (mes != "Email not found") {
                        // setloaders(prev => false)
                        setmailErr("Check your mail to rest your password")
                        setTimeout(() => {
                            setFpasswor(prev => false)
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


    const toggle = useRef()
    const i = useRef()
    const password = useRef()
    const showHide = () => {
        if (password.current.type == "password") {
            password.current.setAttribute("type", "text");
            toggle.current.classList.add("hide")
            i.current.class = "fa fa-eye-slash";
        } else {
            password.current.setAttribute('type', "password");
            i.current.classList = "fa fa-eye";
            toggle.current.classList.remove('hide');
        }
    };
    return (
        <>
            <NavBar />
            <img className="wave1" src={wave} />
            <div className="container66">
                <div className="img66">
                    <img src={bg} />
                </div>
                {first && (<div className="login-content">
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
                        <button type="submit" className="btn66" value="Login"
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
                                            <b className=" btn btn-block btn-primary" onClick={register}>
                                                Sign-Up
                                            </b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                )}
                {!first && (<div className="login-content">
                    <h3 className={Error ? "alert alert-danger" : ""}>{Error}</h3>
                    <form className="form66" onSubmit={signup.handleSubmit}>
                        <img src={avatar} />
                        <h2 className="title66">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div66">
                                <input type="text" className="input66" name="Name" placeholder="FullName" onChange={signup.handleChange} onBlur={signup.handleBlur} />
                            </div>
                        </div>
                        <div className="validate">
                            {signup.touched.Name && (
                                <div style={{ color: "red" }} className="my-2">
                                    {signup.errors.Name}
                                </div>
                            )}
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div66">
                                <input type="Email" name="email" className="input66" placeholder="Email" onChange={signup.handleChange} onBlur={signup.handleBlur} />
                            </div>
                        </div>
                        <div>
                            <div className="validate">
                                {signup.touched.email && (
                                    <div style={{ color: "red" }} className="my-2">
                                        {signup.errors.email}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div66">
                                <input type="password" name="password" className="input66" placeholder="password" onChange={signup.handleChange} onBlur={signup.handleBlur} />
                            </div>
                        </div>
                        {/* <span id='toggle' href={toggle} onClick={showHide} className='translated float-end me-4'>
                            <i href={1} className="fa fa-eye text-dark" arial-hidden="true"></i>
                        </span> */}
                        <div>
                            <div className="validate">
                                {signup.touched.password && (
                                    <div style={{ color: "red" }} className="my-2">
                                        {signup.errors.password}
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <a href="#">Forgot Password?</a> */}
                        <button type="submit" className="btn66 mt-4" value="Login"
                        > Register{loader && (
                            <div className="spinner">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>)}
                        </button>
                        <div className="row mt-3 text-white mt-4">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-8">
                                        <p style={{ opacity: "0.9", color: "black" }}>Don't have an account?</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p>
                                            <b className=" btn btn-block btn-primary" onClick={login}>
                                                Login
                                            </b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                )}
            </div>
            {/* <div className="container66">
                <div className="img66">
                    <img src={bg} />
                </div>
                <p>{Error ? "alert alert-danger" : ""}</p>

                <h3 className="m-4 text-dark text-center">
                    <b>
                        <i>SIGN-UP</i>
                    </b>
                </h3>
            </div> */}
            {/* <div className="container">
                <div className="row my-5">
                    {first && (
                        <div className="shadow col-lg-7 justify-content-end col-md-4  pb-3 asd">
                            <h3 className={Error ? "alert alert-danger" : ""}>{Error}</h3>
                            <h3 className="m-4 text-dark">
                                <b>
                                    <i>SIGN-IN</i>
                                </b>
                            </h3>
                            <form action="" onSubmit={signin.handleSubmit}>
                                <div className="form-floating">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className={
                                            signin.errors.email && signin.touched.email
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={signin.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="email"
                                        onBlur={signin.handleBlur}
                                    />
                                    {signin.touched.email && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {signin.errors.email}
                                        </div>
                                    )}
                                    <label>&#x1F4E7;&nbsp; Your email</label>
                                </div>
                                <div className="form-floating my-3">
                                    <input
                                        type="password"
                                        placeholder="Your password"
                                        className={
                                            signin.errors.password && signin.touched.password
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        ref={password}
                                        maxLength={10}
                                        onChange={signin.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="password"
                                        onBlur={signin.handleBlur}
                                    />
                                    <div
                                        id="toggle"
                                        ref={toggle}
                                        onClick={showHide}
                                        className="gose pe-4"
                                    >
                                        <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                    {signin.touched.password && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {signin.errors.password}
                                        </div>
                                    )}
                                    <label>&#x1F512;&nbsp; Your password</label>
                                    <button
                                        type="submit"
                                        className="btn form-control py-3 mt-3 asdb"
                                    >
                                        <b className="btn btn-block btn-primary w-100 p-3 fs-4">Sign-In</b>
                                        {loader && (
                                            <div className="spin">
                                                <div className="loader"></div>
                                            </div>
                                        )}
                                    </button>
                                </div>
                                <div className="row mt-3 text-white mt-4">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <p style={{ opacity: "0.9", color: "black" }}>Don't have an account?</p>
                                            </div>
                                            <div className="col-md-4">
                                                <p>
                                                    <b className=" btn btn-block btn-primary" onClick={register}>
                                                        Sign-Up
                                                    </b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )} */}

            {/* {!first && (
                        <div className="shadow col-lg-12 col-md-4 px-4 pb-3 asd">
                            <p>{Error ? "alert alert-danger" : ""}</p>
                            <h3 className=" text-white">
                                <b>
                                    <i>Create an account</i>
                                </b>
                            </h3>
                            <form action="" onSubmit={signup.handleSubmit}>
                                <div className="form-floating my-3">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className={
                                            signup.errors.Name && signup.touched.Name
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={signup.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="Name"
                                        onBlur={signup.handleBlur}
                                    />
                                    {signup.touched.Name && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {signup.errors.Name}
                                        </div>
                                    )}
                                    <label>&#x1F464;&nbsp; Your Name</label>
                                </div>
                                <div className="form-floating my-3">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className={
                                            signup.errors.email && signup.touched.email
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        onChange={signup.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="email"
                                        onBlur={signup.handleBlur}
                                    />
                                    {signup.touched.email && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {signup.errors.email}
                                        </div>
                                    )}
                                    <label>&#x1F4E7;&nbsp; Your email</label>
                                </div>
                                <div className="form-floating my-3">
                                    <input
                                        type="password"
                                        placeholder="Your password"
                                        className={
                                            signup.errors.password && signup.touched.password
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        ref={password}
                                        maxLength={10}
                                        onChange={signup.handleChange}
                                        style={{ backgroundColor: "#F5F7FA" }}
                                        name="password"
                                        onBlur={signup.handleBlur}
                                    />

                                    <div
                                        id="toggle"
                                        ref={toggle}
                                        onClick={showHide}
                                        className="gose pe-4"
                                    >
                                        <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                                    </div>
                                    {signup.touched.password && (
                                        <div style={{ color: "red" }} className="my-2">
                                            {signup.errors.password}
                                        </div>
                                    )}
                                    <label>&#x1F512;&nbsp; Your password</label>
                                    <button
                                        type="submit"
                                        className="btn form-control py-3 mt-3 asdb"
                                    >
                                        <b className="btn btn-primary w-100 p-3 fs-4">Sign-Up</b>
                                        {loader && (
                                            <div className="spin">
                                                <div className="loader"></div>
                                            </div>
                                        )}
                                    </button>
                                </div>
                                <div className="row mt-3 text-white mt-4">
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-8">
                                                <p style={{ opacity: "0.9", color: "black" }}>Already have an account?</p>
                                            </div>
                                            <div className="col-md-4 ">
                                                <p>
                                                    <b className="btn btn-block btn-primary m-5" onClick={login}>
                                                        Sign-In
                                                    </b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )} */}
            {/* </div>
            </div> */}
        </>
    );
}
export default Registration