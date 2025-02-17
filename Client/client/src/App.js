import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Screencomponents/Homecomponents/Home" 
import About from './Screencomponents/Aboutcomponents/About'
import Login from './Components/Student/Login';
import Header from './Components/Header';
//import Footer from './Components/Footer';
import Requestform from './Components/Request/Requestform';
import Registration from './Components/Student/Registration';
import Contact from './Screencomponents/Contactcomponents/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/request' element={<Requestform/>}/>          

        </Routes>
      </BrowserRouter>
      {/* <Registration/> */}
    </>
  );
}

export default App;
