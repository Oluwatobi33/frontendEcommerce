import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { baseurl } from "./Endpoint"
import { useNavigate } from 'react-router-dom'
const Upload = () => {
    const Navigate = useNavigate()
    const [File, setFile] = useState("")
    const [productname, setproductname] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")
    const [name, setname] = useState("")
    const [allProduct, setallProduct] = useState([])
    const [success, setsuccess] = useState("")
    const [email, setemail] = useState("");
    const [balance, setbalance] = useState(0)
    // const customer = localStorage.customer;
    const getFile = (e) => {
        const myFile = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(myFile)
        reader.onload = () => {
            setFile(reader.result);
            console.log(File);
        }
    }
    const clickb = () => {
        let product = { productname, price, description, File, balance }
        axios.post(`${baseurl}upload`, { product }).then((message) => {
            let Err = message.data.message
            console.log(Err);
            if (Err == "one input field is empty") {
                setemail(Err)
            } else {
                setsuccess("Product upload successfully")
                console.log(success);
            }
        })
    }
    return (
        <>
            <div className='container-fluid display'>
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-lg-12 col-md-12 align-center">
                            <p className='text-white fs-4'>Upload Your Product</p>
                            <input type="file" className=" my-2 okay form-control" placeholder="upload_image" onChange={(e) => getFile(e)} />
                            <input type="text" placeholder='productname' name='productn' onChange={(e) => setproductname(e.target.value)} className='form-control my-3' />
                            <input type="number" placeholder='price' name='price' onChange={(e) => setprice(e.target.value)} className='form-control my-2' />
                            <textarea type="text" name="description" onChange={(e) => setdescription(e.target.value)} cols="30" rows="10" className='form-control'></textarea>
                            <button type="submit" className='btn btn-success btn-lg mt-3' onClick={() => clickb()}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upload