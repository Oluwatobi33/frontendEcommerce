import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { baseurl } from "../component/Endpoint"
import { useNavigate } from 'react-router-dom'
const DisplayPro = () => {
    const Navigate = useNavigate()
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")
    const [setFile, setsetFile] = useState("")
    const [allProduct, setallProduct] = useState([])
    const [email, setemail] = useState("")
    const [success, setsuccess] = useState("")
    // let AllProduct
    useEffect(() => {
        // if (localStorage.UserItem) {
        //     AllProduct = JSON.parse(localStorage.UserItem)
        //     setallProduct(AllProduct)
        // }

    }, [])
    const getFile = (e) => {
        const myFile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(myFile)
        reader.onload = () => {
            setsetFile(reader.result);
            console.log(setFile);
        }
    }
    const signUp = () => {
        let product = { name, price, description, setFile }
        axios.post(`${baseurl}displayPro`, { product }).then((message) => {
            let Err = message.data.message
            console.log(Err);
            if (Err == "one input field is empty") {
                setemail(Err)
            } else {
                setsuccess("Product upload successfully")
                console.log(success);
                Navigate('/DisplayPro')
            }
        })
    }
    // let EachProduct = [...allProduct, product]
    // setallProduct(EachProduct)
    // localStorage.UserItem = JSON.stringify(EachProduct)
    // console.log(EachProduct);
    return (
        <>
            <div className='container-fluid display'>
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-lg-12 col-md-12 align-center">
                            <p className='text-white fs-4'>Upload Your Product</p>
                            <input type="text" className=" my-2 okay" name='name' placeholder="name" onChange={(e) => setname(e.target.value)} />
                            <input type="text" className=" my-2 okay" placeholder="price" onChange={(e) => setprice(e.target.value)} />
                            <input type="text" onChange={(e) => setdescription(e.target.value)} className=" my-2 okay" placeholder="description" />
                            <input type="file" className=" my-2 okay" placeholder="upload_image" onChange={(e) => getFile(e)} />
                            <button type="submit" className='btn btn-success btn-lg' onClick={signUp}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DisplayPro


