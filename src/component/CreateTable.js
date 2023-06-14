import React, { useState } from 'react'
import { useEffect } from 'react'
// import Rating from 'react-rating'
const CreateTable = () => {
    const [userData, setuserData] = React.useState([])
    const [userSearch, setuserSearch] = React.useState([])
    const [name, setname] = React.useState("")
    const [description, setdescription] = React.useState("")
    React.useEffect(() => {
        // let AllFilter = JSON.parse(localStorage.UserItem)
        // setuserData(AllFilter)
        // setuserSearch(AllFilter)
    }, [])
    const handleSearch = () => {
        const newData = userData.filter(x => x.name == (name == '' ? x.name : name)).filter(y => y.description == (description == '' ? y.description : description))
        setuserSearch(newData)
        console.log(userSearch);
    }
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-4">
                        <input type="text" className='form-control text-dark fw-bold' placeholder='Enter name' onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                        <select className='form-control text-dark fw-bold' onChange={(e) => setdescription(e.target.value)}>
                            <option value="">
                                --Select--
                            </option>
                            <option value="software Development">
                                software Development
                            </option>
                            <option value="doctor">
                                doctor
                            </option>
                            <option value="FashionDesigner">
                                FashionDesigner
                            </option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" onClick={handleSearch} className='btn btn-success btn-lg py-3 px-5 text-uppercase'>Search</button>
                    </div>
                </div>
            </div>
            {
                userSearch && userSearch.length > 0 ? userSearch.map((item, index) => (
                    <div className="card" style={{ width: "19rem" }}>
                        <img src={item.setFile} className='img-fluid img-responsive w-100 card-img-top' />

                        <h3>{item.name}</h3>
                        {/* <Rating style={{ color: "orange" }}
                            initialRating={item.rating}
                            emptySymbol="fa fas-star-o fa-1x"
                            fullSymbol="fa fa-star fa-2x"
                            readonly={true}
                        /> */}
                        <h1 className='price'>Price: {item.price}</h1>
                        <h2>Description: {item.description}</h2>
                        <p className='para'><button>Add to cart</button></p>
                    </div>
                ))
                    : 'No data'
            }
            {/* userSearch && userSearch.length > 0 ? userSearch.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.profession}</td>
                                </tr>
                            ))
                                : 'No data'
                        } */}
        </>
    )
}

export default CreateTable