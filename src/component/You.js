import React from 'react'
import man from "../assest/images/man.png"
import abinbev from "../assest/images/abinbev.png"
import fresh from "../assest/images/fresh.png"
import fox from "../assest/images/FOX.png"
import AB from "../assest/images/AB.png"
import capital from "../assest/images/capital.png"
import Zendesk from "../assest/images/Zendesk.jpg"
import veena from "../assest/images/veena.png"
import Companies from './Companies'
import female from "../assest/images/female.png"
import Together from './Together'
import Zoom from './Zoom'

const You = () => {
    return (
        <>
            <Together />
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div id="screen2_container" className="screen normal">
                            <div className="circle">
                                {/* <div className="dotted-line">
                                    <svg width="200" height="200" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M338.139 499.282L280.266 281.34" stroke="#E4E4ED" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M467.689 374.282L345.194 271.053" stroke="#E4E4ED" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M477 190L265 212" stroke="#E4E4ED" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M397 68L299 180" stroke="#E4E4ED" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M252.761 54.99L252.249 114.61" stroke="#E4E4ED" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M106 49L182 135" stroke="#E4E4ED" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M15 180L250 212" stroke="#E4E4ED" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M28.7317 366.388L215.849 253.349" stroke="#E4E4ED" stroke-miterlimit="10" stroke-linecap="round" />
                                        <path d="M160.123 496.292L220.552 261.124" stroke="#E4E4ED" stroke-miterlimit="10" stroke-linecap="round" />
                                        <g filter="url(#filter0_d)">
                                            <path d="M249.91 384.81C324.413 384.81 384.81 324.413 384.81 249.91C384.81 175.407 324.413 115.01 249.91 115.01C175.407 115.01 115.01 175.407 115.01 249.91C115.01 324.413 175.407 384.81 249.91 384.81Z" fill="url(#paint0_radial)" />
                                        </g>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M157.566 278.895L159.816 279.01H193.456L193.354 276.479C193.047 272.337 190.491 269.345 186.708 269L184.458 268.885H164.315L191.207 238.625L191.104 236.094C190.9 231.952 188.241 228.845 184.458 228.615L182.209 228.5H148.569L148.671 231.031C148.978 235.173 151.636 238.28 155.317 238.51L157.566 238.625H177.71L150.818 268.885L150.92 271.416C151.125 275.558 153.783 278.55 157.566 278.895Z" fill="#BABACC" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M276.483 235.863C272.086 230.916 266.36 228.5 260.634 228.5C254.908 228.5 249.182 230.916 244.785 235.863C235.992 245.758 235.992 261.635 244.785 271.529C253.579 281.424 267.689 281.424 276.483 271.529C285.276 261.635 285.276 245.643 276.483 235.863ZM270.143 264.396C264.928 270.264 256.339 270.264 251.125 264.396C245.91 258.528 245.91 248.864 251.125 242.996C256.339 237.129 264.928 237.129 270.143 242.996C275.46 248.864 275.46 258.413 270.143 264.396Z" fill="#BABACC" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M229.448 235.863C225.051 230.916 219.325 228.5 213.599 228.5C207.873 228.5 202.147 230.916 197.751 235.863C188.957 245.758 188.957 261.635 197.751 271.529C206.544 281.424 220.654 281.424 229.448 271.529C238.241 261.635 238.241 245.643 229.448 235.863ZM223.108 264.396C217.894 270.264 209.305 270.264 204.09 264.396C198.875 258.528 198.875 248.864 204.09 242.996C209.305 237.129 217.894 237.129 223.108 242.996C228.323 248.864 228.323 258.413 223.108 264.396Z" fill="#BABACC" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M311.043 243.572C311.861 245.068 312.065 246.794 312.168 248.635L312.27 251.166V268.77L312.372 271.301C312.577 275.443 315.337 278.435 319.018 278.78L321.268 278.895V251.166L321.37 248.635C321.472 246.794 321.677 245.068 322.495 243.572C324.029 240.581 326.892 238.51 330.266 238.51C333.538 238.51 336.503 240.581 338.037 243.572C338.753 245.068 339.059 246.794 339.162 248.635L339.264 251.166V268.77L339.366 271.301C339.571 275.443 342.229 278.55 346.012 278.78L348.262 278.895V251.166V248.635C348.262 237.474 340.184 228.5 330.368 228.5C325.051 228.5 320.245 231.146 316.871 235.288C313.599 231.146 308.793 228.5 303.374 228.5C299.693 228.5 296.217 229.766 293.354 231.952C291.616 229.766 287.73 228.5 285.481 228.5V279.01L287.73 278.895C291.513 278.665 294.172 275.673 294.376 271.416L294.479 268.885V251.281L294.581 248.75C294.683 246.909 294.888 245.183 295.706 243.688C297.239 240.696 300.102 238.625 303.476 238.625C306.544 238.51 309.509 240.581 311.043 243.572Z" fill="#BABACC" />
                                        <defs className='text-center'>
                                            <filter id="filter0_d" x="67.01" y="83.01" width="365.8" height="365.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset dy="16" />
                                                <feGaussianBlur stdDeviation="24" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                            </filter>
                                            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320.9 331.639) scale(244.334)">
                                                <stop offset="0.000966062" stop-color="#EAEAF2" />
                                                <stop offset="1" stop-color="white" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div> */}
                            </div>
                            {/* <ul>
                                <li><img role="button" data-index="1" src="https://static-2.zoom.us/static/6.2.8801/image/new/home/meetings.png" alt="Meetings" /></li>
                                <li><img role="button" data-index="3" src="https://static-2.zoom.us/static/6.2.8801/image/new/home/phone2.png" alt="Phone" /></li>
                                <li><img role="button" data-index="8" src="https://static-2.zoom.us/static/6.2.8801/image/new/home/developer.png" alt="developer platform Apis & SDKs" /></li>
                                <li><img role="button" data-index="4" src="https://static-2.zoom.us/static/6.2.8801/image/new/home/zoomforhome.png" alt="Zoom for Home" /></li>
                                <li><img role="button" data-index="9" src="https://static-2.zoom.us/static/6.2.8801/image/new/home/onzoom.png" alt="OnZOOM" /></li>
                                <li><img role="button" data-index="6" src="https://static-2.zoom.us/static/6.2.8801/image/new/home/marketplace.png" alt="Zoom App marketplace" /></li>
                                <li><img role="button" data-index="7" src="https://static-2.zoom.us/static/6.2.8801/image/new/home/icon-zoom-events.svg" alt="Webinars" /></li>
                                <li><img role="button" data-index="2" src="https://static-2.zoom.us/static/6.2.8801/image/new/home/zoomrooms.png" alt="Zoom Rooms" /></li>
                                <li><img role="button" data-index="5" src="https://static-2.zoom.us/static/6.2.8801/image/new/home/chat.png" alt="Chat" /></li>
                                <p>Meetings</p>
                                <p>Phone</p>
                                <p>Developer Platform APIs & SDKs</p>
                                <p>Zoom for Home</p>
                                <p>ONZOOM</p>
                                <p>Zoom App Marketplace</p>
                                <p>ZOOM WEBINARS</p>
                                <p>Zoom Rooms</p>
                                <p>Zoom Team Chat</p>
                            </ul> */}
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="card border border-0" style={{ width: "25rem", height: "25rem" }}>
                            <div className="card-body text-center">
                                <div className='row'>
                                    <div className="col-md-6">
                                        <span style={{ fontSize: "34px", fontWeight: "500", textAlign: "justify" }}>Zoom  Team for<br /> you</span>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={female} alt='female' style={{ width: "200px" }} />
                                    </div>
                                    <div className='lower ps-5'>
                                        <p>Power your voice communications with our global cloud phone solution with secure call routing, call queues, SMS, elevate calls to meetings, and much more.</p>
                                        <div className='bottom'>
                                            <span className='float-start'>See it in action</span>
                                            <span className='float-end'>Product Page</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Zoom />
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="container">
                    <div className="carousel-inner">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="card border border-0">
                                    <div className="card-body text-center">
                                        <div className="carousel-item active" data-bs-interval="1000">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <img src={man} className="d-block mb-4 " style={{ width: "80px" }} alt="man" />
                                                        <p className='text-start zoom'>"Zoom is probably the most well-received collaboration tool that we've seen at Fox in 20 years. There is no other tool that has brought people closer together than Zoom."</p>
                                                        <small className='text-start'>Doug Goetz at 21st Century Fox</small>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <iframe width='400' height='382'
                                                            src='https://www.youtube.com/embed/YBOPloDwUXk?rel=0&autoplay=1&showinfo=0'>
                                                        </iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <img src={abinbev} className="d-block mb-4 " style={{ width: "80px" }} alt="man" />
                                                        <p className='zoom'>"Zoom is probably the most well-received collaboration tool that we've seen at Fox in 20 years. There is no other tool that has brought people closer together than Zoom."</p>
                                                        <small className='text-sm-start'>Jelena Joffe at AB in Bev</small>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <iframe width='400' height='382'
                                                            src='https://www.youtube.com/embed/HABjoUIYCRE?rel=0&autoplay=1&showinfo=0'>
                                                        </iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <img src={fresh} className="d-block mb-4 " style={{ width: "80px" }} alt="man" />
                                                        <p className='zoom'>"We like that anybody on the go can use it. We are everywhere, so it's very important to have the most easy way to go and start meetings."</p>
                                                        <small className='text-sm-start'>Shobhana Ahluwalia at Uber</small>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <iframe width='400' height='382'
                                                            src='https://www.youtube.com/embed/PgzBNcoQuVo?rel=0&autoplay=1&showinfo=0'>
                                                        </iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="container " style={{ margin: "104px 0px" }}>
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-9 text-center  nn ">
                        <div className="second">
                            <img src={fox} className='img-responsive img-fluid' alt="myob" />
                        </div>
                        <div className="second">
                            <img src={AB} className='img-responsive img-fluid' alt="belomo" />
                        </div>
                        <div className="second">
                            <img src={capital} className='img-responsive img-fluid' alt="belomo" />
                        </div>
                        <div className="second">
                            <img src={Zendesk} className='img-responsive img-fluid' alt="life" />
                        </div>
                        <div className="second">
                            <img src={veena} className='img-responsive img-fluid' alt="lilly" />
                        </div>
                    </div>
                </div>
            </div>
            <Companies />
        </>
    )
}

export default You