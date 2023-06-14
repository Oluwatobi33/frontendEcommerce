import React from 'react'

import { useParams } from 'react-router-dom'
const Productdet = ({ props }) => {
    let userIndex = props
    const { username } = useParams()
    const product = userIndex.find(product => product.index == username)
    console.log(product);
    return (
        <>
            <h3>Product Description Page</h3>
            <h1>product Id is {product}</h1>
            <h3>{product.name}</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card p-2 m-2">
                            <h1>{product.name}</h1>
                            <img style={{ height: "300px" }} className=' bigimg img-fluid m-3' src={product.image} />
                            <p className='para'>{product.description}</p>
                        </div>
                    </div>
                    <div className="col-md-6 text-left">
                        <div className="m-2">
                            <h1>{product.price}</h1>
                            <hr />
                            <h1>Select Quantity</h1>
                            <select name="" id="">
                                {[...Array(product.countInstock).keys()].map((x, i) => {
                                    return <option value={i + 1}>{i + 1}</option>
                                })}
                            </select>
                            <hr />
                            <button className='btn btn-dark btn-md'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productdet