import React from 'react'
import { useState } from 'react'
import { FaPlus } from "react-icons/fa"
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Quiz = () => {
    const [sett, setsett] = useState(false)
    const [check, setcheck] = useState(false)
    const [together, settogether] = useState([])

    const addQ = () => {
        setcheck(true)
    }
    const quiz = () => {
        setsett(true)
    }
    useEffect(() => {
        if (localStorage.questions) {
            settogether(JSON.parse(localStorage.getItem("questions")))
        }
        // else {
        //     settogether([])
        // }
    }, [])
    console.log(together);
    let take = (localStorage.currentUser)

    const formik = useFormik({
        initialValues: {
            question: "",
            optiona: "",
            optionb: "",
            optionc: "",
            optiond: "",
            correct: ""
        },
        onSubmit: (values) => {
            // console.log(values);
            let setquiz = [...together, values]

            settogether(setquiz);
            localStorage.setItem("questions", JSON.stringify(together));
        }

    })
    return (
        <>
            <div className='bg-primary  py-5 container-fluid fw-bold text-white'>
                <h4> WELCOME TO YOUR QUIZ</h4>
                <h3>{take}</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <button className='btn btn-secondary mx-3 my-3 fw-bold btn-md' onClick={quiz}>SET QUIZ</button>
                        <Link to="/dashboard">
                            <button className='btn btn-success fw-bold btn-md'>TAKE QUIZ</button>
                        </Link>
                    </div>
                </div>
            </div>
            {sett && <section>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-12">
                            <h4 style={{ color: 'blue' }} className='mb-4 mt-3'>QUESTIONS</h4>
                            <div className='mt-2' style={{ borderBottom: "2px solid blue" }}></div>
                            <button className='btn shadow-md btn-primary mt-3' onClick={addQ}> <i className='fa-add text-primary'>{FaPlus}</i>Add Question</button>
                        </div>
                    </div>
                </div>
                {check && <section>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-md-8 ">
                                <h3 className='fst-italic'>Question</h3>
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <textarea onChange={formik.handleChange} name="question" style={{ width: "58vw", height: "45vh", resize: "none" }}></textarea>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <h5 className='fst-italic'>Options</h5>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-4">
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <textarea name="optiona" className='me-2 my-3' placeholder='optionA' style={{ width: "20vw", height: "12vh", resize: "none", borderRadius: "2px" }} onChange={formik.handleChange}  ></textarea>
                                    <span style={{ border: "2px solid blue", marginBottom: "23px" }} className="px-2 py-1 rounded rounded-circle">A</span>
                                </form>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <textarea name="optionb" className='me-2 my-3' placeholder='optionB' style={{ width: "20vw", height: "12vh", resize: "none", borderRadius: "2px" }} onChange={formik.handleChange} ></textarea>
                                    <span style={{ border: "2px solid blue" }} className="px-2 py-1 rounded rounded-circle">B</span>
                                </form>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-4">
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <textarea name="optionc" className='me-2 my-3' placeholder='optionC' style={{ width: "20vw", height: "12vh", resize: "none", borderRadius: "2px" }} onChange={formik.handleChange} ></textarea>
                                    <span style={{ border: "2px solid blue", marginBottom: "23px" }} className="px-2 py-1 rounded rounded-circle">C</span>
                                </form>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <textarea name="optiond" className='me-2 my-3' placeholder='optionD' style={{ width: "20vw", height: "12vh", resize: "none", borderRadius: "2px" }} onChange={formik.handleChange} ></textarea>
                                    <span style={{ border: "2px solid blue" }} className="px-2 py-1 rounded rounded-circle">D</span>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <form action="" onSubmit={formik.handleSubmit} >
                                    <textarea name="correct" className='me-2 my-3' placeholder='Correct Answer' style={{ width: "45vw", height: "12vh", resize: "none", borderRadius: "2px" }} onChange={formik.handleChange}></textarea>
                                    <button type='submit' className='btn btn-success mx-2'>SET QUIZ</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <table className='table trable-reponsive table-striped  table-hover'>
                                    <thead>
                                        <tr>
                                            <td className='fw-bold'>S/N</td>
                                            <td className='fw-bold'>Question</td>
                                            <td className='fw-bold'>optiona</td>
                                            <td className='fw-bold'>optionb</td>
                                            <td className='fw-bold'>optionc</td>
                                        </tr>
                                    </thead>
                                    {
                                        together.map((student, index) => (
                                            <>
                                                <tbody>
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{student.question}</td>
                                                        <td>{student.optiona}</td>
                                                        <td>{student.optiona}</td>
                                                        <td>{student.optionc}</td>
                                                    </tr>
                                                </tbody>
                                            </>
                                        ))
                                    }
                                </table>
                            </div>
                        </div>
                    </div>
                </section >}
            </section>}
        </>
    )
}

export default Quiz