import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './component/NavBar';
// import HomeScreen from "../src/component/HomeScreen"
import DisplayPro from './component/DisplayPro';
import Productdet from "./component/Productdet"
// import CreateTable from './component/CreateTable';
import Product from './component/Product';
// import Home from './component/Home';
import Upload from './component/Upload';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Home from './component/Home';
import Slider from './component/Slider';
import Addtocart from './component/Addtocart';
import Registration from './component/Registration';
import Dashboard from './component/Dashboard';
import Viewproduct from './component/Viewproduct';
import Contact from './component/Contact';
import About from './component/About';
import Footer from './component/Footer';
import Checkout from './component/Checkout';
// import Reset from './component/Reset';
// import ForgetPassword from './component/ForgetPassword';
import Resetpwd from './component/Resetpwd';
function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='product/:username' element={<Productdescription />} /> */}
        {/* <Route path='/CreateTable' element={<CreateTable />} /> */}
        <Route path='/DisplayPro' element={<DisplayPro />} />
        <Route path='/product' element={<Product />} />
        <Route path='/Upload' element={<Upload />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/NavBar' element={<NavBar />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Slider' element={<Slider />} />
        <Route path="/Addtocart" element={<Addtocart />} />
        <Route path="/viewproduct" element={<Viewproduct />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/productdet" element={<Productdet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Footer" element={<Footer />} />
        {/* <Route path="/Reset" element={<Reset />} /> */}
        <Route path="/Resetpwd" element={<Resetpwd />} />


      </Routes>
    </>
  );
}
export default App;
