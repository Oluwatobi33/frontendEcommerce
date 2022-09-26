import React from 'react'
import { useState } from "react"
// import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { Navigate, useNavigate } from 'react-router-dom'
const Signin = () => {
    let receive = JSON.parse(localStorage.getItem("game"))
    const Navigate = useNavigate()
    const [userlogin, setuserlogin] = useState([])
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate: (values) => {
            let errors = {}
            if (values.email == "") {
                errors.email = "This field is required"
            }
            if (values.password == "") {
                errors.password = "This field is required"
            }

            return errors
        },
        onSubmit: (values) => {
            // console.log(values);
            receive.find((items) => {
                if (items.email == values.email && items.password == values.password) {
                    setuserlogin(userlogin.push(values))
                    localStorage.login = JSON.stringify(userlogin)
                    Navigate('/quiz')
                    localStorage.currentUser = values.email
                    console.log(localStorage.login);
                }

            })
        }

    })
    return (
        <>
            <section className='section4'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form action="" onSubmit={formik.handleSubmit} className='ss' autoComplete='true'>
                                <input type="text" className="form-control " placeholder="Email" name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <div className='text-danger who'>{formik.errors.email}</div>
                                <input type="password" className="form-control" placeholder="Password" name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                <div className='text-danger who'>{formik.errors.password}</div>
                                <button type='submit' className='btn btn-primary btn-sm mt-2'>Signin</button>
                                <marquee behavior="" direction=""><h4 className='fw-bold text-white '>Login to start the contest </h4></marquee>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin