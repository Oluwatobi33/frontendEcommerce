import React from 'react'
import profile from "../assest/images/profile.jpg"
import smile from "../assest/images/smile.jpg"
import graph from "../assest/images/graph.jpg"
import finegirl from "../assest/images/finegirl.jpg"
import You from './You'
const Slider = () => {

    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner mt-5">
                    <div className="carousel-item active" data-bs-interval="">
                        <div className="container-fluid">
                            <div className="row slider">
                                <div className="col-md-6">
                                    <h2>One platform to connect</h2>
                                    <p>
                                        Bring teams together, reimagine workspaces, engage new audiences, and delight your customers –– all on the Zoom platform you know and love.</p>
                                    <a className="set" href="https://zoom.us/pricing" role="button" tabindex="-1">See Pricing</a>
                                </div>
                                <div className="col-md-6 ">
                                    <img src={smile} className="img-responsive img-fluid border border-start rounded rounded-5 " alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container-fluid">
                            <div className="row  slider">
                                <div className="col-md-6">
                                    <h2>Get more done together</h2>
                                    <p>
                                        Get more done together
                                        Simple to manage. Delightful to use. Flexible to build with. The Zoom platform makes reliable communication easy, so you can focus on growing your business and supporting your customers.
                                        {/* <a className="set" href="https://zoom.us/pricing" role="button" tabindex="-1">See Pricing</a> */}
                                    </p>
                                    <a className="set" href="https://zoom.us/pricing" role="button" tabindex="-1">Discover Zoom Whiteboard</a>
                                </div>
                                <div className="col-md-6">
                                    <img src={profile} className="d-block w-100 border rounded rounded-end rounded-5 " alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item " data-bs-interval="1000">
                    <div className="container-fluid">
                        <div className="row slider">
                            <div className="col-md-6">
                                <h2>Introducing the All-New Zoom Whiteboard</h2>
                                <p>
                                    Zoom Whiteboard provides a collaboration space where individuals, hybrid teams, and remote teams can come together, brainstorm, and learn.</p>
                                <a className="set" href="https://zoom.us/pricing" role="button" tabindex="-1">See Pricing</a>
                            </div>
                            <div className="col-md-6 ">
                                <img src={graph} className="d-block w-100 border border-start rounded rounded-5 " alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container-fluid">
                        <div className="row  slider">
                            <div className="col-md-6">
                                <h2>Introducing Zoom IQ!</h2>
                                <p>
                                    A conversational intelligence solution for Zoom Meetings that turns sales conversations into actionable insights.
                                    {/* <a className="set" href="https://zoom.us/pricing" role="button" tabindex="-1">See Pricing</a> */}
                                </p>
                                <a className="set" href="https://zoom.us/pricing" role="button" tabindex="-1">Learn more</a>
                            </div>
                            <div className="col-md-6">
                                <img src={finegirl} className="d-block w-100 border rounded rounded-end rounded-5 " alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container-fluid">
                        <div className="row  slider">
                            <div className="col-md-6">
                                <h2> Introducing Zoom Contact Center</h2>
                                <p>
                                    Zoom Contact Center is an omnichannel contact center solution that’s optimized for video and integrated right into the same Zoom experience.
                                    {/* <a className="set" href="https://zoom.us/pricing" role="button" tabindex="-1">See Pricing</a> */}
                                </p>
                                <a className="set" href="https://zoom.us/pricing" role="button" tabindex="-1">Learn more</a>
                            </div>
                            <div className="col-md-6">
                                <img src={finegirl} className="d-block w-100 border rounded rounded-end rounded-5 " alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Slider