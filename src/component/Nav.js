import React from 'react'
import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <>
            <div class="navigation">
                <ul>
                    <li>
                        <Link to="/Dashboard">
                            <a>
                                <span class="icon">
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                </span>
                                <span class="title text-uppercase">Home</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <a>
                                <span class="icon">
                                    <i class="fa fa-comment" aria-hidden="true"></i>
                                </span>
                                <span class="title">TAKE QUIZ</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <a>
                                <span class="icon">
                                    <i class="fa fa-comment" aria-hidden="true"></i>
                                </span>
                                <span class="title">PHONE A FRIEND</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Quiz">
                            <a>
                                <span class="icon">
                                    <i class="fa fa-comment" aria-hidden="true"></i>
                                </span>
                                <span class="title text-uppercase">Set-Questions</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <a>
                                <span class="icon">
                                    <i class="fa fa-comment" aria-hidden="true"></i>
                                </span>
                                <span class="title text-uppercase">Call Audience</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <a>
                                <span class="icon">
                                    <i class="fa fa-comment" aria-hidden="true"></i>
                                </span>
                                <span class="title text-uppercase">50:50</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <button className="btn form-control text-light" style={{ border: "none" }}>
                                <a>
                                    <span class="icon">
                                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                                    </span>
                                    <span class="title text-uppercase">Log-Out</span>
                                </a>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav