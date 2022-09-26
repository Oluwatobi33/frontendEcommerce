import React from 'react'
// import './App.css'
import { Link } from 'react-router-dom'
// import millionaire from "../assest/images/millionaire.mp3"
const Home = () => {

    return (
        <>
            <section className='section3'>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-9 take">
                            <h2>WELCOME TO WHO WANTS TO BE A MILLIONAIRE</h2>
                            <Link className=' fst-italic' to='/FormikForm'><button type='submit' className='btn mt-3 btn-primary mx-2 btn-lg px-5 fst-italic'>Register</button></Link>
                            <Link className=' fst-italic' to='/signin'><button type='submit' className='btn mt-3 btn-success btn-lg px-5 fst-italic'>Login</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home