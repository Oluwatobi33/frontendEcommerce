import Signin from "./component/Signin";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import NavbarFirst from "./component/NavbarFirst"
import Error from "./component/Error";
import React from "react";
// import { useState, useEffect } from 'react'
function App() {
  // const [lo, setloader] = useState(true)
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/NavbarFirst" element={<NavbarFirst />}></Route>
        <Route path='*' element={<Error />} />
      </Routes>

    </>
  );
}

export default App;
