import React from 'react'
import NavbarFirst from './NavbarFirst'
import You from "../component/You"
import { useState, useEffect } from 'react'
import Together from './Together'
import Zoom from './Zoom';
const Home = () => {
    const [load, setload] = useState(true)
    const [progress, setProgress] = useState(0)
    const chat = () => {
        var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/636d83b1b0d6371309ce6c4c/1ghhskses';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    }
    const [backTop, setbackTop] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setbackTop(true)
            } else {
                setbackTop(false)
            }
        })
        window.addEventListener('load', function () {
            setload(false)
        })

    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div>
                {load ? <div className="center"><div className="loader"></div></div> :
                    <div>
                        <NavbarFirst />
                        <Together />
                        <Zoom />
                        <You />
                        {Home && (
                            <button className='border-0' style={{ position: "fixed", backgroundColor: "#39394D", color: "#ffff", bottom: "50px", right: "50px", height: "60px", width: "70px", fontSize: "40px" }} onClick={scrollUp}>^</button>

                        )}
                        {/* <button className='border-0' style={{ position: "fixed", backgroundColor: "green", color: "red", bottom: "50px", right: "50px", height: "50px", width: "50px", fontSize: "40px" }} onClick={chat}>0</button> */}

                        {/* <button onClick={() => setProgress(progress + 10)}>Add 10%</button>
            <button onClick={() => setProgress(progress + 20)}>Add 20%</button>
            <button onClick={() => setProgress(100)}>Complete</button>
            <br /> */}
                    </div>
                }
            </div>
        </>
    )
}

export default Home