import { useFormik, validateYupSchema } from 'formik'
import React, { useState, } from 'react'
import { useRef } from 'react'
import * as yup from "yup"
import { useEffect } from 'react'
import picture from "../assest/images/wba.png"
import { Navigate, useNavigate } from 'react-router-dom'

const FormikForm = () => {
    const Navigate = useNavigate()
    // let special = "" 
    const [wba, setwba] = useState([])
    // special = JSON.parse(localStorage.getItem("game"))
    const [Error, setError] = useState("")
    useEffect(() => {
        if (localStorage.game) {
            setwba(JSON.parse(localStorage.game))
        }
        else {
            setwba([])
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            // setwba(wba.push(values));
            // console.log(wba);
            // localStorage.setItem("game", JSON.stringify(wba))
            // console.log(values);
            // let take = JSON.parse(localStorage.getItem("game"))
            // setwba(take)
            if (values) {
                if (wba.length <= 0) {
                    setwba(wba.push(values));
                    localStorage.setItem("game", JSON.stringify(wba));
                } else {
                    for (const a of wba) {
                        let user = values;
                        if (a["email"] !== user.email) {
                            setwba(wba.push(values));
                            console.log(wba);
                            Navigate('/Signin')
                            localStorage.setItem("game", JSON.stringify(wba));
                        } else if (a["email"] === user.email) {
                            let err = 'email  already in use'
                            setError(err)
                        }
                    }
                }
            }
        },
        // validate: (values) => {

        //     // let regexForFirstName = /^[\w]{7,8}$/
        //     let errors = {}
        //     // conditional statement
        //     if (values.firstname == "") {
        //         errors.firstname = "This field is required"
        //     }
        //     if (values.lastname == "") {
        //         errors.lastname = "This field is required"
        //     }
        //     if (values.email == "") {
        //         errors.email = "This field is required"
        //     }
        //     if (values.password == "") {
        //         errors.password = "This field is required"
        //     }
        //     return errors
        // },
        validationSchema: yup.object({
            firstname: yup.string()
                .required("This is field is required").min(5, "Must have at least 5 character"),
            lastname: yup.string()
                .required("This is field is required").min(5, "Must have at least 5 character"),
            email: yup.string()
                .required("This is field is required").min(10, "Must have at least 10 character"),
            password: yup.string()
                .required("This is field is required").min(6, "Must have at least 6 character")
        })
    })
    // console.log(formik.errors);

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
            <section className='section'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-5">
                            <div className='form-group form-horizontal'>
                                <h2 className='text-danger'>{Error}</h2>
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <label htmlFor="Name" className='d-flex'>Firstname</label>
                                    <input type="text" className={formik.errors.firstname ? 'form-control  is-invalid' : "form-control  is-valid"} placeholder='Firstname' onChange={formik.handleChange} name='firstname' onBlur={formik.handleBlur} />
                                    <div className='text-danger who'>{formik.errors.firstname}</div>
                                    <label htmlFor="Name" className='d-flex'>lastname</label>
                                    <input type="text" className={formik.errors.lastname ? 'form-control  is-invalid' : "form-control  is-valid"} onBlur={formik.handleBlur} placeholder='lastname' onChange={formik.handleChange} name='lastname' />
                                    <div className='text-danger who'>{formik.errors.lastname}</div>
                                    <label htmlFor="Name" className='d-flex'>Email</label>
                                    <input type='text' className={formik.errors.email ? 'form-control  is-invalid' : "form-control  is-valid"} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='email' name='email' />
                                    <div className='text-danger who'>{formik.errors.email}</div>
                                    <label htmlFor="time" className='d-flex'>Password</label>
                                    <input type="text" maxLength={10} className={formik.errors.password ? 'form-control  is-invalid mx-3' : "form-control  is-valid"} onBlur={formik.handleBlur} onChange={formik.handleChange} ref={password} placeholder='password' name='password' />
                                    <span id='toggle' href={toggle} onClick={showHide} className='translated float-end me-4'>
                                        <i href={1} className="fa fa-eye text-dark" arial-hidden="true"></i>
                                    </span>
                                    <div className='text-danger who'>{formik.errors.password}</div>
                                    <button type='submit' className='btn mt-3 btn-primary btn-lg px-5 fst-italic'>Register</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 mt-3">
                            <img src={picture} alt='who wants to be a millionaire' className='img-responsive img-fluid w-90' />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default FormikForm