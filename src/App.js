import Signin from "./component/Signin";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import NavbarFirst from "./component/NavbarFirst"
import Error from "./component/Error";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/NavbarFirst" element={<NavbarFirst />}></Route>
        <Route path='*' element={<Error />} />
      </Routes>

      {/* <Signin /> */}
    </>
  );
}

export default App;
