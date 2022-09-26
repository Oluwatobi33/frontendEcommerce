import React from "react";
// import './App.css'
import { useState } from "react";
import friend from "../assest/images/wba.png";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import Nav from "./Nav";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const Navigate = useNavigate()
    const [setQuestion, setsetQuestion] = useState("")
    const [random, setrandom] = useState([])
    const [Answer, setAnswer] = useState("")
    const [correctC, setCorrectC] = useState("")
    const [tappedIndex, settappedIndex] = useState()
    const [score, setscore] = useState(0)
    // const [count, setcount] = useState(0)
    // const [color, setcolor] = useState("")
    // let dashname = JSON.parse(localStorage.getItem("game"))
    // console.log(dashname);
    const toggleMenu = () => {
        let navigation = document.querySelector(".navigation");
        let container = document.querySelector(".container");
        let toggle = document.querySelector(".toggle");
        container.classList.toggle("active");

        navigation.classList.toggle("active");
        toggle.classList.toggle("active");
    };

    let display = JSON.parse(localStorage.getItem("questions"))
    useEffect(() => {
        // console.log(display);
        let randQuestion = Math.floor(Math.random() * display.length)
        setsetQuestion(display)
        setrandom(() => display[randQuestion])

        // console.log(randQuestion);
        // console.log(display[randQuestion]);

        let correctAnswer = display[randQuestion].correct
        console.log(correctAnswer)
        setAnswer(correctAnswer)
        setCorrectC('')

    }, [setrandom])
    // const trigger = () => {
    //     let rr = 0
    //     var newScore = setscore(rr + 1)
    //     setscore(newScore)
    //     console.log(score);
    // }

    // console.log(random);
    const Next = () => {
        // setcount(count + 1)
        // console.log(count);
        let a = Math.floor(Math.random() * setQuestion.length)
        console.log(a);
        setrandom(() => setQuestion[a])
        let correctAnswer = setQuestion[a].correct
        // console.log(correctAnswer)
        setAnswer(correctAnswer)
        setCorrectC('')
        settappedIndex(-1);
        setTimeout(Next, 30000)

        // settogether([...together, values]);
        // console.log(random)
        // let ope = setrandom(random)
        // let spread = [...ope]
        // console.log(spread);y
        // spread.filter((item, index) => {
        //     <div>{setAnswer(item.correct)}</div>
        // })

        //     setAnswer([...Answer, random]);
        //     console.log(Answer);
        //     let take = { correct, optiona, optionb, optionc, optiond }
        //     setcheck([...random, take])
        //     console.log(check);
    }
    const option = (e, index) => {
        if (e === Answer) {
            setscore(score + 1000)
            console.log("$" + score);
            settappedIndex(index);
            setCorrectC('true')

        } else {
            setscore(score - 1000)
            if (score == 0) {
                localStorage.ss = JSON.stringify(score)
                Next(isDisabled)
                Navigate('/GameOver')
            }
            console.log("$" + score);
            settappedIndex(index);
            setCorrectC('false')

        }
    }
    return (
        <>
            <section className="section3">
                <Nav />
                <div class="toggle mb-4" onClick={toggleMenu}></div>
                <div className="container text-light pt-5">
                    <div className="que">
                        <div className="row justify-content-center">
                            <div className="col-md-12 text-center sep">
                                <p className="text-white h5 fw-bold">YOUR TOTAL SCORE IS :{score}</p>
                                <img src={friend} className='img-responsive img-fluid' style={{ width: "100px" }} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-9 text-center " >
                                <div className=" border border-0 rounded rounded-4 py-2 bg-white text-dark h3">{random.question}</div>
                            </div>
                        </div>
                        < div className="row mt-5 justify-content-center ">
                            <div className="col-md-5 mb-2">
                                <div className={(tappedIndex == 0 && correctC == 'true') ? " border   rounded rounded-4 py-2 bg-success h5" : (tappedIndex == 0 && correctC == 'false') ? " border  rounded rounded-4 py-2 bg-danger" : " border  rounded rounded-4 py-2 "} onClick={(e) => option(e.target.innerHTML, 0)}>{random.optiona}</div>
                            </div>
                            <div className="col-md-5">
                                <div className={(tappedIndex == 1 && correctC == 'true') ? " border   rounded rounded-4 py-2 bg-success h5" : (tappedIndex == 1 && correctC == 'false') ? " border  rounded rounded-4 py-2 bg-danger" : " border  rounded rounded-4 py-2 "} onClick={(e) => option(e.target.innerHTML, 1)}>{random.optionb}</div>
                            </div>
                        </div>
                        <div className="row mt-5 justify-content-center ">
                            <div className="col-md-5 mb-2">
                                <div className={(tappedIndex == 2 && correctC == 'true') ? " border   rounded rounded-4 py-2 bg-success h5" : (tappedIndex == 2 && correctC == 'false') ? " border  rounded rounded-4 py-2 bg-danger" : " border  rounded rounded-4 py-2 "} onClick={(e) => option(e.target.innerHTML, 2)}>{random.optionc}</div>
                            </div>
                            <div className="col-md-5">
                                <div className={(tappedIndex == 3 && correctC == 'true') ? " border   rounded rounded-4 py-2 bg-success h5" : (tappedIndex == 3 && correctC == 'false') ? " border  rounded rounded-4 py-2 bg-danger" : " border  rounded rounded-4 py-2 "} onClick={(e) => option(e.target.innerHTML, 3)}>{random.optiond}</div>
                            </div>
                            <button class="btn btn-primary col-md-6 mt-3 text-center" onClick={Next}>Next</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Dashboard;
