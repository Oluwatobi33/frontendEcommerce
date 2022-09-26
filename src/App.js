import { Route, Routes } from 'react-router-dom';
import './App.css'
import Signin from "./component/Signin";
import Home from "./component/Home"
import FormikForm from "./component/FormikForm";
import Dashboard from './component/Dashboard';
import Quiz from './component/Quiz';
import GameOver from './component/GameOver';
import Error from './component/Error';
function App() {
  return (
    <>
      {/* <FormikForm /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/FormikForm" element={<FormikForm />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='/Quiz' element={<Quiz />}></Route>
        <Route path='/GameOver' element={<GameOver />}></Route>
        <Route path='*' element={<Error />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
