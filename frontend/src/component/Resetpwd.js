import React from 'react'
import * as yup from "yup";
import { useFormik } from "formik";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assest/images/avatar.svg"
import wave from "../assest/images/wave.png"
import bg from "../assest/images/bg.svg"
import axios from 'axios';
import { baseurl } from "./Endpoint";

const Resetpwd = () => {
    const navigate = useNavigate();
    const [Error, setError] = useState("");
    const [first, setfirst] = useState(true)
    const [loader, setloader] = useState(false)

    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);

    const forget = useFormik({
        initialValues: {
            email: "",
            newpassword: "",
            confirmpassword: "",
        },
        onSubmit: (values) => {
            setloader(prev => true)
            if (values.confirmpassword === values.newpassword) {
                setError();
                axios.post(`${baseurl}adminforget`, values).then((credentials) => {
                    if (credentials) {
                        let Err = credentials.data.message;
                        if (Err != "Email not found") {
                            if (Err == "updated") {
                                setloader(prev => false)
                                setError("Password reset successfuly");
                                setTimeout(() => {
                                    navigate("/RegistAdmin")
                                }, 4000);
                            }
                        } else {
                            setloader(prev => false)
                            setError("Email not found");
                        }
                    }
                })
            } else {
                if (values.confirmpassword != values.newpassword) {
                    setloader(prev => false)
                    setError("Confirm password is not the same as New password");
                }
            }
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .required("This field is required")
                .email("must be a valid email"),
            newpassword: yup
                .string()
                .required("This field is required")
                .matches(lower, "Must include lowerCase letter")
                .matches(upper, "Must include upperCase letter")
                .matches(number, "Must include a number")
                .min(5, "password is weak, must be greater than 5 charaters"),
            confirmpassword: yup
                .string()
                .required("This field is required")
                .matches(lower, "Must include lowerCase letter")
                .matches(upper, "Must include upperCase letter")
                .matches(number, "Must include a number")
                .min(5, "password is weak, must be greater than 5 charaters"),
        }),
    });

    const toggle = useRef();
    const i = useRef();
    const password = useRef();
    const confirmpasswordtoggle = useRef();
    const confirmpasswordi = useRef();
    const confirmpasswordpassword = useRef();

    const showHide = () => {
        if (password.current.type === "password") {
            password.current.setAttribute("type", "text");
            toggle.current.classList.add("hide");
            i.current.classList = "fa fa-eye-slash";
        } else {
            password.current.setAttribute("type", "password");
            i.current.classList = "fa fa-eye";
            toggle.current.classList.remove("hide");
        }
    };
    const confirmpassword = () => {
        if (confirmpasswordpassword.current.type === "password") {
            confirmpasswordpassword.current.setAttribute("type", "text");
            confirmpasswordtoggle.current.classList.add("hide");
            confirmpasswordi.current.classList = "fa fa-eye-slash";
        } else {
            confirmpasswordpassword.current.setAttribute("type", "password");
            confirmpasswordi.current.classList = "fa fa-eye";
            confirmpasswordtoggle.current.classList.remove("hide");
        }
    };
    return (
        <>
            {/* <div className="container">
                <div className="row mx-auto my-5">
                    <div className="shadow col-12 col-md-4 mx-auto px-4 pb-3 asd">
                        <h3 className="m-4 text-white">
                            <b>
                                <i>FORGET PASSWORD</i>
                            </b>
                        </h3>
                        <p>
                            <b className="text-danger"><marquee className="card">{Error}</marquee></b>
                        </p>
                        <form action="" onSubmit={forget.handleSubmit}>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className={
                                        forget.errors.email && forget.touched.email
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    onChange={forget.handleChange}
                                    style={{ backgroundColor: "#F5F7FA" }}
                                    name="email"
                                    onBlur={forget.handleBlur}
                                />
                                {forget.touched.email && (
                                    <div style={{ color: "red" }} className="my-2">
                                        {forget.errors.email}
                                    </div>
                                )}
                                <label>&#x1F4E7;&nbsp; Your email</label>
                            </div>
                            <div className="form-floating mt-3">
                                <input
                                    type="password"
                                    placeholder="New password"
                                    className={
                                        forget.errors.newpassword && forget.touched.newpassword
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    ref={password}
                                    maxLength={10}
                                    onChange={forget.handleChange}
                                    style={{ backgroundColor: "#F5F7FA" }}
                                    name="newpassword"
                                    onBlur={forget.handleBlur}
                                />
                                <div
                                    id="toggle"
                                    ref={toggle}
                                    onClick={showHide}
                                    className="gose pe-4"
                                >
                                    <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                                </div>
                                {forget.touched.newpassword && (
                                    <div style={{ color: "red" }} className="my-2">
                                        {forget.errors.newpassword}
                                    </div>
                                )}
                                <label>&#x1F512;&nbsp;New password</label>
                            </div>
                            <div className="form-floating mt-4">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className={
                                        forget.errors.confirmpassword && forget.touched.confirmpassword
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    ref={confirmpasswordpassword}
                                    maxLength={10}
                                    onChange={forget.handleChange}
                                    style={{ backgroundColor: "#F5F7FA" }}
                                    name="confirmpassword"
                                    onBlur={forget.handleBlur}
                                />
                                <div
                                    id="confirmpasswordtoggle"
                                    ref={confirmpasswordtoggle}
                                    onClick={confirmpassword}
                                    className="gose pe-4"
                                >
                                    <i ref={confirmpasswordi} className="fa fa-eye" aria-hidden="true"></i>
                                </div>
                                {forget.touched.confirmpassword && (
                                    <div style={{ color: "red" }} className="my-2">
                                        {forget.errors.confirmpassword}
                                    </div>
                                )}
                                <label>&#x1F512;&nbsp;Confirm password</label>

                                <button
                                    type="submit"
                                    className="defaultbtn btn-bg-two mt-2 mx-auto"
                                >
                                    <b>Reset password</b>
                                </button>
                                {loader && (
                                    <div className="spin mt-2">
                                        <div className="loader"></div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}

            <img className="wave1" src={wave} />
            <div className="container66">
                <div className="img66">
                    <img src={bg} />
                </div>
                <form className="form66" onSubmit={forget.handleSubmit}>
                    <img src={avatar} />
                    <h2 className="title66">Welcome</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="div66">
                            <input type="text" className="input66" name="email" placeholder="email" onChange={forget.handleChange} onBlur={forget.handleBlur} />
                        </div>
                    </div>
                    <div className="validate">
                        {forget.touched.email && (
                            <div style={{ color: "red" }} className="my-2">
                                {forget.errors.email}
                            </div>
                        )}
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="div66">
                            <input type="passwrod" name="newpassword" className="input66" placeholder="newpassword" onChange={forget.handleChange} onBlur={forget.handleBlur} />
                        </div>
                    </div>
                    <div>
                        <div className="validate">
                            {forget.touched.newpassword && (
                                <div style={{ color: "red" }} className="my-2">
                                    {forget.errors.newpassword}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="div66">
                            <input type="password" name="confirmpassword" className="input66" placeholder="password" onChange={forget.handleChange} onBlur={forget.handleBlur} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Resetpwd 