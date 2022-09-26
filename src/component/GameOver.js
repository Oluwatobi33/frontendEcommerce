import React from 'react'

const GameOver = (score) => {
    let everyScore = JSON.parse(localStorage.getItem("ss"))
    return (
        <>
            <div className="contanier">
                <div className="row">
                    <div className="col-md-12 py-5" style={{ backgroundColor: "#071348" }}>
                        <p className="text-white h5 fw-bold text-center">YOUR TOTAL SCORE IS : {everyScore}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameOver