import React from 'react'
import crowd from "../assest/images/crowd.png"
import Gardder from "../assest/images/Gardder.png"
import star from "../assest/images/star.png"
import trust from "../assest/images/trust.png"
const Zoom = () => {
    return (
        <>
            <section className='now'>
                <div className='container my-5'>
                    <div className="row ">
                        <div className='col-lg-3 '>
                            <div className="card border border-0" style={{ width: "17rem", height: "22rem" }}>
                                <div className="card-body text-center">
                                    <h2>Zoom is Ranked #1 in Customer Reviews</h2>
                                    <div className="underline mb-3 ms-5 text-center"></div>
                                    <p>
                                        See why customers love Zoom
                                    </p>
                                    <a className="set1" href="https://zoom.us/pricing" role="button" >Why Zoom</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="card border border-0" style={{ width: "17rem", height: "22rem" }}>
                                <div className="card-body text-center">
                                    <img src={crowd} className='card-img-top top1 py-4 img-responsive img-fluid ' style={{
                                        width: "190px"
                                    }} alt="jjj" />
                                    <img src={star} className='card-img-top' alt="jjj" style={{ width: "109px" }} />
                                    <p className='mb-4'>649K </p>
                                    <a href='https://www.gartner.com/reviews/market/meeting-solutions/vendor/zoom/product/zoom-meetings' target={'_blank'} style={{ color: "#0e71eb", textDecoration: "none" }}>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="card border border-0" style={{ width: "17rem", height: "22rem" }}>
                                <div className="card-body text-center">
                                    <img src={trust} className='card-img-top top1 py-4 img-responsive img-fluid ' style={{
                                        width: "190px"
                                    }} alt="hhhh" />
                                    <img src={star} className='card-img-top top1' alt="jjj" style={{ width: "109px" }} />
                                    <p className='mb-4'>1.8K</p>
                                    <a href='https://www.gartner.com/reviews/market/meeting-solutions/vendor/zoom/product/zoom-meetings' target={'_blank'} style={{ color: "#0e71eb", textDecoration: "none" }}>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="card border border-0" style={{ width: "17rem", height: "22rem" }}>
                                <div className="card-body text-center">
                                    <img src={Gardder} className='card-img-top top1 py-4 img-responsive img-fluid' style={{
                                        width: "190px"
                                    }} alt="hhh" />
                                    <img src={star} className='card-img-top top1' alt="jjj" style={{ width: "109px" }} />
                                    <p className='mb-4'>32K</p>
                                    <a href='https://www.gartner.com/reviews/market/meeting-solutions/vendor/zoom/product/zoom-meetings' target={'_blank'} style={{ color: "#0e71eb", textDecoration: "none" }}>Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Zoom