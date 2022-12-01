import React from 'react'
import Docus from "../assest/images/Docus.png"
import rakuteen from "../assest/images/rakuteen.png"
import auto from "../assest/images/auto.png"
import okta from "../assest/images/okta.png"
import service from "../assest/images/service.png"
import atlant from "../assest/images/atlant.png"
import Nas from "../assest/images/Nas.png"
import capital from "../assest/images/capital.png"
import raymond from "../assest/images/raymond.png"

const Companies = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="container">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <div className="carousel-item active" data-bs-interval="1000" >
                                    <div className='trust'>
                                        <img src={Docus} className=" img-responsive img-fluid pt-5" style={{
                                            width: "150px"
                                        }} />
                                    </div>
                                    <div className='trust'>
                                        <img src={rakuteen} className=" img-responsive img-fluid pt-5" style={{
                                            width: "150px"
                                        }} />
                                    </div>
                                    <div className='trust'>
                                        <img src={auto} className=' img-responsive img-fluid pt-5' style={{
                                            width: "150px"
                                        }} alt="hhh" />

                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className='trust'>
                                        <img src={okta} className=" img-responsive img-fluid pt-5" style={{
                                            width: "150px"
                                        }} />
                                    </div>
                                    <div className='trust'>
                                        <img src={service} className=" img-responsive img-fluid pt-5" style={{
                                            width: "150px"
                                        }} />

                                    </div>
                                    <div className='trust'>
                                        <img src={atlant} className=' img-responsive img-fluid pt-5' style={{
                                            width: "150px"
                                        }} alt="hhh" />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='trust'>
                                        <img src={Nas} className=" img-responsive img-fluid pt-5" style={{
                                            width: "150px"
                                        }} />
                                    </div>
                                    <div className='trust'>
                                        <img src={capital} className=" img-responsive img-fluid pt-5" style={{
                                            width: "150px"
                                        }} />
                                    </div>
                                    <div className='trust'>
                                        <img src={raymond} className=' img-responsive img-fluid pt-5' style={{
                                            width: "150px"
                                        }} alt="hhh" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container my-5">
                <div className="row justify-content-center ">
                    <div className="col-md-4 bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 mb-5 text-center">
                                    <a href='https://explore.zoom.us/en/livedemo ' className='live' alt='live'>Request a Demo</a>
                                </div>
                                <div className="col-sm-6 text-center">
                                    <a href='https://zoom.us/buy?plan=pro&from=pro' className='pro' alt='pro'>Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Companies